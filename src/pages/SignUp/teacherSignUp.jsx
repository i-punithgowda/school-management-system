import React from 'react';
import HeaderComponent from '../headerComponent'
import { Link , useHistory} from 'react-router-dom';
import Image from './TeacherSignup.png';
import { useState } from 'react';
import Axios from 'axios';
const TeacherSignup = () => {
  let history=useHistory();
  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
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

function insertData(){
  Axios.post('http://localhost:3001/teacher-signup',{
    name:name,
    username:username,
    password:password,
    dob:dob,
    subject:subject,
    phone:phone,
    experience:experience,
    email:email
  }).then(response=>{
    console.log(response);
    if(response.data===true){
      alert('You have applied for the job succesfully, you will hear from us soon. Thanks for choosing EPS')
history.push('/')
    }else{
      alert('Unexpected error occured, please try again after some time!! Thanks')
    }
  })
}

 
  
  

  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6) {
      e.target.style.backgroundColor = "crimson";
    } else {
      e.target.style.backgroundColor = "white";
    }
  }
  const handleClick = () => {
var emailPattern=/^([a-z\d]+)@([a-z]+)\.([a-z]{3,3})$/
var numbers = /^()([0-9]+)$/
var letters = /^[A-Za-z ]+$/;
    if (name ==='' || subject === '' || phone === '' || email === '' || experience === '' || dob === '' || username === '' || password === '') {
      alert("All fields are necessary, Please fill them");
    } else if (phone.length < 10 || phone.length > 10) {
      alert("Enter a valid phone number")
    }else if(password.length<6){
alert("Password should contain atleast 6 letters");
    } else if(!emailPattern.test(email)){
alert('invalid email');
    }
    else {
        Axios.post('http://localhost:3001/check-teacher-username',{ 
          username:username,
        }).then((response)=>{
          console.log(response);
          if(response.data===true){
            alert('Username already exists!!')
          }else {
            if(!phone.match(numbers)){
              alert('Enter a valid phone number!!!')
            }else if(!name.match(letters) || !experience.match(letters)){
                if(!name.match(letters)){
                  alert('Name field cannot contain numbers!!')
                }else if(!experience.match(letters)){
                  alert('Experience field cannot contain numbers!!')
                }
            }else{
              insertData();
            }
            
          }

         
        })
      }
    }

  return (
    <div className="TeachersignupMain">
      <HeaderComponent />
      <div className="formContainerSignupTeacher">
        <div className="Student-signup-heading">
          <span>Apply for teacher job </span>
        </div>
        <div className="Student-signup-container">
          <div className="imgSignup">
            <img src={Image} alt="" />
          </div>
          <div className="inputBox">
            <input name="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
            <select className="subject" name="subject" id="subject" onChange={(e) => setSubject(e.target.value)}>
              <option value="">Subject</option>
              <option value="English">English</option>
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="Social">Social</option>
              <option value="General Knowledge">General knowledge</option>
              <option value="Physical Education">Physical Education</option>
            </select>
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}  />
            <input name="email" type="email" placeholder="Email (gmail only)" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input name="experience" type="text" placeholder="Experience (in words)" onChange={(e) => setExperience(e.target.value)} value={experience} />
            <input className="dob" name="dob" type="text" placeholder="Date-of-birth" value={dob} onChange={(e) => setDob(e.target.value)} onFocus={(e)=>e.target.type='date'} />
            <input className="uname" name="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
            <input name="password" type={(state) ? "text" : "password"} placeholder="Password" onChange={(e) => handlePasswordChange(e)} value={password} />
            <i className={`far${state ? " fa-eye-slash eyeTeacher" : " fa-eye eyeTeacher"}`} onClick={passwordVisibility}></i>
            <br />
            <div className="btnSignup">
              <button type="button" className="btn btn-primary" onClick={handleClick} >Apply here</button><br />
            </div>
          </div>
          <div className="newSignUp">
            <span>Have an account?<Link to="/TeacherLogin" className="linkSignup">Login here!</Link> </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherSignup;