import React from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap'
import {useState} from 'react'
import Axios from 'axios'
const Notify = () => {
    const [Msg,setMsg]=useState('')
    const [stuClass,setClass]= useState('');
    const handleClick = (e) => {
        if(stuClass===''){
            alert('Select class to send message')
        }else if(Msg===''){
            alert('Cannot send empty message!!')
        }else{
            Axios.post('http://localhost:3001/send-notification-to-class',{
                msg:Msg,
                class:stuClass
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
       <div className="AnnounceContainer" style={{backgroundColor:'#161616'}}>
<input type="text" placeholder="Write your message here" onChange={e=>{setMsg(e.target.value)} } value={Msg}/>
       </div>
       <div className="submitBtn">
       <div className="selectClass">
            <DropdownButton id="dropdown-basic-button" title="Select Class" onSelect={(e)=>setClass(e)}>
  <Dropdown.Item eventKey="1">1</Dropdown.Item>
  <Dropdown.Item eventKey="2">2</Dropdown.Item>
  <Dropdown.Item eventKey="3">3</Dropdown.Item>
  <Dropdown.Item eventKey="4">4</Dropdown.Item>
  <Dropdown.Item eventKey="5">5</Dropdown.Item>
  <Dropdown.Item eventKey="6">6</Dropdown.Item>
  <Dropdown.Item eventKey="7">7</Dropdown.Item>
  <Dropdown.Item eventKey="8">8</Dropdown.Item>
  <Dropdown.Item eventKey="9">9</Dropdown.Item>
  <Dropdown.Item eventKey="10">10</Dropdown.Item>
</DropdownButton>
            </div>

       <button onClick={e=>{handleClick(e)}} >Submit</button>
       </div>
      
       </div>
     );
}
 
export default Notify;