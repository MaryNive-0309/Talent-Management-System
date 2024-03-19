import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Usersuccess = () => {
    const [post,setPost] =useState([])
  const [employees]=useState('')
      
  useEffect(() => {    
    axios.get(`http://localhost:3001/employees`)
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
      <div className='manage successplan'>
        <br></br>
          <h2>Employees Potential</h2>
          <br></br>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Potential</th>
            </tr>
          </thead>
          <tbody>
            {post.map(x => (
              <tr key={employees.id}>
                <td>{x.employees}</td>
                <td>{x.dept}</td>
                <td>{x.pos}</td>
                <td>{x.potential}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}

export default Usersuccess
