import React from 'react';
import HeaderComponent from '../headerComponent'
import Image from '../../images/admin.png'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
const AdminLogin = () => {
    let history=useHistory();

    const [state, setState] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleClick() {
        if (username === "" || password === "") {
            alert('Please fill all fields')
        } else {
            Axios.post('http://localhost:3001/adminLogin', {
                username: username,
                password:password
            }).then((response) => {
               if(response.data===true){
                   window.localStorage.setItem("aauth",true);
                   alert(`Welcome ${username}`)
                   history.push(`/admin/${username}`)
               }else{
                   alert(response.data)
               }
            })
        }
        setUsername('');
        setPassword('');
    }

    function passwordVisibility() {
        if (state) {
            setState(false)
        } else {
            setState(true);
        }

    }

    return (

        <div className="adminLoginMain">
            <HeaderComponent />
            <div className="formContainer">
                <div className="Admin-Login-heading">
                    <span>Admin Login </span>
                </div>
                <div className="imgLogin">
                    <img className="loginImg" src={Image}></img>
                </div>
                <div className="Admin-Login-container">
                    <div className="inputBox">
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <input type={(state) ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <i className={`far${state ? " fa-eye-slash eyeAdmin" : " fa-eye eyeAdmin"}`} onClick={passwordVisibility}></i>
                        <button type="button" onClick={handleClick} className="btn btn-primary">Login</button><br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;