import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let useObj1 = {
    age: 22,
    city: 'Solapur'
  } 

  let useObj2 = {
    age: 22,
    city: 'Nagpur'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Abhinav" useAddr={useObj1} />
      <Card username="Shantanu" useAddr={useObj2} />
    </>
  )
}

export default App
