'use client'

import EssayCard from './EssayCard'
import styles from './EssayList.module.css'

export default function EssayList({ essays, modes, hotTake }) {
  function handleDownload() {
    const textContent = [
      `HOT TAKE:\n"${hotTake}"`,
      ...essays.map((essay, i) => {
        const number = i + 1
        const modeLabel = modes[i]?.label || 'Unknown Mode'
        return `============================================================\nESSAY #${number}: ${modeLabel}\n============================================================\n\n${essay.trim()}`
      }),
    ].join('\n\n\n')

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'hot-take-essays.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <h2 className={styles.heading}>
          Three takes on: <em>"{hotTake}"</em>
        </h2>
        <button
          type="button"
          className={styles.downloadButton}
          onClick={handleDownload}
        >
          <span>↓</span> Download essays (.txt)
        </button>
      </div>

      <div className={styles.grid}>
        {essays.map((essay, i) => (
          <EssayCard
            key={i}
            index={i}
            essay={essay}
          />
        ))}
      </div>

      <div className={styles.discussion}>
        <strong>Discussion prompt:</strong> Which essays are not doing a good job of making the argument? Why?
      </div>
    </div>
  )
}

