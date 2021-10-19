import React from 'react';
import HeaderComponent from '../headerComponent'
import { Link, useHistory } from 'react-router-dom';
import Image from './StudentSignup.png'
import { useState } from 'react';
import Axios from 'axios';
const StudentSignup = () => {
    const history = useHistory();
    const [state, setState] = useState(false);
    const [name, setName] = useState('');
    const [studentClass, setClass] = useState('');
    const [caste, setCaste] = useState('');
    const [fathername, setFather] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [religion, setReligion] = useState('');
    const [percent, setPercent] = useState('');
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function passwordVisibility() {
        if (state) {
            setState(false)
        } else {
            setState(true);
        }

    }


    const handleClick = () => {

        var numbers = /^()([0-9]+)$/
        var emailPattern = /^([a-z\d]+)@([a-z]+)\.([a-z]{3,3})$/
        var letters = /^[A-Za-z ]+$/;
        if (name === '' || fathername === '' || studentClass === '' || phone === '' || email === '' || religion === '' || caste === '' || dob === '' || username === '' || password === '' || percent === '') {
            alert("All fields are necessary, Please fill them !!");
        } else if (phone.length < 10 || phone.length > 10) {
            alert("Enter a valid phone number !!")
            setPhone('')
        } else if (password.length < 6) {
            alert("Password should contain atleast 6 letters !!");
        } else if (!emailPattern.test(email)) {
            alert('Invalid email !!');
        }
        else {
            Axios.post('http://localhost:3001/check-student-username', {
                username: username,
            }).then((response) => {
                console.log(response);
                if (response.data === true) {
                    alert('Username already exists!!')
                    setUsername('');
                } else {
                    if (!phone.match(numbers) ) {
                        alert("Enter a valid phone number!!!")
                        setPhone('');
                    } else if( !name.match(letters) || !fathername.match(letters) || !caste.match(letters) || !percent.match(letters) ){
                        if(!name.match(letters)){
                            alert('Name field cannot contain numbers!!!')
                        }else if(!fathername.match(letters)){
                            alert('Father name field cannot contain numbers!!!')
                        }else if(!caste.match(letters)){
                            alert('Caste field cannot contain letters!!')
                        }else if(!percent.match(letters)){
                            alert('Percent field cannot contain letters!!')
                        }
                    }else{
                        insertData();
                    }
                }
            })
        }
    }

    function insertData() {
        Axios.post('http://localhost:3001/student-signup', {
            name: name,
            fathername: fathername,
            username: username,
            password: password,
            caste: caste,
            dob: dob,
            studentClass: studentClass,
            phone: phone,
            religion: religion,
            percent: percent,
            email: email,

        }).then(response => {
            console.log(response);
            if (response.data === true) {
                alert('You have application has been recieved, you will hear from us soon. Thanks for choosing EPS')
                history.push('/')
            } else {
                alert('Unexpected error occured, please try again after some time!! Thanks')
            }
        })
    }





    return (
        <div className="StudentsignupMain">
            <HeaderComponent />
            <div className="formContainerSignup">
                <div className="Student-signup-heading">
                    <span>Student Registration </span>
                </div>
                <div className="Student-signup-container">
                    <div className="imgSignup">
                        <img src={Image} alt="" />
                    </div>
                    <div className="inputBox">
                        <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} pattern="[A-Za-z]{15}" title="Only alphabets" />
                        <input name="father" type="text" placeholder="Father's Name" value={fathername} onChange={(e) => setFather(e.target.value)} />
                        <select name="class" id="class" onChange={(e) => setClass(e.target.value)}>
                            <option value="">Class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <input name="phone" type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <select name="religion" className="dropDown" onChange={(e) => setReligion(e.target.value)}>
                            <option value="" >Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Christian">Christian</option>
                            <option value="Jain">Jain</option>
                            <option value="Sikh">Sikh</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Islam">Islam</option>
                        </select>
                        <input name="caste" type="text" placeholder="Caste" value={caste} onChange={(e) => setCaste(e.target.value)} />
                        <input name="percent" type="text" placeholder="Percentage in previous exam (in words)" value={percent} onChange={(e) => setPercent(e.target.value)} />

                        <input name="dob" type="text" placeholder="Date-of-birth" value={dob} onFocus={(e) => e.target.type = "date"} onChange={(e) => setDob(e.target.value)} />
                        <input name="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input name="password" type={(state) ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <i className={`far${state ? " fa-eye-slash eyeStudent" : " fa-eye eyeStudent"}`} onClick={passwordVisibility}></i>
                        <br />
                        <div className="btnSignup">
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Apply</button><br />
                        </div>

                    </div>
                    <div className="newSignUp">
                        <span>Have an account? <Link to="/StudentLogin" className="linkSignup">Login here!</Link> </span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default StudentSignup;