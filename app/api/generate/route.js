import { GoogleGenerativeAI } from '@google/generative-ai'
import { MODES } from '../../../lib/modes'

const PREAMBLE = `Write a short essay (3 paragraphs, approximately 150 words total) responding to the following position.

Rules:
- Do NOT label, announce, name, or hint at your rhetorical strategy anywhere in the essay.
- Do NOT use meta-commentary like "I will argue..." or "This essay will..."
- Just write the essay. The strategy should be invisible to a casual reader.
- Write in a clear, readable style appropriate for a college-level discussion.

Position: `

export async function POST(request) {
  try {
    const { hotTake, modeIds } = await request.json()

    if (!hotTake || !modeIds || modeIds.length !== 3) {
      return Response.json(
        { error: 'hotTake and modeIds (array of 3) are required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'GEMINI_API_KEY is not configured' },
        { status: 500 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const modes = modeIds.map((id) => {
      const mode = MODES.find((m) => m.id === id)
      if (!mode) throw new Error(`Unknown mode id: ${id}`)
      return mode
    })

    const essays = await Promise.all(
      modes.map(async (mode) => {
        const prompt = `${PREAMBLE}${hotTake}\n\nYour rhetorical task: ${mode.prompt}`
        const result = await model.generateContent(prompt)
        return result.response.text()
      })
    )

    return Response.json({ essays })
  } catch (err) {
    console.error('Generate error:', err)
    return Response.json(
      { error: err.message || 'Generation failed' },
      { status: 500 }
    )
  }
}
