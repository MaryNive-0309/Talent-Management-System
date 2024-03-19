import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Userrecruit = () => {
    const [post,setPost] =useState([])

    useEffect(() => {    
        axios.get(`http://localhost:3001/jobpost`)
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
  <div className='manage recruit'>
  <br></br>
            <h2>Recruitment Jobs in our Organization</h2>
            <br></br>
            <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Date Posted</th>
              </tr>
            </thead>
            <tbody>
              {post.map(x => (
                <tr key={x.id}>
                  <td>{x.title}</td>
                  <td>{x.des}</td>
                  <td>{x.loc}</td>
                  <td>{x.date}</td>
                </tr>
              ))}
              <br></br>
            </tbody>
          </table> 
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

    </div>
  )
}

export default Userrecruit
