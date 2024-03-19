import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Successplan = () => {
  const navigate=useNavigate()
  const [post,setPost] =useState([])
  const [id,setId]=useState( )
  const [employees,setEmployees ]=useState('')
  const [dept,setdept]=useState('')
  const [pos,setPos]=useState('')
  const [potential,setPotential]=useState('')


  
    useEffect(() => {    
      axios.get(`http://localhost:3001/employees`)
      .then(res=>{setPost(res.data)})
      .catch(err=>{console.log(err)})
    }, [])

    const handleSubmit = () => {
      axios.post(`http://localhost:3001/employees`, {
        "id":id,"employees":employees,"dept":dept,"pos":pos,"potential":potential })
        .then((res) => {console.log(res) })
        .catch((err) => {console.log(err) })
    }

    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/employees/${id}`)
    .then((res) => {
      console.log(res);
      setPost(post.filter(item => item.id !== id));
    })
    .catch((err) => { console.log(err); });
    };
  
    const [popup, setpopup] = useState(false);
    const [id1,setId1]=useState(0)
    const [employees1,setEmployees1]=useState('')
    const [dept1,setdept1]=useState('')
    const [pos1,setPos1]=useState('')
    const [potential1,setPotential1]=useState('')


    const openPopup=(datas)=>{
      setpopup(true);
      setId1(datas.id);
      setEmployees1(datas.employees);
      setdept1(datas.dept);
      setPos1(datas.pos);
      setPotential1(datas.potential);
    }

    const handleUpdate = () => {
      axios.put(`http://localhost:3001/employees/${id1}`, {
      "id":id1,"employees":employees1,"dept":dept1,"pos":pos1,"potential":potential1 })
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) });
    }

    return (
      <div>
          <div className='usercontainer'>
        {/* <h2>Succession planning</h2> */}
        <div className='userdet'>
          <form onSubmit={handleSubmit}>
              <h3>Add Employee Potential</h3>
              {/* <label> Id </label>
              &emsp;&emsp;&ensp;<input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}/>
              <br></br><br></br> */}
              <label>Name</label>
              &emsp;&emsp;<input type='text' value={employees} onChange={(e)=>{setEmployees(e.target.value)}}/>
              <br></br><br></br>
              <label>Department  </label>
              &emsp;&emsp;<input type='text' value={dept} onChange={(e)=>{setdept(e.target.value)}}/>
              <br></br><br></br>
              <label> Position </label>
              &emsp;&emsp;<input type='text' value={pos} onChange={(e)=>{setPos(e.target.value)}}/>
              <br></br><br></br>
              <label> Potential </label>
              &emsp;&emsp;<input type='text' value={potential} onChange={(e)=>{setPotential(e.target.value)}}/>
              
              <br></br><br></br><br></br>
                
              <button type="submit">Add</button>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
          <button onClick={()=>navigate('/admin')}> Go Back</button>
                
            <br></br><br></br><br></br>
          </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Potential</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {post.map(x => (
              <tr key={employees.id}>
                <td>{x.employees}</td>
                <td>{x.dept}</td>
                <td>{x.pos}</td>
                <td>{x.potential}</td>

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

                  <label>Name</label>
                  &emsp;&emsp;<input type='text' value={employees1} onChange={(e)=>{setEmployees1(e.target.value)}}/>
                  <br></br><br></br>
                  <label>Department  </label>
                  &emsp;&emsp;<input type='text' value={dept1} onChange={(e)=>{setdept1(e.target.value)}}/>
                  <br></br><br></br>                  
                  <label> Position </label>
                  &emsp;&emsp;<input type='text' value={pos1} onChange={(e)=>{setPos1(e.target.value)}}/>
                  <br></br><br></br>
                  <label> Potential </label>                  
                  &emsp;&emsp;<input type='text' value={potential1} onChange={(e)=>{setPotential1(e.target.value)}}/>
                  
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

export default Successplan
