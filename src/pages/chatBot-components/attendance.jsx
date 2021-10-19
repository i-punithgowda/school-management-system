import React from 'react';
import { useState,useEffect } from 'react';
import Axios from 'axios';
const Attendance = (props) => {
    let regNo=props.previousStep.message;
    const [data,setData]=useState('');
useEffect(() =>{
Axios.post('http://localhost:3001/fetch-student-attendance-chatbot',{
    rollno: regNo
}).then((response) =>{
    if(response.data === false){
        setData('Register number does not exist!!!')
    }else if(response.data===true){
        setData('Attendance data sent has been sent as pdf, check your email ');
    }
})
},[])
    return ( 
        <div className="chatbotattendance">
            {data && <label style={{color:"black", fontWeight:"bold"}}>{data}</label>}
        </div>
     );
}
 
export default Attendance;