import Axios from 'axios';
import React,{useState} from 'react';
const DeleteTeacher = () => {
const [username,setUsername]=useState([]);
function fetchTeachers(){
    Axios.post('http://localhost:3001/get-teacher-details', 
    {
      username:username
    }
    ).then((response) =>{
        if(response.data===false){
            alert('Username doesnt Exists')
            setUsername('');
        }else{
           handleDelete()
        }
    })
}

function handleDelete(e){
Axios.delete(`http://localhost:3001/delete-teacher/${username}`,{
  username:username
}).then((response) =>{
  if(response.data===true){
    alert('Teacher data has been deleted')
    setUsername('')
  }else{
    alert('Unexpected error occured')
  }
})
}

    return ( 
      <div className="deleteTeacherContainer" style={{backgroundColor:"#161616",padding:'30px',width:'400px',borderRadius:'4px'}}>
      <h1 className="text-primary" style={{fontWeight:'bold',fontFamily:'Nunito'}}>Delete Teacher</h1> 
      <div id="deleteInput" className="ui left icon input">
        <input type="text" placeholder="Teacher username..." onChange={(e)=>setUsername(e.target.value)} value={username} />
        <i className="users icon"></i>
      </div> <br /> <br />
      <div className="btnOk">
        <button className="btn-danger" onClick={fetchTeachers}>Delete</button>
      </div>
        </div>
     );
}
 
export default DeleteTeacher;