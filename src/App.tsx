import { useState } from 'react'
import { Canvas } from './components/Canvas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Canvas width={500} height={500} size={5} />

    </>
  )
}

export default App
