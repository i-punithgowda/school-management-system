import React from 'react';
import {useState} from 'react'
import ViewStudents from './StudentComponent/ViewStudent'
import AddStudent from './StudentComponent/AddStudent'
import UpdateStudent from './StudentComponent/UpdateStudent'
import DeleteStudent from './StudentComponent/DeleteStudent'
const Dashboard = () => {
    const [state,setState]=useState('');
    return ( 
        <div className="dashboardMainDiv">
        <div className="cards">
            <div className="card1" onClick={()=>setState('View')}>
            <br />
                <label className="dashboardHeader">View All Student</label>
                <br />
                <div className="icons">
                <i class="eye icon"></i>
                </div>
            </div>
            <div className="card2" onClick={()=>setState('Add')}>
            <br />
                <label className="dashboardHeader">Add Student</label>
                <br />
                <div className="icons">
                <i class="fas fa-plus-circle"></i>
                </div>
            </div>
            <div className="card3" onClick={()=>setState('Update')}>
            <br />
                <label className="dashboardHeader">Update Student</label>
                <br />
                <div className="icons">
                <i className="fas fa-edit"></i>  
                </div>
            </div>
            <div className="card4" onClick={()=>setState('Delete')}>
            <br />
                <label className="dashboardHeader">Delete Student </label>
                <br />
                <div className="icons">
                <i className="fas fa-trash"></i>
                </div>
            </div>
            
        </div>
        <div className="Admin-studentComponents">
            {state==='View' && <ViewStudents />}
               {state==='Add' && <AddStudent />}
               {state==='Update' && <UpdateStudent />}
               {state==='Delete' && <DeleteStudent />}
               </div>
     </div>
     );
}
 
export default Dashboard;