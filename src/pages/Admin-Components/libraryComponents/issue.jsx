import react, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import Axios from 'axios';
import ImgIssue from '../../../images/bookissue.png'
const Issue = () => {
  const [title, setTitle] = useState('');
  const [sClass, setClass] = useState('');
  const [rollNo, setRollNo] = useState('');
  const[sName,setName] = useState('');
  const [bookName,setBookName] = useState('');
  const [copies,setCopies] = useState('');

  function handleClassSelect(e) {
    setClass(e);
    Axios.post('http://localhost:3001/select-books', {
      class: e,
    }).then((response) => {
      setTitle(response.data);
    })

    Axios.post('http://localhost:3001/fetch-rollNum', {
      class: e
    }).then((response) => {
      setRollNo(response.data);
    })

  }

  function handleIssue(){
  

if(sName==="" || bookName=== "" || rollNo===""){
  alert("Select student class , name , bookname!!")
}else{
  Axios.post('http://localhost:3001/issue-book',{
    sName:sName,
    bookName:bookName,
   class:sClass
  }).then((response)=>{
   if(response.data === false){
     alert('Unexpected error occured!!!');
     
   }else{
    alert('Book issued and data saved!!!')
    setBookName('');
    setClass('');
    setName('');
    setRollNo('');
    setTitle('');
    
   }
  })
}
  }

  return (
    <div className="issue-library-books">
      <h1 className="text-dark" style={{ fontWeight: 'bold', textAlign: 'center', marginTop: "10px" }}>Issue books</h1>
     
      <img src={ImgIssue} alt="imgIssue" style={{position: 'relative' , width:"150px",left:"40%"}} />
      <br /><br /><br />
      <div className="select-class" style={{marginLeft:"150px"}} >
        <DropdownButton id="dropdown-basic-button" title="Select Class" variant="success"  onSelect={handleClassSelect}  >
          <Dropdown.Item eventKey="1">1</Dropdown.Item>
          <Dropdown.Item eventKey="2">2</Dropdown.Item>
          <Dropdown.Item eventKey="3">3</Dropdown.Item>
          <Dropdown.Item eventKey="4">4</Dropdown.Item>
          <Dropdown.Item eventKey="5">5</Dropdown.Item>
          <Dropdown.Item eventKey="6">6</Dropdown.Item>
          <Dropdown.Item eventKey="7">7</Dropdown.Item>
          <Dropdown.Item eventKey="8">8</Dropdown.Item>
          <Dropdown.Item eventKey="9">9</Dropdown.Item>
          <Dropdown.Item eventKey="10">10</Dropdown.Item>
        </DropdownButton>
      </div>  
      <div className="select name" style={{ marginLeft: "350px" }} >
        <DropdownButton id="dropdown-basic-button" title="Select student" variant="warning"  onSelect={(e)=>setName(e)}>
          {rollNo && rollNo.map((r) => {
            return <Dropdown.Item key={r.name}  eventKey={r.name}>{r.name}</Dropdown.Item>
          })}
        </DropdownButton>
      </div> 
      <div className="selectBook" style={{position: "relative",left:"550px",bottom:"30px",zIndex:"1"}}>
        <DropdownButton id="dropdown-basic-button" title="Select book" variant="dark"  onSelect={(e)=>{
          setBookName(e);
          setCopies(e.title);
        }} >
          {title && title.map((t) => {
            return <Dropdown.Item key={t.title} title={t.copies}  eventKey={t.title}>{t.title}</Dropdown.Item>
          })}
        </DropdownButton>
      </div>

<div className="selectedData" style={{marginLeft:"300px",fontWeight: "bold",color:"#161616",fontSize:"1.3rem"}}>
  {sClass && <div>
    <label>Class : </label> <label>{sClass}</label>
  </div>}

{bookName && <div>
  <label>Book name : </label> <label>{bookName}</label>
</div>}

{sName && <div>
  <label>Student name : <label>{sName}</label></label>
</div>}
</div>
<br />
<Button variant="dark" style={{width:"200px",marginLeft:"300px"}} onClick={handleIssue}>Issue</Button>
    </div>
  );
}



export default Issue;