'use client'

import styles from './EssayCard.module.css'

export default function EssayCard({ index, essay }) {
  const number = index + 1

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.label}>Essay #{number}</span>
      </div>
      <div className={styles.essayBody}>
        {essay.split(/\n+/).filter(Boolean).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  )
}

