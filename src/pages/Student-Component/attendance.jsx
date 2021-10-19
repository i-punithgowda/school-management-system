import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


const Attendance = (props) => {
    const roll = props.roll
    const [data, setData] = useState('');
    const [ttlClass, setTotal] = useState('');
    const [present, setPresent] = useState('');
    const [absent, setAbsent] = useState('');
    const [percent, setPercent] = useState('');
    const [attendance, setAttendance] = useState('');
    useEffect(() => {
        Axios.post('http://localhost:3001/fetch-student-attendance', {
            rollno: roll
        }).then((response) => {
            if (response.data === false) {
                alert('No data found for this register number')
            } else {
                setData(response.data)
                setTotal(response.data.length);
                var Pcount = 0;
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].status === "Present") {
                        Pcount = Pcount + 1
                    }
                }
                setPresent(Pcount);
                var Acount = 0
                for (i = 0; i < response.data.length; i++) {
                    if (response.data[i].status === "Absent") {
                        Acount = Acount + 1;
                    }
                }
                setAbsent(Acount)
                var percentage = (Pcount * 100) / response.data.length;
                setPercent(Math.floor(percentage));
            }
        })
    }, [])


    function handleDate(e, date) {
        setAttendance('');
        let newDate = new Date(date.value);
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let fullDate = `${day}-${month}-${year}`
        Axios.post('http://localhost:3001/get-attendance-by-date', {
            roll: roll,
            date: fullDate
        }).then((response) => {
            if (response.data === false) {
                alert('No data found for the entered date')
            } else {
                setAttendance(response.data);
            }
        })

    }


    return (
        <div className="studentAttendance">
            <div className="attendance-heading">
                <h1 className="text-dark" style={{fontWeight:'bold'}}>Attendance</h1>
            </div>

            <div className="tblStudent-attendance">

                <div className="totalClass">
                    {ttlClass && <div className="attendanceData">
                        <label>Total Classes</label> <br />
                        <i className="fas fa-chart-bar"></i>
                        <label>{ttlClass}</label>
                    </div>}
                </div>
                <div className="present">
                    {present && <div className="attendanceData">
                        <label>Attended</label> <br />
                        <i className="fas fa-female"></i>
                        <label>{present}</label>
                    </div>}
                </div>

                <div className="absent">
                    {absent && <div className="attendanceData">
                        <label>Absent</label> <br />
                        <i className="fas fa-exclamation-triangle"></i>
                        <span>{absent}</span>
                    </div>}
                </div>

                <div className="percentage">
                    {percent && <div className="attendanceData">
                        <label>Percentage</label>  <br />
                        <i className="fas fa-percentage"></i>
                        <label>{percent}</label>
                    </div>
                    }
                </div>

            </div>
            <div className="viewByDate">
                <h3 className="text-dark">View by date</h3>
                <div className="dtpAttendance">
                    <SemanticDatepicker onChange={handleDate} format="DD-MM-YYYY" />
                </div>
                <br />
                <div className="tblSAttendance">
                    <table class="table table-borderless table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        {attendance && attendance.map((att) => {
                            return <tbody>
                                <tr>
                                    <td>{att.date}</td>
                                    <td>{att.subject}</td>
                                    <td>{att.status}</td>
                                </tr>
                            </tbody>
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Attendance;