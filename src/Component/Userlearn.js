import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Userlearn = () => {
    const [post,setPost] =useState([])
  const [course]=useState('')

  useEffect(() => {    
    axios.get(`http://localhost:3001/course`)
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
    <div className='manage learning'>
    <br></br>
          <h3>Courses and Training programs Available for all!!</h3>
          <br></br>
          <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Instructor</th>
              <th>Duration</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {post.map(x => (
              <tr key={course.id}>
                <td>{x.course}</td>
                <td>{x.instructor}</td>
                <td>{x.duration}</td>
                <td>{x.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
      
    </div>
  )
}

export default Userlearn
