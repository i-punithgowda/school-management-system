import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const StudentApprove = ({fetchDetails}) => {
  const [data, setData] = useState([]);
  const [rollno, setRollno] = useState('');
  function fetchData() {
    Axios.post('http://localhost:3001/get-pendingStudent', {
    }).then((response) => {
      // console.log(response);
      if (response.data === false) {
        alert('There are no applications at the moment !')
      } else {
        setData(response.data);
        console.log(data);
      }
    })
  }

  function handleApprove(e, stuClass) {
let fees=0;
if(stuClass==1){ 
  fees=15000
}else if(stuClass==2){
 fees=17000
}else if(stuClass==3){
 fees=18000
}
else if(stuClass==4){
  fees=21000
}else if(stuClass==5){
  fees=23000
}else if(stuClass==6){
fees=25000
}else if(stuClass==7){
  fees=28000
}else if(stuClass==8){
  fees=31000
}else if(stuClass==9){
  fees=33000
}else if(stuClass==10){
 fees=35000
}
let username=e.target.parentElement.id
let emailId=e.target.parentElement.title
Axios.put('http://localhost:3001/approve-student',{
  username:username,
  fees:fees,
  rollno: rollno+1,
email:emailId
}).then((response) =>console.log(response));
e.target.parentElement.remove();
alert('Student has been approved!!')
  }

  function handleReject(e) {
    let username = e.target.parentElement.id
    let email=e.target.parentElement.title
    Axios.delete(`http://localhost:3001/reject-student/${username}`,{
      data:{
        email:email
      }
    }
    ).then((response) => {
      if (response.data === true) {
        alert('Rejected');
      }
    });
    e.target.parentElement.remove();
  }


  function fetchRoll() {
    Axios.post('http://localhost:3001/get-lastRoll', {
    }).then((response) => {
      setRollno(response.data);
    })
  }

  useEffect(() => {
    fetchData();
    fetchRoll()
  }, [])

  return (
    <div className="StudentPendingData" style={{width:'1200px',height:'100%',position:'relative',top:'150px'}}>
      <div className="ScardMain" style={{display:'flex',width:'1000px',overflow:'auto',color:"#161616",fontSize: "1.3rem"}} >
        {data && data.map((d) => {
          return <div className="cardT" key={d.username} id={d.username} title={d.email}>
            <div className="card text-black bg-info mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">{d.name}</div>
              <div className="card-body">
                <h5 className="card-title">Class-{d.class}</h5>
                <p className="card-text">Percent in last class-{d.percent}</p>
                <h6>{d.email}</h6>
                <h6>{d.phone}</h6>
              </div>
            </div>
            <button type="button" className="btn btn-success" onClick={(e) => handleApprove(e, d.class)} >Approve</button>
            <button type="button" className="btn btn-danger" onClick={(e) => handleReject(e)} >Reject</button>
          </div>

        })}
      </div>
    </div>

  );
}

export default StudentApprove;