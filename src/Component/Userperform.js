import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
// import { useAuth } from './Auth'

const Userperform = () => {
  // const auth=useAuth()
  const [post,setPost] =useState([])

  useEffect(() => {    
    axios.get(`http://localhost:3001/user`)
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
           <NavLink to='/userdet'>Employee Details</NavLink><br></br>
           <br></br><br></br>
          <NavLink to='/recruit'>Recruitment </NavLink><br></br>
           <br></br><br></br>
          <NavLink to='/performance'>Employees Position </NavLink><br></br>
          <br></br><br></br>
           <NavLink to='/learning'>Learn and development </NavLink><br></br>
           <br></br><br></br>
            <NavLink to='/successplan'>Succession plan </NavLink><br></br>
        </div>
        </nav>
        
        <div className='displaycontainer'>
        <div className='manage user'>
          <br></br><br></br>
          <h2>Employees Performance and skillset</h2>
          <br></br>
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Skillset</th>
              </tr>
            </thead>
            <tbody>
              <br></br>
              {post.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.skill}</td>
                </tr>
              ))}
                <br></br>
            </tbody>
          </table>
        </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
    </div> 

  )
}

export default Userperform
