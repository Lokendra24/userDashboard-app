import React, { useState } from 'react'
import '../css/login.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const Handleclick=()=>{
         if(email==="test@gmail.com" && password==="123456")
         {
            navigate('/dashboard')
         }
         else
         {
            alert("wront cridentials")
         }
      setEmail('')
      setPassword('')
    }

  return (
    <div className='login_container'>
      <Header />
      <div className='login_image' />
      <p >We are Electric</p>
      <input type='text' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type='text' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={Handleclick} >Login</button>
      <p>Forgot Password?</p>
    </div>
  )
}

export default Login