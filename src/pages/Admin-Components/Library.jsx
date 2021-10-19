import React, { useState, useEffect } from 'react';
import Home from './libraryComponents/home';
import Add from './libraryComponents/add';
import Update from './libraryComponents/update';
import Issue from './libraryComponents/issue';
import Return from './libraryComponents/return';
import ViewBooks from './libraryComponents/view';
import Issued from './libraryComponents/issued';
import Returned from './libraryComponents/returned';
const Library = () => {
   
    const [state, setState] = useState('Home');
let menuStyle={
    background: "#eacda3",  
    background: "-webkit-linear-gradient(to right, #d6ae7b, #eacda3)", 
    background: "linear-gradient(to right, #d6ae7b, #eacda3)", 
    display:"inline-block",
    height:"500px",
    padding:"10px",
}

    return (
        <div className="libraryManagementSystem" style={{ width: "1000px", height: "500px"}}>
        <div className="menu-container" style={menuStyle}>
        <br /><br />
        <div className="menu" style={{marginTop:"100px"}}>
        
                <div className="ui secondary vertical pointing menu">
                    <a className={state === 'Home' ? "active item" : "item"} onClick={()=>setState('Home')} >
                        Home
                    </a>
                    <a className={state === 'Add' ? "active item" : "item"} onClick={()=>setState('Add')}>
                        Add books
                    </a>
                    <a className={state === 'Update' ? "active item" : "item"} onClick={()=>setState('Update')}>
                        Update books
                    </a>
                    <a className={state === 'Issue' ? "active item" : "item"} onClick={()=>setState("Issue")}>
                        Issue books
                    </a>
                    <a className={state === 'Return' ? "active item" : "item"} onClick={()=>setState('Return')}>
                        Return books
                    </a>
                    <a className={state === 'Books' ? "active item" : "item"} onClick={()=>setState('Books')}>
                        View books
                    </a>
                    <a className={state === 'Issued' ? "active item" : "item"} onClick={()=>setState('Issued')}>
                        Issued books
                    </a>
                    <a className={state === 'Returned' ? "active item" : "item"} onClick={()=>setState('Returned')}>
                        Returned books
                    </a>
                </div>
            </div>
        </div>
          <div className="library-container" style={{width:"800px",height:"500px",backgroundColor:"crimson",position:"absolute",top:"0%",left:"23%",boxShadow:"5px 5px 10px rgba(0,0,0,0.5)"}}>
            {state==='Home' && <Home /> }
            {state==='Add' && <Add /> }
            {state==='Update' && <Update /> }
            {state==='Issue' && <Issue /> }
            {state==='Return' && <Return /> }
            {state==='Books' && <ViewBooks /> }
            {state==='Issued' && <Issued /> }
            {state==='Returned' && <Returned /> }
          </div>

        </div>
    );
}

export default Library;
<h1>Library</h1>