import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { EmptyList } from "./components/EmptyList"

import  styles  from './App.module.css'
import { Button } from "./components/Button"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Input />
          <Button />
        </div>
        <EmptyList />
      </div>
    </>
  )
}
