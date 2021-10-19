import React from 'react';
import HeaderComponent from '../headerComponent'
import { Link } from 'react-router-dom';
import Image from '../../images/Teacher.png'
import { useState } from 'react'
import Axios from 'axios'
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const TeacherLogin = () => {
    let history = useHistory();
    const [state, setState] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [uName, setUname] = useState('');
    const [otp, setOTP] = useState('');
    const [newOtp, setNewOtp] = useState('');
    const [newPass, setNewPass] = useState('');
    const [reenter, setReEnter] = useState('');
    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [BtnSavedisabled, setBtnSaveDisabled] = useState(true);
    const handleClose = () => {
        setShow(false);
        setUname('');
        setNewOtp('');
        setOTP('');
        setNewPass('');
        setReEnter('');
        setBtnSaveDisabled(true);
        setDisabled(true);
    }
    const handleShow = () => setShow(true);
    function passwordVisibility() {
        if (state) {
            setState(false)
        } else {
            setState(true);
        }

    }

    const handleClick = () => {
        if (username === "" || password === "") {
            alert('Enter both username and password');
        } else {
            Axios.post('http://localhost:3001/teacher-login', {
                username: username,
                password: password
            }).then((response) => {
                if (response.data === true) {
                    window.localStorage.setItem("tauth",true);
                    alert("Welcome " + username);
                    history.push(`/Teacher/${username}`);
                } else {
                    alert(response.data)
                    setUsername('');
                    setPassword('');
                }
            })
        }
    }

    function handleOtp() {
        Axios.post('http://localhost:3001/send-otp-teacher', {
            username: uName
        }).then((response) => {
            if (response.data === false) {
                alert('Username does not exists!!')
                setUname('');
            } else if (response.data === 'Err') {
                alert('Unexpected error occured!!!')
            } else {
                setOTP(response.data);
                alert('OTP has been sent check your email.')
                setDisabled(false);
            }
        })
    }

    function handleOtpVerification() {
        if (otp == newOtp) {
            setBtnSaveDisabled(false)
            alert('Enter new password and save')
        } else {
            alert('You have entered wrong otp!!');
            setBtnSaveDisabled(true)
        }
    }

    function handleUpdate() {
        if (newPass != reenter) {
            alert('Passwords are not matching!!')
        } else {
            Axios.put('http://localhost:3001/teacher-pass-update', {
                username: uName,
                password: reenter
            }).then((response) => {
                if (response.data === false) {
                    alert('unexpected error occured!')
                } else {
                    alert('Password has been updated! try logging in.')
                    setUname('');
                    setNewOtp('');
                    setOTP('');
                    setNewPass('');
                    setReEnter('');
                    setBtnSaveDisabled(true);
                    setDisabled(true);
                }
            })
        }
    }



    return (
        <div className="adminLoginMain">
            <HeaderComponent />
            <div className="formContainer">
                <div className="Admin-Login-heading">
                    <span>Teacher Login </span>
                </div>
                <div className="imgLogin">
                    <img className="loginImg" src={Image}></img>
                </div>
                <div className="Admin-Login-container">
                    <div className="inputBox">
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <input type={(state) ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Password" value={password} />
                        <i className={`far${state ? " fa-eye-slash eyeAdmin" : " fa-eye eyeAdmin"}`} onClick={passwordVisibility}></i>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Login</button><br />
                        <a onClick={handleShow} style={{ cursor: "pointer" }}>Forgot password ? click here!</a>

                    </div>
                    <div className="newSignUp">
                        <span>New Teacher? <Link to="/TeacherSignup" className="linkSignup">Apply here!</Link> </span>
                    </div>
                    <Modal show={show} onHide={handleClose} animation={true}>
                        <Modal.Header >
                            <Modal.Title>Reset Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="text" placeholder="Enter username" onChange={(e) => setUname(e.target.value)} value={uName} />  <Button variant="primary" onClick={handleOtp}>Get otp</Button>
                            <br /> <br />
                            <input type="text" placeholder="Enter OTP" onChange={(e) => setNewOtp(e.target.value)} value={newOtp} />
                            <Button variant="primary" style={{ marginLeft: "10px" }} disabled={disabled} onClick={handleOtpVerification} >Verify otp</Button>
                            <br /><br />
                            <input type="password" placeholder="Enter new password" onChange={(e) => setNewPass(e.target.value)} value={newPass} style={{ marginRight: "10px" }} />
                            <input type="password" placeholder="Re-enter new password" onChange={(e) => setReEnter(e.target.value)} value={reenter} />
                            <Button variant="primary" disabled={BtnSavedisabled} style={{ marginLeft: "10px" }} onClick={handleUpdate}>Update</Button>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
          </Button>
                        </Modal.Footer>
                    </Modal>



                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;