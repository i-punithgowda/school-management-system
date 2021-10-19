import {useState, useEffect} from 'react';
import Axios from 'axios';
const Marks = (props) => {
    let regNo=props.previousStep.message;
    const [data,setData]=useState('');
    useEffect(() =>{
        Axios.post('http://localhost:3001/fetch-marks-bot',{
            regNo: regNo
        }).then((response) =>{
            if(response.data === false){
              setData('No data found');
            }else if(response.data===true){
                setData('Attendance data sent has been sent as pdf, check your email');
            }
        })
        },[])
    return ( 
        <div className="chatbotattendance">
        {data && <label style={{color:"black", fontWeight:"bold"}}>{data}</label>}
    </div>
     );
}
 
export default Marks;