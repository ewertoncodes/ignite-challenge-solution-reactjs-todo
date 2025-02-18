import { PlusCircle } from "@phosphor-icons/react";
import styles from './Button.module.css';

export function Button() {
  return(
    <button className={styles.container}>
      Criar
      <PlusCircle size={20} />
    </button>
  )
}
