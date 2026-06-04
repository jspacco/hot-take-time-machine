'use client'

import { useState } from 'react'
import styles from './EssayCard.module.css'

const LABELS = ['A', 'B', 'C']

export default function EssayCard({ index, essay, mode, revealed, onReveal }) {
  const label = LABELS[index] ?? index + 1

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.label}>Essay {label}</span>
        {revealed ? (
          <span
            className={styles.modePill}
            style={{ background: mode.color }}
          >
            {mode.label}
          </span>
        ) : (
          <button className={styles.revealButton} onClick={onReveal}>
            Reveal
          </button>
        )}
      </div>
      <div className={styles.essayBody}>
        {essay.split(/\n+/).filter(Boolean).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  )
}
