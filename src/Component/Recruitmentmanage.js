import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Recruitmentmanage = () => {
  const navigate=useNavigate()
  const [post,setPost] =useState([])
    const [id,setId]=useState(0)
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [loc, setLoc] = useState('');
    const [date, setDate] = useState('');

      useEffect(() => {    
        axios.get(`http://localhost:3001/jobpost`)
        .then(res=>{setPost(res.data)})
        .catch(err=>{console.log(err)})
      }, [])

      const handleSubmit = () => {
        axios.post(`http://localhost:3001/jobpost`, {
          "id":id,"title":title,"des":des,"loc":loc,"date":date })
          .then((res) => {console.log(res) })
          .catch((err) => {console.log(err) })
      }

      const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/jobpost/${id}`)
      .then((res) => {
        console.log(res);
        setPost(post.filter(item => item.id !== id));
      })
      .catch((err) => { console.log(err); });
      };
    
      const [popup, setpopup] = useState(false);
      const [id1,setId1]=useState(0)
      const [title1, setTitle1] = useState('');
      const [des1, setDes1] = useState('');
     const [loc1, setLoc1] = useState('');
     const [date1, setDate1] = useState('');



      const openPopup=(datas)=>{
        setpopup(true);
        setId1(datas.id);
        setTitle1(datas.title);
        setDes1(datas.des);
        setLoc1(datas.loc);
        setDate1(datas.date);
        
      }

      const handleUpdate = () => {
        axios.put(`http://localhost:3001/jobpost/${id1}`, {
        "id":id1,"title":title1,"des":des1,"loc":loc1,"date":date1})
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) });
      }

      return (
        <div>
            <div className='usercontainer'>
          {/* <h2>Recruitment Management</h2> */}
          <div className='userdet'>
            <form onSubmit={handleSubmit}>
                <h3>Add Details</h3>
                <label>&emsp;&emsp; Id </label>
                &emsp;&emsp;&ensp;<input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}/>
                <br></br><br></br>
                <label>Job Title</label>
                &emsp;&emsp;<input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <br></br><br></br>
                <label> Description </label>
                &emsp;<textarea type='text' value={des} onChange={(e)=>{setDes(e.target.value)}}/>
                <br></br><br></br>
                <label>Location </label>
                &emsp;&emsp;<input type='text' value={loc} onChange={(e)=>{setLoc(e.target.value)}}/>
                <br></br><br></br>
                <label>Date posted </label>
                &emsp;&emsp;<input type='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
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
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Date Posted</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {post.map(x => (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.des}</td>
                  <td>{x.loc}</td>
                  <td>{x.date}</td>
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
                    <label>Id</label>
                    &emsp;&emsp;<input type='number' value={id1} onChange={(e)=>{setId1(e.target.value)}}/>
                    <br></br><br></br>
                    <label>Job Title</label>
                    &emsp;&emsp;<input type='text' value={title1} onChange={(e)=>{setTitle1(e.target.value)}}/>                    
                    <br></br><br></br>
                    <label> Description </label>
                    &emsp;<textarea type='text' value={des1} onChange={(e)=>{setDes1(e.target.value)}}/>
                    <br></br><br></br>
                    <label>Location </label>
                    &emsp;&emsp;<input type='text' value={loc1} onChange={(e)=>{setLoc1(e.target.value)}}/>
                    <br></br><br></br>
                    <label>Date posted </label>
                    &emsp;&emsp;<input type='date' value={date1} onChange={(e)=>{setDate1(e.target.value)}}/>


                    <br></br><br></br><br></br>
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

export default Recruitmentmanage
