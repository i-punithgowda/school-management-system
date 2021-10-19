import React from 'react';
import TeacherImg from '../images/Teacher.png';
import Dashboard from './Teacher-Component/dashboard';
import Notify from './Teacher-Component/notify';
import Classroom from './Teacher-Component/classroom';
import Marks from './Teacher-Component/Marks';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios'
const Admin = () => {
  const [state, setState] = useState("Dashboard");
  let obj = useParams();
  let history = useHistory();
  let username = obj.username;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [data, setData] = useState('');




  useEffect(() => {

    if(window.localStorage.getItem("tauth")!=="true"){
      history.push('/');
    }

    Axios.post('http://localhost:3001/teacher-name', {
      username: username
    }).then((response) => {
      console.log(response);
      setName(response.data[0].name);
      setPhone(response.data[0].phone);
      setSalary(response.data[0].salary);
      setSubject(response.data[0].subject);
      let timeStamp = response.data[0].joindate;
      let newDate = new Date(parseInt(timeStamp));
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      let joinDate = `${day}-${month}-${year}`
      setDate(joinDate)
      console.log(subject)
    })

  }, [])


  function handleLogout() {
    history.push('/')
    window.localStorage.setItem("tauth",false);
  }


  return (
    <div className="mainDiv" style={{width:"1600px",height:"790px", background: "#4776E6", background: "-webkit-linear-gradient(to right, #8E54E9, #4776E6",background:"linear-gradient(to right, #8E54E9, #4776E6"    }}>
      <div className="adminContainer">
        <div className="adminHeaderContainer">
          <span style={{position:"absolute",left:"0%"}}>School management system</span>
          <button id="btnLogout" className="ui blue button" onClick={handleLogout}>Log out</button>
        </div>
      </div>
      <div className="containerDashboard">
        {state === "Dashboard" && <Dashboard name={name} phone={phone} salary={salary} date={date} data={data} />}
        {state === "Notify" && <Notify />}
        {state === "Class" && <Classroom subject={subject} name={name} />}
        {state === "Marks" && <Marks subject={subject} name={name} />}
       
      </div>

      <div className="sidenav">
        <div className="imgAdmin">
          <img id="adminImg" src={TeacherImg} alt="" />
        </div><br />
        <div className="lblTchr">
          {name && <label id="lblUsrName">{name}</label>}
        </div>

        <br /><br /><br />

        <div className="Links" >
          <i className="fas fa-tv" id="nav" onClick={() => setState("Dashboard")}>&nbsp;&nbsp;&nbsp;Dashboard</i>
          <i className="fas fa-school" id="nav" onClick={() => setState("Class")}>&nbsp;&nbsp;&nbsp;Classroom</i>
          <i className="fas fa-marker" id="nav" onClick={() => setState("Marks")}>&nbsp;&nbsp;&nbsp;Marks</i>
          <i className="fas fa-bell" id="nav" onClick={() => setState("Notify")}>&nbsp;&nbsp;&nbsp;Notify</i>
        </div>
      </div>
    </div>

  );
}

export default Admin;