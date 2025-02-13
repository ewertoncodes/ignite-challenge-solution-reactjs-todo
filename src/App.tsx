import { Header } from "./components/Header"
import { Todo } from "./components/Todo"
import { TodoList } from "./components/TodoList"

import  styles  from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Todo />
        <TodoList />
      </div>
    </>
  )
}
