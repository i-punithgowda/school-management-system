import {useState,useEffect} from 'react';
import Axios from 'axios';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
const Appointment = (props) => {
   let email=props.previousStep.message
    const [data, setData] = useState('');
    const [date,setDate] = useState('');
    const [msg,setMessage] = useState('');
    function handleTSelect(e) {
      if(date===''){
        alert('Select your preferred date');
      }else{
        Axios.post('http://localhost:3001/insert-appointment',{
            teacher:e,
            date:date,
            email:email
        }).then((response) =>{
            if(response.data === true){
                setMessage('You will recieve email once teacher has accepted appointment');
            }else if(response.data === false){
                setMessage('Unexpected error, try again!!')
            }
        })
      }
    }

   function handleDate(e,date){
    let newDate = new Date(date.value);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let fullDate = `${day}-${month}-${year}`;
   setDate(fullDate);
    }
    
   useEffect(()=>{
       Axios.post('http://localhost:3001/fetchTeacherNames',)
       .then((response)=>{
 setData(response.data);
    
    })
   },[])

    return ( 
        <div className="setAppointment">
        <div className="selectTeacher">
        <div className="dtpAttendance">
                    <SemanticDatepicker onChange={handleDate} format="DD-MM-YYYY" />
                </div>

        <DropdownButton variant="dark" title="Select teacher" style={{ marginTop: "20px" }} onSelect={handleTSelect}>
                            {data && data.map((t)=>{
                               return <DropdownItem key={t.name} eventKey={t.name} >{t.name}</DropdownItem>
                            })}
                            </DropdownButton>
        </div> <br />
        {msg && <label style={{color:"#000",fontWeight:"bold"}}>{msg}</label>}
        </div>
     );
}
 
export default Appointment;