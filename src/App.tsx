import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { EmptyList } from "./components/EmptyList"

import  styles  from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Input />
        <EmptyList />
      </div>
    </>
  )
}
