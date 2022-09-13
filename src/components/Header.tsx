import styles from './Header.module.css'
import logo_todo from '../assets/logo_todo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo_todo} />
    </header>
  )
}