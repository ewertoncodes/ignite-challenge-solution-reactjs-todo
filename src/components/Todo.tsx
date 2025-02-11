import styles from '../components/Todo.module.css'

export function Todo() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.addButton}>Criar</button>
    </div>
  )
}
