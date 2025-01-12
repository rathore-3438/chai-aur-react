import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter]=useState(15);
    let incValue=()=>{
        if(counter<20){
            setCounter(counter+1);
        }
    }
    let decValue=()=>{
        if(counter>0){
            setCounter(counter-1);
        }
    }
  return (
    <>
        <h1>Hello Rohit Rathore</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={incValue}>Add value {counter}</button>
        <br></br>
        <button onClick={decValue}>Remove value {counter}</button>
        <footer>footer: {counter}</footer>
    </>
  )
}

export default App
