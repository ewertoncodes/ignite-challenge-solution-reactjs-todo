import { Header } from "./components/Header"
import { Todo } from "./components/Todo"
import { EmptyList } from "./components/EmptyList"

import  styles  from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Todo />
        <EmptyList />
      </div>
    </>
  )
}
