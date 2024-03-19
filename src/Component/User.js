import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
const User = () => {
  const auth=useAuth()
  const [post,setPost] =useState([])

  useEffect(() => {    
    axios.get(`http://localhost:3001/perf`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  }, [])

  return (
      <div className='userdisplay'> 

      <nav className='display'>
        <div className="abs">
          <br></br><br></br>
          <NavLink to='/user'>Dashboard </NavLink><br></br>
           <br></br><br></br>
          <NavLink to='/userdet'>Employee details </NavLink><br></br>
          <br></br><br></br>
          <NavLink to='/recruit'>Recruitment </NavLink><br></br>
           <br></br><br></br>
          <NavLink to='/performance'>Performance </NavLink><br></br>
          <br></br><br></br>
           <NavLink to='/learning'>Learn and development </NavLink><br></br>
           <br></br><br></br>
            <NavLink to='/successplan'>Succession plan </NavLink><br></br>
        </div>
        </nav>
        
    <div className='displaycontainer'>
        <h2 style={{fontSize:'36px;'}}>User Dashboard</h2><br></br>
        <p style={{fontSize:'29px;'}}>Welcome, {auth.user}!!<br></br><br></br>
        <br></br>Access your profile, training materials, and other user-specific features here.</p>
        </div>
        </div>   
  )
}

export default User