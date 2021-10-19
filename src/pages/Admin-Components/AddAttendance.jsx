import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Axios from 'axios';
const AddAttendance = () => {
    const [subject, setSubject] = useState('');
    const [data, setData] = useState('');
    const [sClass, setClass] = useState('');
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateToday = `${day}-${month}-${year}`;
    //console.log(dateToday);
    function handleSelect(e) {
        document.querySelector('.containerAttendance').style.display ="inline-block";
        Axios.post('http://localhost:3001/fetch-fees', {
            class: e
        }).then((response) => {
            setData(response.data);
        })
        setClass(e);
    }

    function handleSelectSubject(e) {
        setSubject(e)
    }


    function handlePresent(e) {
        if (subject === '') {
            alert('Select subject')
        } else {
            Axios.post('http://localhost:3001/save-attendance', {
                date: dateToday,
                class: sClass,
                rollno: e.target.parentElement.id,
                status: "Present",
                subject: subject
            }).then((response) => {
                if (response.data === true) {
                } else {
                    alert('Unexpected error occured!!')
                }

            })
        }

    }

    function handleAbsent(e) {
        if (subject === '') {
            alert('Select subject')
        } else {
            Axios.post('http://localhost:3001/save-attendance', {
                date: dateToday,
                class: sClass,
                rollno: e.target.parentElement.id,
                status: "Absent",
                subject: subject
            }).then((response) => {
                if (response.data === true) {
                } else {
                    alert('Unexpected error occured!!')
                }
            })
        }

    }

function handleSubmit(e){
console.log(e.target.parentElement);
e.target.parentElement.style.display="none";
alert('Attendance saved')
}

    return (
        <div className="teacherAttendance">
            <h1 class="text-dark" style={{fontWeight:'bold'}}>Student Attendance</h1>
            <div className="selectTags">
                <div className="selectClass">
                    <DropdownButton id="dropdown-basic-button" title="Select Class" variant="warning" onSelect={(e) => handleSelect(e)}>
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
                </div> &nbsp;&nbsp;&nbsp;
            <div className="selectSubject">
                    <DropdownButton id="dropdown-basic-button" title="Select subject" variant="warning" onSelect={handleSelectSubject}>
                        <Dropdown.Item eventKey="English">English</Dropdown.Item>
                        <Dropdown.Item eventKey="Kannada">Kannada</Dropdown.Item>
                        <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
                        <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                        <Dropdown.Item eventKey="Science">Science</Dropdown.Item>
                        <Dropdown.Item eventKey="Social">Social</Dropdown.Item>
                        <Dropdown.Item eventKey="General knowledge">General Knowledge</Dropdown.Item>
                        <Dropdown.Item eventKey="Physical Education">Physical Education</Dropdown.Item>
                    </DropdownButton>
                </div> <br />
            </div>
            <div className="containerAttendance">
            <div className="attendanceTable">
                <table id="tblAttendance" className="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {data && data.map((d) => {
                        return <tbody key={d.id}>
                            <tr>
                                <td>{d.name}</td>
                                <td id={d.rollno}>
                                    <button id="present" className="btn btn-success" onClick={handlePresent}>Present</button>
                                    <button id="absent" className="btn btn-danger" onClick={handleAbsent} >Absent</button>
                                </td>
                            </tr>
                        </tbody>
                    })}
                </table>
              
            </div>
            <br />
            <button className="btn btn-danger" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );


}

export default AddAttendance;