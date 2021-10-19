import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Attendance = () => {
    const [roll, setRoll] = useState('');
    const [data, setData] = useState('');
    const [ttlClass, setTotal] = useState('');
    const [present, setPresent] = useState('');
    const [absent, setAbsent] = useState('');
    const [percent, setPercent] = useState('');




    function handleClick(e) {
        Axios.post('http://localhost:3001/fetch-student-attendance', {
            rollno: roll
        }).then((response) => {
           if(response.data===false){
               alert('Register number doesnt exists')
               setRoll('');
           }else{
            console.log(response);
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

            console.log('total classs : ' + response.data.length);
            console.log('present ' + Pcount)
            console.log('Absent ' + Acount);
            console.log(percentage);
           }
        })

    }

    return (
        <div className="adminAttendance">
            <h1 class="text-dark" style={{fontWeight:'bold'}}>Attendance details</h1>
            <div className="search">

                <div class="ui icon input">
                    <input type="text" placeholder="Register Number..." onChange={(e) => setRoll(e.target.value)} value={roll} />
                    <i class="inverted circular search link icon" onClick={(e) => handleClick(e)}></i>
                </div> <br /><br />
                <div className="curr">
                    <h2 className="text-warning" style={{fontWeight:"bold"}}>Current register number {roll && <span>{roll}</span> }</h2>
                </div>
                <div className="Admin-Attendance-data">
                    <div className="totalClass-Admin">
                        <label>Total Classes</label><br />
                        {ttlClass && <div className="attendanceData">
                            <i className="fas fa-chart-bar"></i>
                            <span>{ttlClass}</span>
                        </div>}
                    </div>
                    <div className="attendedClass-Admin">
                        <label>Present</label><br />
                        {present && <div className="attendanceData">
                            <i className="fas fa-female"></i>
                            <span>{present}</span>
                        </div>}
                    </div>

                    <div className="absent-Admin">
                        <label>Absent</label><br />
                        {absent && <div className="attendanceData">
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>{absent}</span>
                        </div>}
                    </div>
                    <div className="percentage-Admin">
                    <label>Percent</label><br />
                        {percent && <div className="attendanceData">
                            <i className="fas fa-percentage"></i>
                            <span>{percent}</span>
                        </div>}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Attendance;