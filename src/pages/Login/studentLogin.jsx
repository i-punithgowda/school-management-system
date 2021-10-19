import React from 'react';
import HeaderComponent from '../headerComponent'
import { Link, useHistory } from 'react-router-dom';
import Image from '../../images/Student.png'
import { useState } from 'react'
import Axios from 'axios'
import { Modal, Button } from 'react-bootstrap';
const StudentLogin = () => {
    const history = useHistory();
    const [state, setState] = useState(false);
    const [username, setUsername] = useState('');
    const [uName, setUname] = useState('');
    const [password, setPassword] = useState('');
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



    function handleClick() {
        if (username === "" || password === "") {
            alert('Enter both username and passwords')
        } else {
            Axios.post('http://localhost:3001/student-login', {
                username: username,
                password: password
            }).then((response) => {
                console.log(response)
                if (response.data === true) {
                    window.localStorage.setItem("sauth",true);
                    alert("Welcome " + username);
                    history.push(`/Student/${username}`);
                } else {
                    alert(response.data);
                    setUsername('');
                    setPassword('');
                }
            })
        }

    }

    function handleOtp() {
        Axios.post('http://localhost:3001/send-otp', {
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
            Axios.put('http://localhost:3001/student-pass-update', {
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
                    <span>Student Login </span>
                </div>
                <div className="imgLogin">
                    <img className="loginImg" src={Image}></img>
                </div>
                <div className="Admin-Login-container">
                    <div className="inputBox">
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <input type={(state) ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <i className={`far${state ? " fa-eye-slash eyeAdmin" : " fa-eye eyeAdmin"}`} onClick={passwordVisibility}></i>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Login</button><br />
                        <a onClick={handleShow} style={{ cursor: "pointer" }}>Forgot password ? click here!</a>
                    </div>
                    <div className="newSignUp">
                        <span>New Admission ? <Link to="/StudentSignup" className="linkSignup">Click here!</Link> </span>
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
                            <input type="text" placeholder="Enter new password" onChange={(e) => setNewPass(e.target.value)} value={newPass} style={{ marginRight: "10px" }} />
                            <input type="text" placeholder="Re-enter new password" onChange={(e) => setReEnter(e.target.value)} value={reenter} />
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

export default StudentLogin;