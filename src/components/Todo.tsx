import styles from '../components/Todo.module.css'
import { PlusCircle } from "@phosphor-icons/react";

export function Todo() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.addButton}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  )
}
