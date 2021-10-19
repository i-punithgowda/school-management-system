import React,{useState,useEffect} from 'react'
import Axios from 'axios';
const UpdateTeacher = () => {
    const [state, setState] = useState(false);
    const [searchVal,setSearchVal]=useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
const [salary,setSalary]=useState('');
    function passwordVisibility() {
        if (state) {
          setState(false)
        } else {
          setState(true);
        }
    
      }

function getUserData(e){
e.preventDefault();
Axios.post('http://localhost:3001/fetch-teacher-details',{
    username:searchVal
}).then((response)=>{
   if(response.data===false){
       alert('Username doesnt exists')
       setName('')
       setSubject('')
       setPhone('')
       setEmail('')
       setUsername('')
       setSalary('')
       setSearchVal('')
   }else{
    setName(response.data[0].name)
    setSubject(response.data[0].subject)
    setPhone(response.data[0].phone)
    setEmail(response.data[0].email)
    setUsername(response.data[0].username)
    setSalary(response.data[0].salary)
   }
})
}


function updateData(){
Axios.put('http://localhost:3001/update-teacher',{
    name:name,
    username:username,
    email:email,
    subject:subject,
    phone:phone,
    salary:salary,
    searchVal:searchVal
}).then((response)=>{
    if(response.data===true){
        alert('Updated')
        setName('')
    setSubject('')
    setPhone('')
    setEmail('')
    setUsername('')
    setSalary('')
    setSearchVal('')
    }
})
}

  function handleClick(){
        updateData();
     }


    return ( 
<div className="updateTeacherContainer" style={{backgroundColor:"#161616",padding:'10px',borderRadius:'4px'}}>
<h1 className="text-primary" style={{fontWeight:"bold",fontFamily:"Nunito"}}>Update teacher</h1>
<div className="updateForm">
<input type="text"  className="updateInput" placeholder="Enter username" onChange={(e)=>setSearchVal(e.target.value)} value={searchVal} /> <br /><br />
<button className="btnSearch btn btn-danger" onClick={getUserData}>Search</button>
</div>
<div className="inputBox">
            <input name="name" type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} />
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
            <input type="text" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} value={phone} />
            <input name="email" type="email" placeholder="Email (gmail only)" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input className="uname" name="username" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} />
            <input name="salary"  placeholder="Salary" onChange={(e)=>setSalary(e.target.value)} value={salary} />
            <br />
            <div className="btnSignup">
              <button type="button" className="btn btn-danger btnAddT" onClick={handleClick}>Update</button><br />
            </div>
            </div>

</div>
     );
}
 
export default UpdateTeacher;