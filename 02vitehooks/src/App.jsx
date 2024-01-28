import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(15);
  let addCounter = () => {
    counter = counter + 1;
    console.log('counter ', counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <button
        onClick={addCounter}
      >Add counter {counter}</button><br />
      <button>Remove counter { counter}</button>
      <p>updated counter: { counter }</p>
    </>
  )
}

export default App
