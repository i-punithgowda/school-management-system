import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import StudentApprove from './dashboardComponents/studentApprove';
import TeacherApprove from './dashboardComponents/teacherApprove';
const Dashboard = () => {
    const [state, setState] = useState('');
    const [ttlTeacher, setTeacher] = useState('');
    const [ttlStudent, setStudent] = useState('');
    const [pendingTeacher, setPendingTeacher] = useState('');
    const [pendingStudent, setPendingStudent] = useState('');

    useEffect(() => {
        fetchDetails()
    }, [])
setInterval(fetchDetails,5000);

function fetchDetails(){
    Axios.post('http://localhost:3001/fetch-all-details', {
        }).then((response) => {
            setTeacher(response.data[0].teacher_total);
            setStudent(response.data[1].student_total);
            setPendingTeacher(response.data[2].teacher_pending);
            setPendingStudent(response.data[3].student_pending);
        })
}


    function handleTeacherClick() {
        setState('Teacher')
    }
    function handleStudentClick() {
        setState('Student')
    }


    return (
        <div className="dashboardMainDiv">
            <div className="cards">
                <div className="card1">
                    <br />
                    <label className="dashboardHeader">Total Teachers</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-chalkboard-teacher"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {ttlTeacher && <label>{ttlTeacher}</label>}
                    </div>
                </div>
                <div className="card2">
                    <br />
                    <label className="dashboardHeader">Total Students</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-user-graduate"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   {ttlStudent && <label>{ttlStudent}</label>}
                    </div>
                </div>
                <div className="card3" onClick={handleTeacherClick}>
                    <br />
                    <label className="dashboardHeader">Approve Teacher</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-check-circle"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   {pendingTeacher && <label>{pendingTeacher}</label>}
                    </div>
                </div>
                <div className="card4" onClick={handleStudentClick}>
                    <br />
                    <label className="dashboardHeader">Approve Student</label>
                    <br />
                    <div className="icons">
                        <i className="far fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   {pendingStudent && <label>{pendingStudent}</label>}
                    </div>
                </div>
            </div>
            <div className="pendingCards">
            {state === "Teacher" && <TeacherApprove />}
            {state === "Student" && <StudentApprove />}
            </div>
            
        </div>
    );
}

export default Dashboard;