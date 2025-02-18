import { useState } from "react"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { EmptyList } from "./components/EmptyList"

import  styles  from './App.module.css'
import { Button } from "./components/Button"

export function App() {
  const [task, setTasks] = useState("")

  const handleButtonClick = () => {
    setTasks("")
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Input 
            value={task}
            onChange={setTasks}
          />
          <Button onClick={handleButtonClick}/>
        </div>
        <EmptyList />
      </div>
    </>
  )
}
