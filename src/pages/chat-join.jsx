import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChatImg from '../images/chat.jpg';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import Header from './headerComponent';
import Axios from 'axios';
const JoinChat = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password,setPassword]=useState('');
    const [room, setRoom] = useState('');

    const handleClick = () => {
        if (userName === '') {
            alert('Please enter username!!');
        } else if (room === '') {
            alert('Please select class!!');
        } else {
           Axios.post('http://localhost:3001/student-login',{
               username:userName,
               password:password,
           }).then((response)=>{
               if(response.data === true){
                history.push(`/chat-room/${userName}/${room}`)
               }else{
                   alert(response.data);
                   setUserName('');
                   setPassword('');
               }
           })
        }
    }

    return (
        <div className="room-join" style={{ width: "1600px", height: "790px", backgroundColor: "dodgerblue" }}>
        <Header />
            <div className="chat-join-container" style={{ width: "800px", height: "400px", backgroundColor: "#9370db", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", boxShadow: "10px 10px 5px rgba(0,0,0,0.5" }}>
                <img src={ChatImg} style={{ width: "50%" }} />
                <div className="room-details" style={{ position: "absolute", left: "60%", top: "10%" }}>
                    <h1 className="text-light" style={{ fontFamily: 'monotype' }}>Join chat-room</h1>
                    <br /><br /><br />
                    <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} style={{ width: "280px", outline: "none", border: "none", height: "35px",marginBottom:"20px" }} placeholder="Enter your name" />
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} style={{ width: "280px", outline: "none", border: "none", height: "35px" }} placeholder="Enter your Password" />

                    <div className="selectClass">
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Select Class" style={{ marginTop: "40px" }} onSelect={(e) => setRoom(e)}>
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
                        <Button variant="dark" style={{ marginLeft: "30px", width: "140px" }} onClick={handleClick} >Join room</Button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default JoinChat;
