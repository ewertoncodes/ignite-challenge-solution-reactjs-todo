import styles from '../components/Input.module.css';

export function Input() {
  return (
    <form className={styles.inputContainer} >
      <input type="text" placeholder="Adicione uma nova tarefa" />
    </form>
  )
}
