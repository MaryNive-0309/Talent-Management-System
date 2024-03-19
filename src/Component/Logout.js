import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate=useNavigate()
    const auth=useAuth()
    const handleLogout=()=>{
        auth.logout()
        navigate('/login')
    }
  return (
    <div>
        <div class="logout">
      <h1>You can logout here {auth.user} !!</h1>
      <br></br>
      <button onClick={handleLogout}>Logout</button>
      </div>
      </div>
  )
}

export default Logout