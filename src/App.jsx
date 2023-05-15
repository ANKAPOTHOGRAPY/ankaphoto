import { useState } from 'react'
import { Header } from './components/Header/Header'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Header />
    </div> 
  )
}

export default App
