import React, { useState } from 'react';
import ImgRecieve from '../../../images/recieve.png'
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import Axios from 'axios';
const Return = () => {
  const [data, setData] = useState('');
  const [dataS, setDataS] = useState('');
  const [sClass, setSClass] = useState('');
  const [student, setStudent] = useState('');
  const [book, setBook] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [fine, setFine] = useState('');
  function handleClassSelect(e) {
    setDataS('')
    setIssueDate('');
    setDueDate('');
    setFine('');
    setSClass(e);
    Axios.post('http://localhost:3001/get-issue-book', {
      sClass: e
    }).then((response) => {
      if (response.data === false) {
        alert('Unexpected error occured!!!');
      } else {
        setData(response.data);

      }
    })
  }

  function handleStudentSelect(e) {
    setStudent(e);
    Axios.post('http://localhost:3001/fetch-issue-data', {
      sClass: sClass,
      sName: e
    }).then((response) => {
      if (response.data === false) {
        alert('Unexpected error occured!!!');
      } else {
        setDataS(response.data);
      }
    })
  }


  function handleBookSelect(e) {
    setBook(e);
    Axios.post('http://localhost:3001/fetch-isued-final', {
      sClass: sClass,
      sName: student,
      bookName: e
    }).then((response) => {
      if (response.data === false) {
        alert('Unexpected error occured!!!');
      } else {
        let issueTimeStamp = response.data[0].issue_date;
        let oldDate = new Date(parseInt(issueTimeStamp));
        let issue = `${oldDate.getDate()}-${oldDate.getMonth()}-${oldDate.getFullYear()}`
        setIssueDate(issue);

        let returnTimeStamp = response.data[0].due_date;
        let newDate = new Date(parseInt(returnTimeStamp));
        let returndt = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
        setDueDate(returndt);

        let diff = parseInt(returnTimeStamp) - parseInt(issueTimeStamp);
        if (diff > 0) {
          setFine("0");
        } else {
          setFine("10");
        }
      }
    })
  }


  function handleReturn() {
    Axios.post('http://localhost:3001/return-book', {
      bookName: book,
      studentName: student,
      class: sClass,
      fine: fine
    }).then((response) => {
      if (response.data === false) {
        alert('Unexpected error occured!!!');
      } else {
        alert('Book returned successfully!!');
        setFine('');
        setIssueDate('');
        setDueDate('');
        setStudent('');
        setSClass('');
        setData('');
        setDataS('');
        setBook('');
      }
    })
  }

  return (
    <div className="return-library-items" style={{ width: "100%", height: "100%" }}>
      <h1 className="text-dark" style={{ color: "#161616", fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>Return books</h1>
      <img src={ImgRecieve} style={{ width: "200px", position: "relative", left: "40%" }} />
      <br /><br />
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

      <div className="select name" style={{ marginLeft:"350px"}} >
        <DropdownButton id="dropdown-basic-button" title="Select student" variant="warning"  onSelect={(e) => handleStudentSelect(e)} >
          {data && data.map((d) => {
            return <Dropdown.Item key={d.id} eventKey={d.student_name}>{d.student_name}</Dropdown.Item>
          })}
        </DropdownButton>
      </div>
      <br />
      <div className="selectBook" style={{position: "relative",left:"550px",bottom:"50px",zIndex:"1"}} >
        <DropdownButton id="dropdown-basic-button" title="Select book" variant="dark"  onSelect={handleBookSelect}>
          {dataS && dataS.map((d) => {
            return <Dropdown.Item key={d.id} eventKey={d.book_name}>{d.book_name}</Dropdown.Item>
          })}
        </DropdownButton>
      </div>

      <div className="showData" style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#161616", marginLeft: "300px" }}>
        {issueDate && <div className="issueDt" >
          <label>Issued date : </label> &nbsp;&nbsp;
          <label>{issueDate}</label> </div>}

        {dueDate && <div className="dueDt">
          <label>Due date : </label>&nbsp;&nbsp;
          <label>{dueDate}</label></div>}

        {fine && <div className="fine">
          <label>Fine : </label>&nbsp;&nbsp;
          <label>{fine}</label></div>}

      </div>

      <Button variant="dark" style={{ marginLeft: "700px", marginTop: "10px" }} onClick={handleReturn}>Return</Button>

    </div>
  );
}

export default Return;