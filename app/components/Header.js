'use client'

import { useState } from 'react'
import { MODES } from '../../lib/modes'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Hot Take Time Machine</h1>
          <p className={styles.subtitle}>
            Type any arguable position ("Hot Take"). Get three short essays back — each one deploying a different (usually bad) rhetorical strategy. Can you figure out what each one is doing before you reveal it?
          </p>
        </div>

        <div className={styles.modesSection}>
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <span className={styles.toggleIcon}>{isOpen ? '▾' : '▸'}</span>
            <span className={styles.toggleText}>
              {isOpen ? 'Hide essay error modes' : 'Explore essay error modes'}
            </span>
            <span className={styles.toggleCount}>({MODES.length})</span>
          </button>

          {isOpen && (
            <div className={styles.modesPanel}>
              <div className={styles.modesGrid}>
                {MODES.map((mode) => (
                  <div
                    key={mode.id}
                    className={styles.modeCard}
                    style={{ borderTopColor: mode.color }}
                  >
                    <div className={styles.modeHeader}>
                      <span
                        className={styles.modePill}
                        style={{
                          backgroundColor: `${mode.color}18`,
                          color: mode.color,
                          borderColor: `${mode.color}44`,
                        }}
                      >
                        <span
                          className={styles.modeDot}
                          style={{ backgroundColor: mode.color }}
                        />
                        {mode.label}
                      </span>
                    </div>
                    <p className={styles.modePrompt}>{mode.prompt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
