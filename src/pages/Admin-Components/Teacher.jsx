import React from 'react';
import ViewTeachers from './TeacherComponents/ViewTeacher'
import AddTeacher from './TeacherComponents/AddTeacher'
import UpdateTeacher from './TeacherComponents/UpdateTeacher'
import DeleteTeacher from './TeacherComponents/DeleteTeacher'
import {useState} from 'react'

const Dashboard = () => {
    const [state, setState]=useState('');
    return ( 
        <div className="dashboardMainDiv">
           <div className="cards">
               <div className="card1" onClick={()=>setState('View')}>
               <br />
                   <label className="dashboardHeader">View All Teacher</label>
                   <br />
                   <div className="icons">
                   <i className="eye icon"></i>
                   </div>
               </div>
               <div className="card2" onClick={()=>setState('Add')}>
               <br />
                   <label className="dashboardHeader">Add Teacher</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-plus-circle"></i>
                   </div>
               </div>
               <div className="card3" onClick={()=>setState('Update')}>
               <br />
                   <label className="dashboardHeader">Update Teacher</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-edit"></i>
                   </div>
               </div>
               <div className="card4" onClick={()=>setState('Delete')}>
               <br />
                   <label className="dashboardHeader">Delete Teacher</label>
                   <br />
                   <div className="icons">
                   <i className="fas fa-trash"></i>
                   </div>
               </div>
           </div>
           <div className="Admin-Teacher-Components">
               {state==='View' && <ViewTeachers />}
               {state==='Add' && <AddTeacher />}
               {state==='Update' && <UpdateTeacher />}
               {state==='Delete' && <DeleteTeacher />}
           </div>
        </div>
     );
}
 
export default Dashboard;