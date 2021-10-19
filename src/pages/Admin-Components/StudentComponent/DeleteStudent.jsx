import Axios from 'axios';
import React,{useState} from 'react';
const DeleteStudent = () => {
const [username,setUsername]=useState([]);
function fetchStudents(){
    Axios.post('http://localhost:3001/get-student-details', {
username: username
    }
    ).then((response) =>{
        if(response.data===false){
            alert('Username doesnt exists!!')
            setUsername('');
        }else{
          handleDelete();
        }
    })
}


function handleDelete(e){
Axios.delete(`http://localhost:3001/delete-student/${username}`,{
  username:username
}).then((response) =>{
  if(response.data===true){
    alert('Student data has been deleted!')
    setUsername('');
  }else{
    alert('Unexpected error occured')
  }
})
}

    return ( 
      <div className="deleteTeacherContainer" style={{backgroundColor:'#161616',borderRadius:'4px',width:'350px',padding:'20px'}} >
      <h1 className="text-primary" style={{fontFamily:'nunito',fontWeight:"bold"}}>Delete Student</h1> 
      <div id="deleteInput" className="ui left icon input">
        <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} />
        <i className="users icon"></i>
      </div> <br /> <br />
      <div className="btnOk">
        <button className="btn-danger" onClick={fetchStudents}>Delete</button>
      </div>
        </div>
     );
}
 
export default DeleteStudent;