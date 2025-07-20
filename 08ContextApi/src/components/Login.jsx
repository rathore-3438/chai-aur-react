import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    // got setUser from context Api file
    const {setUser}=useContext(UserContext); 
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'></input>

        <input type='text' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login