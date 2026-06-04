import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Hot Take Slot Machine</h1>
        <p className={styles.subtitle}>
          Type any arguable position. Get three short essays back — each one deploying a different rhetorical strategy. Can you figure out what each one is doing before you reveal it?
        </p>
      </div>
    </header>
  )
}
