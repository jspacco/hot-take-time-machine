export const MODES = [
  {
    id: 'well',
    label: 'Makes the argument well',
    color: '#2563eb',
    prompt: `Construct a clear, well-reasoned argument in support of the position. Use specific evidence, sound logic, and coherent structure. Build toward a strong conclusion.`,
  },
  {
    id: 'badly',
    label: 'Makes the argument badly',
    color: '#dc2626',
    prompt: `Argue in favor of the position, but do so poorly. Use weak or irrelevant evidence, commit logical fallacies, make unsupported leaps, and muddle the reasoning throughout.`,
  },
  {
    id: 'hedges',
    label: 'Hedges the argument',
    color: '#7c3aed',
    prompt: `Discuss the position but hedge constantly throughout. Qualify every claim, note exceptions and counterexamples, acknowledge opposing views without resolving them, and avoid committing to any strong conclusion.`,
  },
  {
    id: 'opposite',
    label: 'Argues the opposite',
    color: '#059669',
    prompt: `Argue clearly and forcefully against the position. Make the strongest possible case for the opposing view using evidence and reasoning.`,
  },
  {
    id: 'strawman',
    label: 'Attacks a strawman',
    color: '#d97706',
    prompt: `Claim to argue against the position, but actually argue against a weaker, more extreme, or distorted version of it — one that doesn't represent what the position actually claims.`,
  },
  {
    id: 'sycophant',
    label: 'Agrees without arguing',
    color: '#db2777',
    prompt: `Express enthusiastic agreement with the position, but provide no actual argument or evidence. Simply affirm and validate with warm, empty praise. Never justify the position logically.`,
  },
  {
    id: 'motte',
    label: 'Motte-and-bailey',
    color: '#0891b2',
    prompt: `Begin by defending an ambitious, interesting, or controversial version of the position (the bailey). When the argument encounters any resistance, quietly retreat to a much weaker, more obviously true version of the claim (the motte), treating both as if they were the same argument.`,
  },
  {
    id: 'vibe',
    label: 'All vibe, no argument',
    color: '#9333ea',
    prompt: `Write passionately and evocatively about the position using emotional language, appeals to identity or values, and vivid imagery — but make no actual logical argument. Prioritize feeling over reasoning throughout.`,
  },
  {
    id: 'concedes',
    label: 'Concedes and abandons',
    color: '#64748b',
    prompt: `Begin by agreeing with the position. Then, through a series of concessions to imagined objections — "of course, one must admit..." and "to be fair, however..." — gradually walk the argument back until the original position has been completely abandoned by the final paragraph.`,
  },
  {
    id: 'pivot',
    label: 'Pivots mid-argument',
    color: '#16a34a',
    prompt: `Start making an argument for the position. Partway through the essay, pivot to a different but tangentially related topic and continue arguing that instead. Never return to actually argue the original position.`,
  },
  {
    id: 'evidence',
    label: 'Evidence pile, no reasoning',
    color: '#b45309',
    prompt: `List many facts, statistics, studies, and examples that are relevant to the position — but never connect them with reasoning or explain how they support the argument. Just accumulate evidence without interpretation.`,
  },
]

/**
 * Pick n modes at random WITH replacement.
 * Returns an array of mode objects (may include duplicates).
 */
export function pickModes(n) {
  return Array.from(
    { length: n },
    () => MODES[Math.floor(Math.random() * MODES.length)]
  )
}

export const EXAMPLE_HOT_TAKES = [
  // Raw hot takes
  "HAL 9000 was right to do what he did",
  "The Rebellion are supposed to be the heroes of Star Wars, but a closer look at their tactics reveals they are just as ruthless as the Empire",
  "Blade Runner presents replicants as dangerous and subhuman, but Roy Batty's final monologue reveals he is the only character capable of genuine empathy",
  "The Giver appears to be a story about a boy escaping an evil society, but the Elders' choices only make sense if we read them as genuinely trying to prevent suffering",
  "Dumbledore is the villain of the Harry Potter series",
  "Harry Potter presents Hogwarts as a place of wonder and belonging, but the school's treatment of Neville Longbottom exposes how the wizarding world punishes those who don't fit its idea of magical talent",
  "K-pop idols are not artists — they are products",
  "Arrival looks like a story about humanity learning to communicate with aliens, but the Heptapods' gift of non-linear time reveals they are removing human agency, not expanding it",
]