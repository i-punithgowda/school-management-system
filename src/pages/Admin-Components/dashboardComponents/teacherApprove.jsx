import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
const TeacherApprove = ({fetchDetails}) => {
 
 
  const [data,setData]=useState([]);

  function fetchData() {
    Axios.post('http://localhost:3001/get-pendingTeacher')
    .then((response) => {
      // console.log(response);
      if (response.data === false) {
        alert('There are no applications at the moment !')
      } else {
        setData(response.data);
      }
    })

  }
  useEffect(() => {
    fetchData();
  }, [])


function handleApprove(e){
  let emailId=e.target.parentElement.title
  let username=e.target.parentElement.id
  let salary="30000";
  Axios.put('http://localhost:3001/approve-teacher',{
    username:username,
    salary:salary,
    email:emailId
  }).then((response) =>console.log(response));
e.target.parentElement.remove();
alert('Teacher approved')
}

function handleReject(e) {
  let username=e.target.parentElement.id
  let emailId=e.target.parentElement.title
  Axios.delete(`http://localhost:3001/reject-teacher/${username}`,{
    data:{
      email:emailId
    }
  }
  ).then((response)=>{
    if(response.data===true){
      alert('Rejected');
    }
  });
  e.target.parentElement.remove();
}


  return (
    <div className="teacherPendingData" >
      <div className="cardMain" style={{display:'flex',width:'1000px',overflow:'auto',color:"#161616",fontSize: "1.3rem"}}>
        {data && data.map((d)=>{
return <div className="cardT" key={d.username} id={d.username} title={d.email} >
<div className="card text-black bg-info mb-3" style={{maxWidth:"18rem"}}>
  <div className="card-header">{d.name}</div>
  <div className="card-body">
    <h5 className="card-title">{d.subject} teacher</h5>
    <p className="card-text">{d.name} has an experience of {d.experience} years</p>
    <h6>{d.email}</h6>
    <h6>{d.phone}</h6>
  </div>
</div>
  <button type="button" className="btn btn-success" onClick={(e)=>handleApprove(e)}>Approve</button>
<button type="button" className="btn btn-danger" onClick={(e)=>handleReject(e)}>Reject</button>
</div>

        })}         
         </div>
    </div>
  );
}

export default TeacherApprove;