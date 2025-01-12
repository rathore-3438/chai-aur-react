import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    function ChangeColor(){
        
    }
  return (
    <>
        <div className='ChangeColor'>
            <button className=" bg-red-600 m-2">Red</button>
            <button className="bg-green-600 m-2">Green</button>
            <button className="bg-blue-600 m-2">Blue</button>
            <button className="bg-lime-500 m-2">Olive</button>
            <button className="bg-gray-500 m-2">Gray</button>
            <button className="bg-yellow-500 m-2">Yellow</button>
            <button className="bg-pink-500 m-2">Pink</button>
            <button className="bg-purple-500 m-2">Purple</button>
            <button className="bg-lime-500 m-2">Lavender</button>
            <button className="bg-white text-black m-2">White</button>
            <button className="bg-black m-2">Black</button>
        </div>
    </>
  )
}

export default App
