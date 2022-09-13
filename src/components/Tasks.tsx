import styles from './Tasks.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskList } from './TaskList';

export function Tasks() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        content: "Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa",
        completed: true,
      },
      {
        id: 2,
        content: "eqwrw12341Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa",
        completed: false,
      },
      {
        id: 3,
        content: "fgasdfasQue vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa",
        completed: false,
      },
      {
        id: 4,
        content: "dgasdhfdsQue vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa",
        completed: true,
      },
    ]
  )

  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, {
      id: tasks.length + 1,
      content: newTaskText,
      completed: true
    }])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks)
  }

  function handleCheckTask(id: number) {
    const chackedTask = tasks.map((task) => task.id === id ? {
      ...task,
      completed: !task.completed,
    } : task)
    //console.log(chackedTask)
    setTasks(chackedTask)
  }

  let count = 0;

  return (
    <>
      <form onSubmit={handleNewTask} className={styles.addInput}>
        <textarea
          placeholder="Escreva uma tarefa"
          required
          name='task'
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button>
          Criar
          <PlusCircle size={24} />
        </button>
      </form>
      <div className={styles.container}>
        <header className={styles.tasks}>
          <div className={styles.counterTask}>
            <h4 className={styles.createdTask}>Tarefas criadas</h4>
            <h4 className={styles.counter}>{tasks.length}</h4>
          </div>
          <div className={styles.counterTask}>
            <h4 className={styles.concludeTask}>Tarefas concluídas</h4>
            <h4 className={styles.counter}>{tasks.map((task) => {
              task.completed === true ? count += 1 : count

              let total = tasks.length

              if (task.id === total) {
                return count
              } else {
                return ''
              }
            })}</h4>
          </div>
        </header>
        <main className={styles.taskListContainer}>
          <ul className={styles.ulContainer}>
            {tasks.map((task) => {
              return (
                <TaskList
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  completed={task.completed}
                  onDelete={handleDeleteTask}
                  onCheckTask={handleCheckTask}
                />
              )
            })}
          </ul>
        </main>
      </div>
    </>
  )
}