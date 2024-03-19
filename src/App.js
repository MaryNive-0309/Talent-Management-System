import { Route,Routes } from "react-router-dom";
import Home from "./Component/Home";
import Admin from "./Component/Admin";
import Navbar from "./Component/Navbar";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import { Auth } from "./Component/Auth";
import User from "./Component/User";
import Usersmanage from "./Component/Usersmanage";
import Recruitmentmanage from "./Component/Recruitmentmanage";
import Performancemanage from "./Component/Performancemanage";
import Learningdevelop from "./Component/Learningdevelop";
import Successplan from "./Component/Successplan";

import Protect from "./Component/Protect";

import Userrecruit from "./Component/Userrecruit";
import Userperform from "./Component/Userperform";
import Userlearn from "./Component/Userlearn";
import Usersuccess from "./Component/Usersuccess";
import Logout from "./Component/Logout";
import Userdetail from "./Component/Userdetail";


function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Protect><Home/></Protect>}/>
        
        <Route path='/admin' element={<Admin/>}/>

        <Route path='/admin/user-management' element={<Usersmanage/>}/>
        <Route path='/admin/recruitment-management' element={<Recruitmentmanage/>}/>
        <Route path='/admin/performance-management' element={<Performancemanage/>}/>
        <Route path='/admin/learning-development' element={<Learningdevelop/>}/>
        <Route path='/admin/success-planning' element={<Successplan/>}/>

        <Route path='/user' element={<Protect><User/></Protect>}/>
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/userdet' element={<Userdetail/>}/>
        <Route path='/recruit' element={<Userrecruit/>}/>
        <Route path='/performance' element={<Userperform/>}/>
        <Route path='/learning' element={<Userlearn/>}/>
        <Route path='/successplan' element={<Usersuccess/>}/>

        
      </Routes>
      </Auth>
    </div>
  );
}

export default App;
