import styles from '../components/Todo.module.css'

import { PlusCircle } from "@phosphor-icons/react";

export function Input() {
  const handleNewTask = (event: any) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleNewTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.addButton}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
