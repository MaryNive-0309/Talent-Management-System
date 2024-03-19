import axios from 'axios'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
        axios.post(`http://localhost:3001/users`,
        {
            "username":username,
            "email":email,
            "password":password,
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/login')
    }
  return (
    <div className='signup'>
         <br></br><br></br><br></br>

       <label>Username: </label>
       <input type='text' value={username} onChange={(e)=>{ setUsername(e.target.value)}}/>
         <br></br><br></br>
         <label>Email: </label>
       <input type='text' value={email} onChange={(e)=>{ setEmail(e.target.value)}}/>
         <br></br><br></br>
         <label>Password: </label>
       <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         <br></br><br></br><br></br>
       <button onClick={handleSignup}>Signup</button>
       <br></br><br></br><br></br>

       <label>Already have an account ?</label>
       &emsp;<Link to='/login' className='link'> Login </Link>
     </div>
  )
}

export default Signup
