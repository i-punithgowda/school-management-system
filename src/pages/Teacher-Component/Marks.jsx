import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
const Marks = (props) => {
    const [sClass, setClass] = useState('');
    const [data, setData] = useState('');
    const [student, setStudent] = useState('');
    const [ttlMarks, setTtlMarks] = useState('');
    const [scored, setScored] = useState('');
    const [internalMarks, setInternalMarks] = useState('');
    const [exam, setExam] = useState('');
    let subject = props.subject;
    function handleSelect(e) {
        setClass(e);
        Axios.post('http://localhost:3001/get-students', {
            class: e
        }).then((response) => {
            if (response.data === false) {
                alert('Unexpected error occured!!')
            } else {
                setData(response.data)
            }
        })
    }

    function handleStudentSelect(e) {
        setStudent(e);
    }

    function handleExamSelect(e) {
        if (e === 'internals1' || e === 'internals2') {
            setExam(e);
            setTtlMarks(30);
        } else if (e === 'midterm' || e === 'final') {
            setExam(e);
            setTtlMarks(100);
        }
    }

    function handleScored(e) {
        if (exam === 'internals1' || exam === 'internals2') {
            if (e.target.value > 20) {
                alert('Enter valid marks')
                setScored('');
            } else {
                setScored(e.target.value);
            }
        } else if (exam === 'midterm' || exam === 'final') {
            if (e.target.value > 70) {
                alert('Enter valid marks')
                setScored('');
            } else {
                setScored(e.target.value);
            }
        }
    }

    function handleInternalMarks(e) {
        if (exam === 'internals1' || exam === 'internals2') {
            if (e.target.value > 10) {
                alert('Enter valid marks')
                setInternalMarks('');
            } else {
                setInternalMarks(e.target.value);
            }
        } else if (exam === 'midterm' || exam === 'final') {
            if (e.target.value > 30) {
                alert('Enter valid marks')
                setInternalMarks('');
            } else {
                setInternalMarks(e.target.value);
            }
        }
    }


    function handleClick() {
        if (sClass === '' || student === '' || exam === '' || ttlMarks === '' || scored === '' || internalMarks === '') {
            alert("Fill all fields!!")
        } else {
            let scoredTotal = parseInt(scored) + parseInt(internalMarks);
            Axios.post('http://localhost:3001/insert-marks', {
                class: sClass,
                name: student,
                exam: exam,
                totalMarks: ttlMarks,
                scored: scored,
                internalMarks: internalMarks,
                scoredTotal: scoredTotal,
                subject: subject
            }).then((response) => {
                if(response.data===true){
                    alert('Result saved');
             setClass('');
             setData('');
             setExam('');
             setInternalMarks('');
             setScored('');
             setStudent('');
             setTtlMarks('');
             scoredTotal='';
                }else{
                    alert('Unexpected error occured!');
                }
            })
        }

    }




    return (
        <div className="teacherMarks" style={{backgroundColor:'#161616',borderRadius:'4px',padding:'20px',width:'1200px',marginTop:'100px'}}>
            <h1 className="text-primary" style={{fontWeight:'bold',fontFamily:'nunito',textAlign:'center'}}>Internals/Exams Marks</h1>

            <div className="marks-container"> <br />
                <div className="selectClass" style={{ marginLeft: "40px" }}>
                    <DropdownButton id="dropdown-basic-button" variant="danger" title="Select Class" style={{ marginTop: "40px" }} onSelect={handleSelect}>
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

                    <DropdownButton id="dropdown-basic-button" title="Select student" variant="danger" style={{ marginLeft: "20px" }} onSelect={handleStudentSelect} >
                        {data && data.map((d) => {
                            return <Dropdown.Item eventKey={d.name} key={d.name}>{d.name}</Dropdown.Item>
                        })}
                    </DropdownButton>

                    <DropdownButton id="dropdown-basic-button" variant="danger" title="Select Exam/Internals" style={{ marginLeft: "20px" }} onSelect={handleExamSelect} >
                        <Dropdown.Item eventKey={"internals1"}>Internals 1</Dropdown.Item>
                        <Dropdown.Item eventKey={"internals2"}>Internals 2</Dropdown.Item>
                        <Dropdown.Item eventKey={"midterm"}>Mid-term</Dropdown.Item>
                        <Dropdown.Item eventKey={"final"}>Final exam</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="Total marks" disabled value={ttlMarks} style={{color:"black"}} />
                    <input type="text" placeholder="Marks scored" onChange={handleScored} value={scored} />
                    <input type="text" placeholder="Internal marks" onChange={handleInternalMarks} value={internalMarks} />
                </div> <br />
                <Button variant="danger" style={{ marginLeft: "250px" }} onClick={handleClick} >Save</Button>
            </div>
        </div>
    );
}

export default Marks;