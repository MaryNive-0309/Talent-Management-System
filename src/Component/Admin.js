import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='homecontainer'>
    <div className='admincontainer'>
      <h2>Admin Dashboard</h2>
      <h3>Welcome, Admin! </h3>
      <br></br>
      <Link to="/admin/performance-management">User Management</Link>
        <br></br><br></br>
      <Link to="/admin/recruitment-management">Recruitment Management</Link>
        <br></br><br></br>
      <Link to="/admin/user-management">Performance Management</Link>
        <br></br><br></br>
      <Link to="/admin/learning-development">Learning and Development</Link>
      <br></br><br></br>
      <Link to="/admin/success-planning">Succession Planning</Link>

    </div>
    </div>
  );
}

export default Admin;
