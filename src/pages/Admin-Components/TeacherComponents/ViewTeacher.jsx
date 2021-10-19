import Axios from 'axios';
import React,{useState,useEffect} from 'react';
const ViewTeachers = () => {
const [data,setData]=useState([]);
function fetchTeachers(){
    Axios.post('http://localhost:3001/view-all-teachers', 
    ).then((response) =>{
        if(response.data===false){
            alert('No teachers to display')
        }else{
            setData(response.data)
        }
    })
}

useEffect(() => {
fetchTeachers();
},[])

    return ( 

    <div className="tblTeacher">
    
    <table className="table table-dark table-borderless">
    <thead>                                                     
      <tr>
        <th className="col-xs-3">Name</th>
        <th className="col-xs-6">Subject</th>
        <th className="col-xs-6">Email</th>
        <th className="col-xs-6">Phone</th>
      </tr>
    </thead>
    {data && data.map((d)=>{
    return  (
        <tbody key={d.id}>
      <tr>
        <td className="col-xs-3">{d.name}</td>
        <td className="col-xs-6">{d.subject}</td>
        <td className="col-xs-6">{d.email}</td>
        <td className="col-xs-6">{d.phone}</td>
      </tr>


      </tbody>
    
    )
    })}
    
    </table>
    </div>
     );
}
 
export default ViewTeachers;