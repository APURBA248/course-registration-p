/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from './components/component/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home></Home>
    </>
  )
}

export default App
