import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Performancemanage = () => {
  const navigate=useNavigate()
  const [post,setPost] =useState([])
  const [id,setId]=useState(0)
  const [name,setName]=useState('')
  const [dept, setDept] = useState('')
  const [pos,setPos]=useState('')
  
    useEffect(() => {    
      axios.get(`http://localhost:3001/perf`)
      .then(res=>{setPost(res.data)})
      .catch(err=>{console.log(err)})
    }, [])

    const handleSubmit = () => {
      axios.post(`http://localhost:3001/perf`, {
        "id":id,"name":name,"dept":dept,"pos":pos })
        .then((res) => {console.log(res) })
        .catch((err) => {console.log(err) })
    }

    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/perf/${id}`)
    .then((res) => {
      console.log(res);
      setPost(post.filter(item => item.id !== id));
    })
    .catch((err) => { console.log(err); });
    };
  
    const [popup, setpopup] = useState(false);
    const [id1,setId1]=useState()
    const [name1,setName1]=useState('')
    const [dept1,setDept1]=useState('')
    const [pos1,setPos1]=useState('')

    const openPopup=(datas)=>{
      setpopup(true);
      setId1(datas.id);
      setName1(datas.name);
      setDept1(datas.dept);
      setPos1(datas.pos);
    }

    const handleUpdate = () => {
      axios.put(`http://localhost:3001/perf/${id1}`, {
      "id":id1,"name":name1,"dept":dept1,"pos":pos1 })
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) });
    }

    return (
      <div>
          <div className='usercontainer'>        
        <div className='userdet'>
          <form onSubmit={handleSubmit}>
          <h3>Add Users</h3>

              {/* <h3>Employee Performance</h3> */}
              {/* <label> Id </label>
              &emsp;&emsp;&ensp;<input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}/> */}
              {/* <br></br><br></br> */}
              <label>Name</label>
              &emsp;&emsp;<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
              <br></br><br></br>
              <label>Department </label>
              &emsp;&emsp;<input type='texr' value={dept} onChange={(e)=>{setDept(e.target.value)}}/>
              <br></br><br></br>
              <label> Postion </label>
              &emsp;&emsp;<input type='text' value={pos} onChange={(e)=>{setPos(e.target.value)}}/>
              <br></br><br></br><br></br>
                <button type="submit">Add</button>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
          <button onClick={()=>navigate('/admin')}> Go Back</button>
                
            <br></br><br></br><br></br>
          </form>
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Department</th>
              <th>Postion</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {post.map(x => (
              <tr key={x.id}>
                {/* <td>{x.id}</td> */}
                <td>{x.name}</td>
                <td>{x.dept}</td>
                <td>{x.pos}</td>
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
                  {/* <label>Id</label>
                  &emsp;&emsp;<input type='number' value={id1} onChange={(e)=>{setId1(e.target.value)}}/>
                  <br></br><br></br> */}
                  <label>Name</label>
                  &emsp;&emsp;<input type='text' value={name1} onChange={(e)=>{setName1(e.target.value)}}/>
                  <br></br><br></br>
                  <label>Department</label>
                  &emsp;&emsp;<input type='dept' value={dept1} onChange={(e)=>{setDept1(e.target.value)}}/>
                  <br></br><br></br>
                  <label>Position</label>
                  &emsp;&emsp;<input type='pos' value={pos1} onChange={(e)=>{setPos1(e.target.value)}}/>
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

export default Performancemanage
