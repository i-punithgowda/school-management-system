import { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Axios from 'axios';

const Classroom = (props) => {
    let subject = props.subject;
    const [sClass, setClass] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [msg, setMessage] = useState('');
    const [link, setLink] = useState('');
    const [token, setToken] = useState("")
    const date=new Date();
    let timestamp=date.getTime();
    console.log(timestamp);
    const generateTokenNumber = () => {
        Axios.post('http://localhost:3001/get-token', {
        })
            .then((response) => {
                let tokNo =  parseInt(response.data.substr(5)) + 1;
                console.log(response.data);
                let tok='TKNCR'+tokNo 
                setToken(tok)
               console.log(token);
            });
    }

    useEffect(() => {
        generateTokenNumber();
    })



    function handleSelectType(e) {
        setType(e);
    }
   

    function handleSelect(e) {
        setClass(e);
        document.querySelector('.selectedClass').style = "display:block";
    }

    function handlePaste(e) {
        navigator.clipboard.readText()
        .then(text => {
        setLink(text);
        })
    }


    function handleClick() {
if(sClass==='' || title==='' || msg==='' || type==='' || link===''){
    alert('One or more fields are empty !!!!')
}else{
    Axios.post('http://localhost:3001/save-classroom-file',{
        class:sClass,
        title:title,
        msg:msg,
        type:type,
        link:link,
        date:timestamp,
        subject:subject,
        token:token
    }).then((response)=>{
        if(response.data===true){
            alert(`${type} has been sent to students`)
            setToken('');
            setClass('');
            setLink('');
            setMessage('')
            setTitle('');
            setType('');
            generateTokenNumber();
        }else{
            alert('Unexpected error occured!!!');
        }
    }
    )}
    }

    return (
        <div className="teacherClassroom" style={{marginTop:'100px'}}>
            <div className="classHeading">
                <h4 className="tkn-no" style={{color:'#f1f1f1',fontFamily:'nunito'}}>Token No. {token && <label>{token}</label>}</h4>
<div className="classroomDiv" style={{backgroundColor:'#161616',borderRadius:'4px',padding:'20px'}}>
                <h1 className="text-primary" style={{fontWeight:'bold',fontFamily:'nunito'}}>{subject} classroom</h1>
                <div className="containerClassroom" >
                <div className="selectClass">
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
                </div>
                <div className="selectedClass">
                    Class {sClass}
                </div>
            </div>
            <div className="fileinfo">
                <div className="inputBox">
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    <input type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={msg} />
                    <input type="text" id="pasteBox" placeholder="Paste file link here" onChange={(e) => setLink(e.target.value)} value={link} />
                    <i id="pasteData" className="fas fa-paste" onClick={handlePaste}></i>

                    <DropdownButton id="dropdown-basic-button" variant="danger" title="Type" onSelect={handleSelectType} >
                        <Dropdown.Item eventKey="Assignment">Assignment</Dropdown.Item>
                        <Dropdown.Item eventKey="Notes">Notes</Dropdown.Item>
                        <Dropdown.Item eventKey="Notes">Question papers</Dropdown.Item>
                    </DropdownButton> <br /> <br />
                </div>

                <div className="btn-File-save">
                    <button className="btn-danger" onClick={handleClick}>Save</button>
                </div>

            </div>
            </div>
            </div>
        </div>
    );
}

export default Classroom;