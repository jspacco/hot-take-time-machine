'use client'

import EssayCard from './EssayCard'
import styles from './EssayList.module.css'

export default function EssayList({ essays, modes, revealed, onReveal, onRevealAll, hotTake }) {
  const allRevealed = revealed.every(Boolean)

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <h2 className={styles.heading}>
          Three takes on: <em>"{hotTake}"</em>
        </h2>
        {!allRevealed && (
          <button className={styles.revealAll} onClick={onRevealAll}>
            Reveal all
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {essays.map((essay, i) => (
          <EssayCard
            key={i}
            index={i}
            essay={essay}
            mode={modes[i]}
            revealed={revealed[i]}
            onReveal={() => onReveal(i)}
          />
        ))}
      </div>

      <div className={styles.discussion}>
        <strong>Discussion prompt:</strong> Which essay is actually arguing the position? Can you find the sentence that gives it away?
      </div>
    </div>
  )
}
