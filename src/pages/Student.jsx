import React from 'react';
import StudentImg from '../images/Student.png'
import Dashboard from './Student-Component/dashboard'
import Attendance from './Student-Component/attendance'
import Classroom from './Student-Component/classroom'
import Result from './Student-Component/result'
import Fees from './Student-Component/Fees'
import {useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import Axios from 'axios';
const Admin = () => {
    const history=useHistory();
const [state,setState]=useState("Dashboard");
const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [roll,setRoll]=useState("");
const [fee,setFee]=useState("");
const [paid,setPaid]=useState("");
const [sClass,setClass]=useState("");
const obj=useParams();
const username=obj.username;

useEffect(()=>{ 

    if(window.localStorage.getItem("sauth")!=="true"){
        history.push('/');
    }

    Axios.post('http://localhost:3001/student-name',{
        username:username
    }).then((response)=>{
        setName(response.data[0].name);
        setPhone(response.data[0].phone);
       setRoll(response.data[0].roll);
        setFee(response.data[0].fee);
        setPaid(response.data[0].paid);
        setClass(response.data[0].class)
    })
   },[])

   function handleClick() {
    history.push('/')
    window.localStorage.setItem("sauth",false);
   }

    return ( 
        <div className="mainDiv" style={{width:"1600px",height:"790px", background: "#4776E6", background: "-webkit-linear-gradient(to right, #8E54E9, #4776E6",background:"linear-gradient(to right, #8E54E9, #4776E6"    }}>
       <div className="adminContainer">
           <div className="adminHeaderContainer">
<span style={{position:"absolute",left:"0%"}}>School management system</span>
<button id="btnLogout" className="ui blue button" onClick={handleClick}>Log out</button>
           </div>
       </div>
       <div className="containerDashboard">
      {state==="Dashboard" &&  <Dashboard name={name} roll={roll} phone={phone} class={sClass} />}
      {state==="Attendance" &&  <Attendance roll={roll} />}
      {state==="Classroom" &&  <Classroom name={name} roll={roll} />}
      {state==="Result" &&  <Result name={name} class={sClass} />}
      {state==="Fees" &&  <Fees roll={roll} name={name}  />}
       </div>
       
       <div className="sidenav">
           <div className="imgAdmin">
           <img id="adminImg" src={StudentImg} alt="" />
           </div><br />
           <div className="lblusr">
            {name && <label id="lblUsrName">{name}</label>}
           </div>
           <br /><br /><br />
           
           <div className="Links" >
           <i className="fas fa-tv" id="nav" onClick={()=>setState("Dashboard")}>&nbsp;&nbsp;&nbsp;Dashboard</i>
           <i className="fas fa-id-card" id="nav" onClick={()=>setState("Attendance")}>&nbsp;&nbsp;Attendance</i>
           <i className="fas fa-school" id="nav" onClick={()=>setState("Classroom")}>&nbsp;&nbsp;Classroom</i>
           <i className="fas fa-poll" id="nav" onClick={()=>setState("Result")}>&nbsp;&nbsp;Result</i>
           <i className="fas fa-money-check-alt" onClick={()=>setState("Fees")}>&nbsp;&nbsp;Fees</i>
           </div>
</div>
       </div>
       
     );
}
 
export default Admin;