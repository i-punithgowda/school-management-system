import Axios from 'axios';
import React,{useState,useEffect} from 'react';
const ViewStudents = () => {
const [data,setData]=useState([]);
function fetchStudents(){
    Axios.post('http://localhost:3001/view-all-students', 
    ).then((response) =>{
        if(response.data===false){
            alert('No Students to display')
        }else{
            setData(response.data)
        }
    })
}

useEffect(() => {
fetchStudents();
},[])

    return ( 

    <div className="tblTeacher">
    
    <table className="table table-dark table-borderless">
    <thead>                                                     
      <tr>
        <th className="col-xs-3">Name</th>
        <th className="col-xs-6">Class</th>
        <th className="col-xs-6">Phone</th>
        <th className="col-xs-6">Date of birth</th>
      </tr>
    </thead>
    {data && data.map((d)=>{
    return  (
        <tbody key={d.id}>
      <tr>
        <td className="col-xs-3">{d.name}</td>
        <td className="col-xs-6">{d.class}</td>
        <td className="col-xs-6">{d.phone}</td>
        <td className="col-xs-6">{d.dob}</td>
      </tr>


      </tbody>
    
    )
    })}
    
    </table>
    </div>
     );
}
 
export default ViewStudents;