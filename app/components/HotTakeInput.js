'use client'

import { useState } from 'react'
import { EXAMPLE_HOT_TAKES } from '../../lib/modes'
import styles from './HotTakeInput.module.css'

export default function HotTakeInput({ onGenerate, loading }) {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function handleChip(text) {
    setValue(text)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || loading) return
    onGenerate(trimmed)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="hot-take-input">
          Your hot take
        </label>
        <div className={styles.inputRow}>
          <input
            id="hot-take-input"
            className={styles.input}
            type="text"
            placeholder=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={loading}
            maxLength={300}
          />
          <button
            type="submit"
            className={styles.button}
            disabled={!value.trim() || loading}
          >
            {loading ? 'Generating…' : 'Generate'}
          </button>
        </div>
      </form>

      <div className={styles.examplesSection}>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <span className={styles.chipsLabel}>Try one:</span>
          <span className={styles.toggleAction}>
            {isOpen ? 'hide examples' : 'show examples'}
          </span>
          <span className={styles.toggleIcon}>{isOpen ? '▾' : '▸'}</span>
        </button>

        {isOpen && (
          <div className={styles.chips}>
            {EXAMPLE_HOT_TAKES.map((take) => (
              <button
                key={take}
                type="button"
                className={styles.chip}
                onClick={() => handleChip(take)}
                disabled={loading}
              >
                {take}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

