import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Learningdevelop = () => {
  const navigate=useNavigate()
  const [post,setPost] =useState([])
  const [id,setId]=useState( )
  const [course,setCourse]=useState('')
  const [instructor,setIns]=useState('')
  const [duration,setDuration]=useState('')
  const [level,setLevel]=useState('')

  
    useEffect(() => {    
      axios.get(`http://localhost:3001/course`)
      .then(res=>{setPost(res.data)})
      .catch(err=>{console.log(err)})
    }, [])

    const handleSubmit = () => {
      axios.post(`http://localhost:3001/course`, {
        "id":id,"course":course,"instructor":instructor,"duration":duration,"level":level })
        .then((res) => {console.log(res) })
        .catch((err) => {console.log(err) })
    }

    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/course/${id}`)
    .then((res) => {
      console.log(res);
      setPost(post.filter(item => item.id !== id));
    })
    .catch((err) => { console.log(err); });
    };
  
    const [popup, setpopup] = useState(false);
    const [id1,setId1]=useState(0)
    const [course1,setCourse1]=useState('')
    const [instructor1,setIns1]=useState('')
    const [duration1,setDuration1]=useState('')
    const [level1,setLevel1]=useState('')

    const openPopup=(datas)=>{
      setpopup(true);
      setId1(datas.id);
      setCourse1(datas.course);
      setIns1(datas.instructor);
      setDuration1(datas.duration);
      setLevel1(datas.level);
    }

    const handleUpdate = () => {
      axios.put(`http://localhost:3001/course/${id1}`, {
      "id":id1,"course":course1,"instructor":instructor1,"duration":duration1,"level":level1 })
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) });
    }

    return (
      <div>
          <div className='usercontainer'>
        <h2>Add Courses </h2>
        <div className='userdet'>
          <form onSubmit={handleSubmit}>
              {/* <h3>Available Courses</h3> */}
              
              {/* <label> Id </label>
              &emsp;&emsp;&ensp;<input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}/>
              <br></br><br></br> */}

              <label>Title </label>
              &emsp;&emsp;<input type='text' value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
              <br></br><br></br>

              <label>Instructor </label>
              &emsp;&emsp;<input type='text' value={instructor} onChange={(e)=>{setIns(e.target.value)}}/>
              <br></br><br></br>

              <label> Duration </label>
              &emsp;&emsp;<input type='text' value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>

              <br></br><br></br>
              <label>Level </label>
              &emsp;&emsp;<input type='text' value={level} onChange={(e)=>{setLevel(e.target.value)}}/>

              <br></br><br></br><br></br>
              <button type="submit">Add</button>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
          <button onClick={()=>navigate('/admin')}> Go Back</button>

            <br></br><br></br><br></br>
          </form>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Instructor</th>
              <th>Duration</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {post.map(x => (
              <tr key={course.id}>
                <td>{x.course}</td>
                <td>{x.instructor}</td>
                <td>{x.duration}</td>
                <td>{x.level}</td>
                <td>
                  <button onClick={()=>openPopup(x)}>Update</button>                    
                  &emsp;&emsp;<button onClick={()=>handleDelete(x.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

         {popup && (
          <div className='popup'>
              <form onSubmit={handleUpdate}> 
                  <button onClick={()=>{setpopup(false)}} className='closebut'> X </button>
                  <br></br>
                  {/* <label>Id</label><br></br>
                  <input type='number' value={id1} onChange={(e)=>{setId1(e.target.value)}}/>
                  <br></br><br></br> */}

                  <label>Title </label>
                  &emsp;&emsp;<input type='text' value={course1} onChange={(e)=>{setCourse1(e.target.value)}}/>
                  <br></br><br></br>
                  <label>Instructor </label>
                  &emsp;&emsp;<input type='text' value={instructor1} onChange={(e)=>{setIns1(e.target.value)}}/>
                  <br></br><br></br>
                  <label>Duration </label>
                  &emsp;&emsp;<input type='text' value={duration1} onChange={(e)=>{setDuration1(e.target.value)}}/>
                  <br></br><br></br>
                  <label>Level </label>
                  &emsp;&emsp;<input type='text' value={level1} onChange={(e)=>{setLevel1(e.target.value)}}/>
                  <br></br><br></br>
                  <button type="submit">Save</button>

              </form>
          </div>
         )}
         <br></br>
      </div>
      </div>
      </div>
  )
}

export default Learningdevelop
