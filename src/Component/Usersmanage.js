import React ,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Usersmanage = () => {
    const navigate=useNavigate()
    const [post,setPost] =useState([])
    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [role,setRole]=useState('')
    const [skill,setSkill]=useState('')

    
      useEffect(() => {    
        axios.get(`http://localhost:3001/user`)
        .then(res=>{setPost(res.data)})
        .catch(err=>{console.log(err)})
      }, [])

      const handleSubmit = () => {
        axios.post(`http://localhost:3001/user`, {
          "id":id,"name":name,"email":email,"role":role,"skill":skill  })
          .then((res) => {console.log(res) })
          .catch((err) => {console.log(err) })
      }

      const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/user/${id}`)
      .then((res) => {
        console.log(res);
        setPost(post.filter(item => item.id !== id));
      })
      .catch((err) => { console.log(err); });
      };
    
      const [popup, setpopup] = useState(false);
      const [id1,setId1]=useState(0)
      const [name1,setName1]=useState('')
      const [email1,setEmail1]=useState('')
      const [role1,setRole1]=useState('')
      const [skill1,setSkill1]=useState('')


      const openPopup=(datas)=>{
        setpopup(true);
        setId1(datas.id);
        setName1(datas.name);
        setEmail1(datas.email);
        setRole1(datas.role);
        setSkill1(datas.skill);
      }

      const handleUpdate = () => {
        axios.put(`http://localhost:3001/user/${id1}`, {
        "id":id1,"name":name1,"email":email1,"role":role1,"skill":skill1 })
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) });
      }

      return (
        <div>
            <div className='usercontainer'>
          {/* <h2>User Management</h2> */}
          <div className='userdet'>
            <form onSubmit={handleSubmit}>
                {/* <h3>Add Users</h3> */}
                <label> Id </label>
                &emsp;&emsp;&ensp;<input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}/>
                <br></br><br></br>
                <label>Name</label>
                &emsp;&emsp;<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <br></br><br></br>
                <label>Email </label>
                &emsp;&emsp;<input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <br></br><br></br>
                <label> Role </label>
                &emsp;&emsp;<input type='text' value={role} onChange={(e)=>{setRole(e.target.value)}}/>
                <br></br><br></br>
                <label> Skillset </label>
                &emsp;&emsp;<input type='text' value={skill} onChange={(e)=>{setSkill(e.target.value)}}/>
                <br></br><br></br><br></br>
                <button type="submit">Add</button>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
             <button onClick={()=>navigate('/admin')}> Go Back</button>
                
            <br></br><br></br><br></br>
            </form>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Skillset</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {post.map(x => (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.role}</td>
                  <td>{x.skill}</td>
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
                    <button onClick={()=>{setpopup(false)}} className='closebut' > X </button>
                    &emsp;&emsp;<br></br>
                    <label>Id</label>
                    &emsp;&emsp;<input type='number' value={id1} onChange={(e)=>{setId1(e.target.value)}}/>
                    <br></br><br></br>
                    <label>Name</label>
                    &emsp;&emsp;<input type='text' value={name1} onChange={(e)=>{setName1(e.target.value)}}/>
                    <br></br><br></br>
                    <label>Email</label>
                    &emsp;&emsp;<input type='email' value={email1} onChange={(e)=>{setEmail1(e.target.value)}}/>
                    <br></br><br></br>
                    <label>Role</label>
                    &emsp;&emsp;<input type='text' value={role1} onChange={(e)=>{setRole1(e.target.value)}}/>
                    <br></br><br></br>
                    <label> Skillset </label>
                    &emsp;&emsp;<input type='text' value={skill1} onChange={(e)=>{setSkill1(e.target.value)}}/>
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

export default Usersmanage
