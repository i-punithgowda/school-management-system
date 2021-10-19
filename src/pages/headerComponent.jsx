import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const HeaderComponent = () => {
const [state,setState]=useState('');
  let style1={
    color:"white",
    "fontWeight":"bold"
  }
    return ( 
        <div className="main">
        <div className="ui inverted segment menu" style={{margin:0}}>
          <div className="ui inverted secondary menu">
          <Link to="/" className={state==='Home' ? 'active item' : 'item'} onClick={()=>setState('Home')}>
              <span style={style1}>School Management</span> 
            </Link>
            <Link to="/"  className={state==='home' ? 'active item' : 'item'} onClick={()=>setState('home')}>
              Home
            </Link>
            <Link to="/AdminLogin" className={state==='admin' ? 'active item' : 'item'} onClick={()=>{
              setState('admin');
            }
            }>
            Admin
            </Link>
            <Link to="/TeacherLogin" className={state==='teacher' ? 'active item' : 'item'} onClick={()=>setState('teacher')}>
              Teacher
            </Link>
            <Link to="/StudentLogin" className={state==='student' ? 'active item' : 'item'} onClick={()=>setState('student')}>
             Student
            </Link>
            <Link to='/chatBot' className={state==='chat' ? 'active item' : 'item'} onClick={()=>setState('chat')}>
            Chat-Bot
            </Link>
            <Link to='/chat-join' className={state==='chat-room' ? 'active item' : 'item'} onClick={()=>setState('chat-room')}>
            Chat-room
            </Link>
            <Link to="/About" className={state==='about' ? 'active item' : 'item'} onClick={()=>setState('about')}>
            About
            </Link>
            
          </div>
        </div>
        </div>
     );
}
 
export default HeaderComponent;