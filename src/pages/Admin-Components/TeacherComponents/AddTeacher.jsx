import React,{useState,useEffect} from 'react'
import Axios from 'axios';
const AddTeacher = () => {
    const [state, setState] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
const [joinDate,setJoinDate]=useState('');
let approve='Yes'
let salary='30000';
    function passwordVisibility() {
        if (state) {
          setState(false)
        } else {
          setState(true);
        }
    
      }


      function generatePass_date(){
        setJoinDate(new Date().getTime());
        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < 10; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        setPassword(pass);
      }


      function handleTextChange(e) {
        var letters = /^[A-Za-z ]+$/;
        if (e.target.value.match(letters)) {
          if (e.target.name === "name") {
            setName(e.target.value);
          }  else if (e.target.name === "experience") {
            setExperience(e.target.value);
          } else if (e.target.name === "username") {
            setUsername(e.target.value);
          }
        }else {
          alert('Only characters are allowed in this field');
        }
    
      }
    
      function handleNumChange(e) {
        generatePass_date();
        //var letters = /^[0-9]+$/;
        var numbers=/^()([0-9]+)$/
        if (e.target.value.match(numbers)) {
          setPhone(e.target.value);
        } else {
          alert('Only numbers are allowed in this field');
        }
      }

function insertData(){
Axios.post('http://localhost:3001/insert-new-teacher',{
    name:name,
    username:username,
    password:password,
    email:email,
    subject:subject,
    experience:experience,
    dob:dob,
    phone:phone,
    approve:approve,
    salary:salary,
    joindate:joinDate
}).then((response)=>{
    if(response.data===true){
        alert('Password will be sent to teacher via email, Welcome to EPS')
        console.log(phone)
        setName('')
        setDob('')
        setEmail('')
        setPassword('')
        setExperience('')
        setPhone('')
        setSubject('')
        setUsername('')
        
    }
})
}

      const handleClick = () => {
console.log(password);
console.log(joinDate)
        var emailPattern=/^([a-z\d]+)@([a-z]+)\.([a-z]{3,3})$/
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
                  }else{
                   insertData();
                  }
                })
              }
            }


    return ( 
<div className="addTeacherContainer" style={{backgroundColor:"#161616",padding:'10px',borderRadius:'4px'}}>
<h1 className="text-primary" style={{fontWeight:'bold',fontFamily:"inherit",textAlign:'center'}}>Add new teacher</h1>
<div className="inputBox" style={{marginLeft:"60px"}}  >
            <input name="name" type="text" placeholder="Name" onChange={(e) => handleTextChange(e)} value={name}  />
            <select className="subject" name="subject" id="subject" onChange={(e) => setSubject(e.target.value)} value={subject}>
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
            <input type="text" placeholder="Phone Number" onChange={(e) => handleNumChange(e)} value={phone} />
            <input name="email" type="email" placeholder="Email (gmail only)" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input name="experience" type="text" placeholder="Experience (in words)" onChange={(e) => handleTextChange(e)} value={experience} />
            <input className="dob" name="dob" type="text" placeholder="Date-of-birth" onChange={(e) => setDob(e.target.value)} onFocus={(e)=>e.target.type='date'} value={dob} />
            <input className="uname" name="username" type="text" placeholder="Username" onChange={(e) => handleTextChange(e)} value={username} />
            <input name="password" type={(state) ? "text" : "password"} placeholder="Password" disabled style={{backgroundColor:"grey"}}  />
            <i className={`far${state ? " fa-eye-slash eyeT" : " fa-eye eyeT "}`} onClick={passwordVisibility}  ></i>
            <br />
            <div className="btnSignup">
              <button type="button" className="btn btn-danger btnAddT" onClick={handleClick}>Add</button><br />
            </div>
            </div>

</div>
     );
}
 
export default AddTeacher;