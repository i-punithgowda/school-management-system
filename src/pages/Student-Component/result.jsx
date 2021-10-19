import { Dropdown, DropdownButton } from 'react-bootstrap';
import Axios from 'axios';
import {useState} from 'react';
const Result = (props) => {
   let Sclass=props.class;
   let name=props.name;
   const [data,setData]=useState('');
function handleSelect(e){
Axios.post('http://localhost:3001/get-student-result',{
    class: Sclass,
    name: name,
    exam:e
}).then((response)=>{
   if(response.data === false){
       alert('Unexpected error occured');
   }else if(response.data.length>0){
       setData(response.data);
   }else{
       alert('No data has been uploaded for selected exam / the exam hasnt happened yet!');
       setData('');
   }
})
}

    return (
        <div className="studentResult">
            <h1 className="text-dark" style={{fontWeight:'bold'}}>Student result</h1>
            <br />
           <div className="selectExam">
           <DropdownButton id="dropdown-basic-button" variant="danger" title="Select Exam/Internals" style={{ marginLeft: "20px" }} onSelect={handleSelect} >
                        <Dropdown.Item eventKey={"internals1"}>Internals 1</Dropdown.Item>
                        <Dropdown.Item eventKey={"internals2"}>Internals 2</Dropdown.Item>
                        <Dropdown.Item eventKey={"midterm"}>Mid-term</Dropdown.Item>
                        <Dropdown.Item eventKey={"final"}>Final exam</Dropdown.Item>
                    </DropdownButton>
           </div>
<br />
           <div className="resultTbl">
           <table class="table table-borderless table-dark">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Total Marks</th>
      <th scope="col">Marks scored</th>
      <th scope="col">Internal marks</th>
      <th scope="col">Total marks</th>
    </tr>
  </thead>
  <tbody>
   {data && data.map((d)=>{
       return <tr key={d.id}>
      <td>{d.subject}</td>
      <td>{d.ttlMarks}</td>
      <td>{d.scored}</td>
      <td>{d.internal_marks}</td>
      <td>{d.total_scored}</td>
    </tr>
   
   })}
  </tbody>
</table>
           </div>
        </div>
      );
}
 
export default Result;