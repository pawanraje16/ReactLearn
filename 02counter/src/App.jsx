import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,pawanCounter] =useState(15)
  // pawanCounter is function return by usesState hook
  // let counter=15
  
  const addValue=() => {
    console.log("clicked",counter);
    // counter=counter+1;
    pawanCounter(counter+1)
  }
  const removeValue=() => {
    pawanCounter(counter-1)
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Couter value: {counter}</h2>

     <button
     onClick={addValue}
     > Add value:{counter}</button>
     <button
     onClick={removeValue}>Remove value:{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
