import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from 'react-router-dom';
import ImgUser from '../images/chatuser.png';
import Whistle from '../audio/whatsapp.mp3';
import ReactScrollableFeed from 'react-scrollable-feed';
import io from 'socket.io-client';

const ChatRoom = () => {
    let socketRef = useRef();
    const [message, setMessage] = useState('');
    const [audio] = useState(new Audio(Whistle));
    const [chat, setChat] = useState([]);
    const [online, setOnline] = useState('');
    const [typing, setTyping] = useState('');
    const obj = useParams();
    let username = obj.username;
    let room = obj.room;
    const history = useHistory();
    const connectedPort = "localhost:4000/";

    useEffect(() => {

        socketRef.current = io(connectedPort, { transports: ['websocket'] })
        socketRef.current.emit('joinRoom', { username, room })

    }, [])



    useEffect(() => {
        socketRef.current.on("message", (message) => {
            setChat(chat => [...chat, message]);
            if (message.username !== username) {
                audio.play();
            }
            setTyping('');

        })

        socketRef.current.on("roomUsers", ({ room, users }) => {
            setOnline(users);
            console.log(users);
        })

        socketRef.current.on('onTyping', (message) => {
            setTyping(message);
        })

    }, [])

    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
          window.removeEventListener("beforeunload", alertUser);
        };
      }, []);

      const alertUser = (e) => {
        e.preventDefault();
        socketRef.current.disconnect();
      };

    function handleSubmit(e) {
        e.preventDefault();
        if (message !== '') {
            socketRef.current.emit('chatMessage', message);
        }
        setMessage('');

    }

    function handleLogout(e) {
        socketRef.current.disconnect();
        history.push('/')
    }


    const renderChat = () => {
        return chat.map(({ username, time, text }, index) => (

            <div key={index} style={{ backgroundColor: "crimson", color: "#fff", fontFamily: "Trebuchet MS", padding: "12px 20px", marginTop: "20px", widthFit: "content", heightFit: "content" }}>

                <p style={{ textTransform: "capitalize" }}>
                    <i class="fas fa-user-circle"></i> &nbsp;&nbsp;&nbsp;
                    {username}: <span>{text}</span> -
                    <span>{time}</span>
                </p>

            </div>

        ))
    }

    function handleChange(e) {
        setMessage(e.target.value);
        socketRef.current.emit('typing', ({ username, room }));
    }



    return (
        <div className="chatRoom" style={{ width: "1600px", height: "790px", backgroundColor: "dodgerblue" }}>
            <div className="chat-container" style={{ width: "1000px", height: "600px", backgroundColor: "#a3a3a3", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", borderRadius: "8px", boxShadow: "10px 10px 5px rgba(0,0,0,0.5)" }}>
                <div className="chat-header" style={{ width: "70%", height: "70px", background: "#3494E6", background: " -webkit-linear-gradient(to right, #EC6EAD, #3494E6) ", background: "linear-gradient(to right, #EC6EAD, #3494E6) ", borderRadius: "10px 0% 0% 0%" }}>
                    <h3 style={{ position: "absolute", marginTop: "20px", marginLeft: "120px", color: "#161616", textTransform: 'capitalize' }}>{obj.username}</h3>
                </div>
                <div className="float-widget" style={{ width: "100px", height: "100%", backgroundColor: "#161616", borderRadius: " 0px 0px 0px 0px", position: "absolute", top: "0" }}>
                    <img src={ImgUser} style={{ width: "70px", margin: "15px" }} />
                    <i className="fas fa-sign-out-alt" style={{ marginTop: "430px", marginLeft: "30px", fontSize: "3rem", color: "dodgerblue" }} onClick={handleLogout} ></i>
                </div>
                <div className="chat-screen" style={{ width: "60%", height: "530px", background: "#0f0c29", background: " -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)", background: " linear-gradient(to right, #24243e, #302b63, #0f0c29)", marginLeft: "100px" }}>
                    <br />
                    <div className="typingStatus">
                        {typing && <p style={{ fontSize: "1.1rem", color: "#f1f1f1", fontWeight: "bold" }}>{typing}</p>}
                    </div>

                    <div className="chats" style={{ height: "400px", padding: "10px " }}>

                        <ReactScrollableFeed>
                            {renderChat()}
                        </ReactScrollableFeed>

                    </div>

                    <br />
                    <div className="form-send">
                        <div className="ui action input" >
                            <form onSubmit={handleSubmit} >
                                <input type="text" placeholder="Enter the message..." style={{ width: "500px", height: "50px", outline: "none", border: "none",marginLeft:"10px" }} onChange={handleChange} value={message} />
                                <button className="btn btn-warning" style={{ height: "50px",marginLeft:"20px" }} >Send</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-online-status" style={{ width: "300px", height: "605px", backgroundColor: "#FFEAC9", position: "absolute", left: "63%", top: "11.5%" }}>
                <div className="onlineheader" style={{ width: "100%", height: "75px", backgroundColor: "#161616" }}>
                    <h2 style={{ position: "absolute", marginTop: "10px", marginLeft: "100px", color: "#f2f2f2" }}>Online</h2>
                </div>

                <div className="online-users" style={{ height: "500px", overflow: "auto", color: "#161616" }}>
                    {online && online.map(({ username }) => {
                        return <div className="usersOnline" key={username} style={{ marginTop: "30px" }}>
                            <p style={{ textAlign: "center", textTransform: "capitalize", fontSize: "1.3rem", fontWeight: "bold" }}>{username} &nbsp;&nbsp;
                                <i className="signal icon" style={{ color: "green" }}></i>
                            </p>

                        </div>
                    })}
                </div>

            </div>
        </div>
    );
}

export default ChatRoom;