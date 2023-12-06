import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Security'
import { useLocation } from 'react-router-dom'
import './login.css'

const Login = () => {
    const [user,setUser]= useState('')
    const auth= useAuth()
    const location = useLocation()
    const navigate= useNavigate()
    const redirectPath= location.state?.path || '/'

    const handleLogin= () =>{
        auth.Login(user)
        // navigate('/') 
        navigate(redirectPath,{replace:true})
    }
  return (
    <div class='login'>

        <label>
            Username:<input type='text' onChange={(e) => setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login