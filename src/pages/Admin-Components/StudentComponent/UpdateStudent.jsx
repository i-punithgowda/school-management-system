import React,{useState,useEffect} from 'react'
import Axios from 'axios';
const UpdateStudent = () => {
    const [state, setState] = useState(false);
    const [searchVal,setSearchVal]=useState('');
    const [name, setName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
const [fee,setFee]=useState('');
    function passwordVisibility() {
        if (state) {
          setState(false)
        } else {
          setState(true);
        }
    
      }

function getUserData(e){
e.preventDefault();
Axios.post('http://localhost:3001/fetch-student-details',{
    username:searchVal
}).then((response)=>{
   if(response.data===false){
       alert('Username doesnt exists')
       setName('')
       setPhone('')
       setEmail('')
       setUsername('')
       setFee('')
       setSearchVal('')
       setStudentClass('');
   }else{
    setName(response.data[0].name)
  setStudentClass(response.data[0].class)
    setPhone(response.data[0].phone)
    setEmail(response.data[0].email)
    setUsername(response.data[0].username)
    setFee(response.data[0].fee)
   }
})
}


function updateData(){
Axios.put('http://localhost:3001/update-student',{
    name:name,
    username:username,
    email:email,
    studentClass:studentClass,
    phone:phone,
    fee:fee,
    searchVal:searchVal
}).then((response)=>{
    if(response.data===true){
        alert('Updated')
        setName('')
    setPhone('')
    setEmail('')
    setUsername('')
   setFee('')
    setSearchVal('')
    setStudentClass('')
    }
})
}

  function handleClick(){
        updateData();
     }


    return ( 
<div className="updateStudentContainer" style={{backgroundColor:'#161616',borderRadius:'4px',padding:'10px'}} >
<h1 className="text-primary" style={{fontFamily:'nunito',fontWeight:"bold"}}>Update student</h1>
<div className="updateForm">
<input type="text"  className="updateInput" placeholder="Enter username" onChange={(e)=>setSearchVal(e.target.value)} value={searchVal} /> <br /><br />
<button className="btn btn-danger btnSearch" onClick={getUserData}>Search</button>
</div>
<div className="inputBox">
<input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} />
<input type="text" placeholder="Class" onChange={(e)=>setStudentClass(e.target.value)} value={studentClass} />

            <input type="text" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} value={phone} />
            <input name="email" type="email" placeholder="Email (gmail only)" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input className="uname" name="username" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} />
            <input name="salary"  placeholder="Fee" onChange={(e)=>setFee(e.target.value)} value={fee} />
            <br />
            <div className="btnSignup">
              <button type="button" className="btn btn-danger btnAddT" onClick={handleClick}>Update</button><br />
            </div>
            </div>

</div>
     );
}
 
export default UpdateStudent;