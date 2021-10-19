import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';
const Dashboard = (props) => {
    const [data, setData] = useState('');
    const [State, setState] = useState(false);



    function fetchAppointments() {
        Axios.post('http://localhost:3001/fetch-appointments', {
            name: props.name
        }).then((response) => {
            if (response.data != false) {
                setData(response.data);
            } else {
                alert('No appointments found!!');
            }
        })
    }

    function handleAccept(e, email, date) {
        e.target.parentElement.remove();
        Axios.put('http://localhost:3001/accept-appointment', {
            date: date,
            email: email,
            teacher: props.name,

        }).then((response) => {
            if (response.data === true) {
                alert('Appointment fixed');
            } else {
                alert('Unexpected error occured!!!')
            }
        })
    }

    function handleReject(e, email,date) {
        e.target.parentElement.remove();
        Axios.delete(`http://localhost:3001/reject-appointment/${props.name}/${email}/${date}`).then((response) => {
            if (response.data === true) {
                alert('Appointment cancelled')
            } else {
                alert('Unexpected error occured!!!')
            }
        })
    }



    return (
        <div className="dashboardMainDiv" style={{ width: "1200px", height: "550px" }}>
            <div className="cards">
                <div className="card1">
                    <br />
                    <label className="dashboardHeader">Name</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-user-alt"></i>&nbsp;&nbsp;
                        {props && <label style={{ fontSize: "1.4rem" }}>{props.name}</label>}
                    </div>
                </div>
                <div className="card2">
                    <br />
                    <label className="dashboardHeader">Mobile</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-mobile"></i>
                        {props && <label style={{ fontSize: "1.4rem" }}>{props.phone}</label>}
                    </div>
                </div>
                <div className="card3">
                    <br />
                    <label className="dashboardHeader">Join Date</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-calendar-week"></i>
                        {props && <label style={{ fontSize: "1.4rem" }}>{props.date}</label>}
                    </div>
                </div>
                <div className="card4">
                    <br />
                    <label className="dashboardHeader">Salary</label>
                    <br />
                    <div className="icons">
                        <i className="fas fa-rupee-sign"></i>
                        {props && <label style={{ fontSize: "1.4rem" }}>{props.salary}</label>}
                    </div>
                </div>
            </div>

            <div className="appointmentButton" onClick={fetchAppointments} >
                <div class="ui labeled button" tabindex="0">
                    <div class="ui red button">
                        <i class="child icon"></i> View appointments
                    </div>

                    <a class="ui basic red left pointing label">
                        <i class="sort amount up icon"></i>
                    </a>
                </div>
            </div>


            <div className="alerts" style={{ position: "absolute", left: "0%", top: "40%" }}>
                {data && data.map((d) => {
                    return <div className="eachAlert" key={d.id} style={{ overflow: "auto" }}>

                        <Alert variant="danger" style={{ width: "200px" }} key={d.teacher} >{d.date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fas fa-user-check" onClick={(e) => handleAccept(e, d.email, d.date)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fas fa-user-times" onClick={(e) => handleReject(e, d.email,d.date)}></i>
                        </Alert>
                    </div>
                })}
            </div>

        </div>
    );
}

export default Dashboard;