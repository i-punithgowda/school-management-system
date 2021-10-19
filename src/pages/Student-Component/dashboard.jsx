import React,{useState,useEffect} from 'react';
const Dashboard = (props) => {
   

    return (
        <div className="dashboardMainDiv">
           <div className="cards">
               <div className="card1">
               <br />
                   <label className="dashboardHeader">Name</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-user-alt"></i>
                   {props && <label style={{fontSize:"1.4rem"}}>{props.name}</label>}
                   </div>
               </div>
               <div className="card2">
               <br />
                   <label className="dashboardHeader">Mobile</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-mobile"></i>
                   {props && <label style={{fontSize:"1.4rem"}}>{props.phone}</label>}
                   </div>
               </div>
               <div className="card3">
               <br />
                   <label className="dashboardHeader">Roll No.</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-list-ul"></i>
                   {props && <label style={{fontSize:"1.4rem"}}>{props.roll}</label>}
                   </div>
               </div>
               <div className="card4">
               <br />
                   <label className="dashboardHeader">Class</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-graduation-cap"></i>
                   {props && <label style={{fontSize:"1.4rem"}}>{props.class}</label>}
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Dashboard;