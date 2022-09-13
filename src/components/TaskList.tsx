import { Trash } from 'phosphor-react'
import styles from './TaskList.module.css'

interface TaskListProps {
  id: number;
  content: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onCheckTask: (id: number) => void;
}

export function TaskList({ id, content, onDelete, completed, onCheckTask }: TaskListProps) {

  function handleDeleteTask() {
    onDelete(id)
  }

  function handleChackTask() {
    onCheckTask(id)
  }

  return (
    <li>
      <label className={styles.labelContainer}>
        <input
          className={styles.checkboxInput}
          type="checkbox"
          checked={completed}
          readOnly
          onClick={handleChackTask}
        />
      </label>
      <p className={`${completed ? styles.finished : ''}`}>{content}</p>
      <Trash onClick={handleDeleteTask} className={styles.trash} size={24} />
    </li >
  )
}