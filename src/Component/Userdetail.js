import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const Userdetail = () => {
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
    <div className='manage performance'>
            <br></br>
            <h3> Employees positions in our ourganization </h3>
          <br></br>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Postion</th>
            </tr>
          </thead>
          <tbody>
            {post.map(x => (
              <tr key={x.id}>
                <td>{x.name}</td>
                <td>{x.dept}</td>
                <td>{x.pos}</td>              
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        </div>
  )
}

export default Userdetail
