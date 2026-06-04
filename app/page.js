'use client'

import { useState } from 'react'
import { pickModes } from '../lib/modes'
import Header from './components/Header'
import HotTakeInput from './components/HotTakeInput'
import EssayList from './components/EssayList'
import styles from './page.module.css'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null) // { hotTake, essays, modes, revealed }

  async function handleGenerate(hotTake) {
    setLoading(true)
    setError(null)
    setResult(null)

    const modes = pickModes(3)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hotTake, modeIds: modes.map((m) => m.id) }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Generation failed')
      }

      setResult({
        hotTake,
        essays: data.essays,
        modes,
        revealed: [false, false, false],
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleReveal(index) {
    setResult((prev) => {
      const revealed = [...prev.revealed]
      revealed[index] = true
      return { ...prev, revealed }
    })
  }

  function handleRevealAll() {
    setResult((prev) => ({ ...prev, revealed: [true, true, true] }))
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <HotTakeInput onGenerate={handleGenerate} loading={loading} />

          {error && (
            <div className={styles.error}>
              <strong>Error:</strong> {error}
            </div>
          )}

          {loading && (
            <div className={styles.loading}>
              Generating three essays… this takes a few seconds.
            </div>
          )}

          {result && !loading && (
            <EssayList
              hotTake={result.hotTake}
              essays={result.essays}
              modes={result.modes}
              revealed={result.revealed}
              onReveal={handleReveal}
              onRevealAll={handleRevealAll}
            />
          )}
        </div>
      </main>
    </>
  )
}
