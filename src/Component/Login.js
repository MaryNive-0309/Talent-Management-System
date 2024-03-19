import React, { useState,useEffect } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import { Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[userlist,setUserlist]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3001/users`)
    .then(res=>setUserlist(res.data))
    .catch(err=>console.log(err))
  },[])

  const auth=useAuth()

  const handleLogin=()=>{
    const userExist=userlist.some
    (u=>u.username===username && u.password===password)
    if(userExist){
      auth.login(username)
     navigate('/')
    }
    else{
      alert('Invalid Username or Password')
    }
  }

  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
           <label>Username : </label>
           <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
           <label>Password : </label>
           <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
           <button type='submit'>Login</button><br/><br></br>
           <label>Don't have an account? </label>
         &emsp;<Link to='/signup' className='link'> Signup </Link>
      </form>
    </div>
  )
}

export default Login