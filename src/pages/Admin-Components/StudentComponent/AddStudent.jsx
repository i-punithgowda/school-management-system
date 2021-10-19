import React, { useState, useEffect } from 'react';
import Axios from 'axios'
const AddStudent = () => {
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
  const [rollno, setrollno] = useState('');
  const [feePaid, setFee] = useState('');

  const handleClick = () => {
    var emailPattern = /^([a-z\d]+)@([a-z]+)\.([a-z]{3,3})$/
    if (name === '' || fathername === '' || studentClass === '' || phone === '' || email === '' || religion === '' || caste === '' || dob === '' || username === '' || password === '' || percent === '') {
      alert("All fields are necessary, Please fill them");
      console.log(name,fathername,email,phone,religion,caste,dob,username,password,percent,studentClass)
    } else if (phone.length < 10 || phone.length > 10) {
      alert("Enter a valid phone number")
    } else if (password.length < 6) {
      alert("Password should contain atleast 6 letters");
    } else if (!emailPattern.test(email)) {
      alert('invalid email');
    }
    else {
      Axios.post('http://localhost:3001/check-student-username', {
        username: username,
      }).then((response) => {
        console.log(response);
        if (response.data === true) {
          alert('Username already exists!!')
        } else {
          insertData();
        }
      })
    }
  }

  function insertData() {
    let fees=0;
  if(studentClass==1){ 
    fees=15000
  }else if(studentClass==2){
   fees=17000
  }else if(studentClass==3){
   fees=18000
  }
  else if(studentClass==4){
    fees=21000
  }else if(studentClass==5){
    fees=23000
  }else if(studentClass==6){
  fees=25000
  }else if(studentClass==7){
    fees=28000
  }else if(studentClass==8){
    fees=31000
  }else if(studentClass==9){
    fees=33000
  }else if(studentClass==10){
   fees=35000
  }
  
  
    Axios.post('http://localhost:3001/add-student', {
      name: name,
      fathername: fathername,
      username: username,
      password: password,
      caste: caste,
      dob: dob,
      class: studentClass,
      phone: phone,
      religion: religion,
      percent: percent,
      email: email,
      approve: "Yes",
      rollno: rollno+1,
      fee: fees,
paid:feePaid
    }).then(response => {
      console.log(response);
      if (response.data === true) {
        alert('Student username and password will be sent via email, welcome to EPS')
        
        setName('')
        setCaste('')
        setClass('')
        setDob('')
        setEmail('')
        setFather('')
        setFee('')
        setName('')
        setPassword('')
        setPercent('')
        setPhone('')
        setReligion('')
        setUsername('')
        setrollno('')
        getlastRoll()
      } else {
        alert('Unexpected error occured, please try again after some time!! Thanks')
        setName('')
        setCaste('')
        setClass('')
        setDob('')
        setEmail('')
        setFather('')
        setFee('')
        setName('')
        setPassword('')
        setPercent('')
        setPhone('')
        setReligion('')
        setUsername('')
        setrollno('')
      }
    })
  }

  function handleNumChange(e) {
    var numbers = /^()([0-9]+)$/
    if(e.target.name==="paid"){
     if(e.target.value.match(numbers)){
       setFee(e.target.value)
     }else{
       alert('only numbers are allowed in this field')
     }
    }else if(e.target.name==="phone"){
      if(e.target.value.match(numbers)){
        setPhone(e.target.value)
      }else{
        alert('only numbers are allowed in this field')
      }
    }
    generatePass_date()

  }
  function handleTextChange(e) {
    var letters = /^[A-Za-z ]+$/;
    if (e.target.value.match(letters)) {
      if (e.target.name === "name") {
        setName(e.target.value);
      } else if (e.target.name === "father") {
        setFather(e.target.value);
      } else if (e.target.name === "caste") {
        setCaste(e.target.value);
      } else if (e.target.name === "percent") {
        setPercent(e.target.value);
      } else if (e.target.name === "username") {
        setUsername(e.target.value);
      }
    } else {
      alert('Only characters are allowed in this field');
    }

  }

  function generatePass_date() {
    var chars = "abcdefghijklmnopqrstuvwxyz@#$%&ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < 10; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }
    setPassword(pass);
    //console.log(password)
  }

 function handleClass(e){
  setClass(e.target.value)
 }
function getlastRoll(){
  Axios.post('http://localhost:3001/get-lastRoll')
      .then((response) => {
        setrollno(response.data);
        //console.log(rollno)
      })
}

  useEffect(() => {
    getlastRoll()
    generatePass_date()
  }, [])
  return (
    <div className="StudentsignupAdmin" style={{backgroundColor:'#161616',borderRadius:'4px'}} >
    <h1 className="text-primary" style={{fontWeight:"bold",textAlign:'center',fontFamily:'nunito'}}>Add new student</h1>
      <div className="formContainerStudentAdd">
        <div className="Student-signup-container">
          <div className="inputBox">
            <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => handleTextChange(e)} />
            <input name="father" type="text" placeholder="Father's Name" value={fathername} onChange={(e) => handleTextChange(e)} />
            <select name="class" id="class" onChange={(e) => handleClass(e)} value={studentClass}>
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
            <input name="phone" type="text" placeholder="Phone Number" value={phone} onChange={(e) => handleNumChange(e)} />
            <input name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <select name="religion" className="dropDown" onChange={(e) => setReligion(e.target.value)} value={religion}>
              <option value="" >Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Christian">Christian</option>
              <option value="Jain">Jain</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Islam">Islam</option>
            </select>
            <input name="caste" type="text" placeholder="Caste" onChange={(e) => handleTextChange(e)} value={caste} />
            <input name="percent" type="text" placeholder="Percentage in previous exam (in words)" onChange={(e) => handleTextChange(e)} value={percent} />

            <input name="dob" type="text" placeholder="Date-of-birth" onFocus={(e) => e.target.type = "date"} onChange={(e) => setDob(e.target.value)} value={dob} />
            <input name="username" type="text" placeholder="Username" onChange={(e) => handleTextChange(e)} value={username} />
            <input name="paid" type="text" placeholder="Enter fees paid" onChange={(e) => handleNumChange(e)} value={feePaid} />

            <br />
            <div className="btnStudentAdd">
              <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;