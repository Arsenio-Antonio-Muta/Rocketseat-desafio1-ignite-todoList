import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Tasks } from "./components/Tasks"

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.tasksContainer}>
        <Tasks />
      </main>
    </div>
  )
}