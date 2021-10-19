import React,{useEffect} from 'react';
import AdminImg from '../images/admin.png'
import Dashboard from './Admin-Components/dashboard'
import Teacher from './Admin-Components/Teacher'
import Student from './Admin-Components/Student'
import Attendance from './Admin-Components/Attendance'
import Fees from './Admin-Components/Fees'
import Notify from './Admin-Components/Notify'
import AddAttendance from './Admin-Components/AddAttendance'
import Library from './Admin-Components/Library'
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
const Admin = () => {
    let history=useHistory();
const [state,setState]=useState("Dashboard");
const obj=useParams();


useEffect(() => {
if(window.localStorage.getItem("aauth")!=="true"){
    history.push('/');
}
},[])

    return ( 
        <div className="mainDiv" style={{width:"1600px",height:"790px", background: "#4776E6", background: "-webkit-linear-gradient(to right, #8E54E9, #4776E6",background:"linear-gradient(to right, #8E54E9, #4776E6"    }}>
       <div className="adminContainer">
           <div className="adminHeaderContainer">
<span style={{position:"absolute",left:"0%"}}>School management system</span>
<button id="btnLogout" className="ui blue button" onClick={()=>
{history.push('/adminLogin')
window.localStorage.setItem("aauth",false);
}}>
Log out</button>
           </div>
       </div>
       <div className="containerDashboard">
      {state==="Dashboard" &&  <Dashboard />}
      {state==="Teacher" &&  <Teacher />}
      {state==="Student" &&  <Student />}
      {state==="AddAttendance" &&  <AddAttendance />}
      {state==="Attendance" &&  <Attendance />}
      {state==="Fees" &&  <Fees />}
      {state==="Notify" &&  <Notify />}
      {state==="Library" &&  <Library />}
       </div>
       
       <div className="sidenav">
           <div className="imgAdmin">
           <img id="adminImg" src={AdminImg} alt="" />
           </div> <br />
           <div className="lblusr">
           {obj && <label id="lblUsrName">{obj.username}</label>}
           <br />
           </div>
           
           
           <div className="Links" >
           <i className="fas fa-tv" id="nav" onClick={()=>setState("Dashboard")}>&nbsp;&nbsp;&nbsp;Dashboard</i>
           <i className="fas fa-chalkboard-teacher" id="nav" onClick={()=>setState("Teacher")}>&nbsp;&nbsp;&nbsp;Teacher</i>
           <i className="fas fa-user-graduate" id="nav" onClick={()=>setState("Student")}>&nbsp;&nbsp;&nbsp;&nbsp;Student</i>
          <i className="fas fa-id-card" id="nav" onClick={()=>setState("AddAttendance")}>&nbsp;&nbsp;Attendance</i>
           <i className="fas fa-id-card" id="nav" onClick={()=>setState("Attendance")}>&nbsp;&nbsp;Attendance details</i>
           <i className="fas fa-receipt" id="nav" onClick={()=>setState("Fees")}>&nbsp;&nbsp;&nbsp;Fees</i>
           <i class="fas fa-book-open" id="nav" onClick={()=>setState("Library")}>&nbsp;&nbsp;&nbsp;Library</i>
           <i className="fas fa-bell" id="nav" onClick={()=>setState("Notify")}>&nbsp;&nbsp;&nbsp;Notify</i>
           </div>
     
</div>
       </div>
       
     );
}
 
export default Admin;