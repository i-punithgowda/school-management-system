import React from 'react';
import {useState} from 'react'
import Axios from 'axios';


const Notify = () => {
    const [Msg,setMsg]=useState('')
    const handleClick = (e) => {
        if(Msg===""){
alert('Cant send empty Message')
        }
        else{
            Axios.post('http://localhost:3001/send-notification',{
                msg:Msg,
            }).then((response)=>{
                if(response.data===true){
                    alert('Notification sent to students!')
                    setMsg('');
                }else{
                    alert('Unexpected error occured!');
                    setMsg('');
                }
            })
        }
       
    }
    return ( 
        <div className="mainContainer">
       <div className="heading">Announce something</div>
       
       <div className="AnnounceContainer" style={{backgroundColor:"#161616"}}>
       
<input type="text" placeholder="Write your message here" onChange={e=>{setMsg(e.target.value)} } value={Msg}/>
       </div>
       <div className="submitBtn">
     
            <button onClick={e=>{handleClick(e)}} >Submit</button>
       </div>
       
      
       </div>
     );
}
 
export default Notify;