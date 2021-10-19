import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import English from './classroomComponents/English'
import Kannada from './classroomComponents/Kannada'
import Hindi from './classroomComponents/Hindi'
import Maths from './classroomComponents/Maths'
import Science from './classroomComponents/Science'
import Social from './classroomComponents/Social'
import GeneralKnowledge from './classroomComponents/Gk'
import PhysicalEducation from './classroomComponents/PE'
const Classroom = (props) => {
    let rollno = props.roll;
    const [state,setState]=useState('English');
    const [english,setEnglish]=useState('');
    const [kannada,setKannada]=useState('');
    const [hindi,setHindi]=useState('');
    const [maths,setMaths]=useState('');
    const [science,setScience]=useState('');
    const [social,setSocial]=useState('');
    const [generalKnowledge,setGeneralKnowledge]=useState('');
    const [physicalEducation,setPhysicalEducation]=useState('');

    useEffect(()=>{
Axios.post('http://localhost:3001/fetch-classroom-details',{
    rollno:rollno
}).then((response)=>{
   setEnglish(response.data[2].English);
   setKannada(response.data[3].Kannada);
   setHindi(response.data[4].Hindi);
   setMaths(response.data[5].Maths);
   setScience(response.data[0].Science);
   setSocial(response.data[6].Social);
   setGeneralKnowledge(response.data[1].GeneralKnowledge)
   setPhysicalEducation(response.data[7].PhysicalEducation);
   console.log(response);
})
    },[])

    return (
        <div className="student-classroom">
            <h1 className="text-dark" style={{fontWeight:'bold'}}>Classroom</h1>
            <div className="classRoomStudentMenu">
            <div className="ui vertical menu" style={{ marginTop: "60px" }}>
                <a className=" item" onClick={()=>setState('English')} >
                    English
    <div className="ui teal label">{english}</div>
                </a>
                <a className="item" onClick={()=>setState('Kannada')}>
                    Kannada
    <div className="ui teal label">{kannada}</div>
                </a>
                <a className="item" onClick={()=>setState('Hindi')}>
                    Hindi
    <div className="ui teal label">{hindi}</div>
                </a>
                <a className="item" onClick={()=>setState('Maths')}>
                    Maths
    <div className="ui teal label">{maths}</div>
                </a>
                <a className="item" onClick={()=>setState('Science')}>
                    Science
    <div className="ui teal label">{science}</div>
                </a>
                <a className="item" onClick={()=>setState('Social')}>
                    Social studies
    <div className="ui teal label">{social}</div>
                </a>
                <a className="item" onClick={()=>setState('GeneralKnowledge')}>
                    General Knowledge
    <div className="ui teal label">{generalKnowledge}</div>
                </a>
                <a className="item" onClick={()=>setState('PhysicalEducation')}>
                    Physical education
    <div className="ui teal label">{physicalEducation}</div>
                </a>

            </div>

            <div className="classroom-contents">
               {state=='English' && <English roll={rollno} /> }
               {state=='Kannada' && <Kannada roll={rollno} /> }
               {state=='Hindi' && <Hindi roll={rollno} /> }
               {state=='Maths' && <Maths roll={rollno} /> }
               {state=='Science' && <Science roll={rollno} /> }
               {state=='Social' && <Social roll={rollno} /> }
               {state=='GeneralKnowledge' && <GeneralKnowledge roll={rollno} /> }
               {state=='PhysicalEducation' && <PhysicalEducation roll={rollno} /> }
            </div>
        </div>
        </div>
    );
}

export default Classroom;