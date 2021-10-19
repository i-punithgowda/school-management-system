import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Axios from 'axios'
const GeneralKnowledge = (props) => {
  let subject = 'General knowledge'
  let roll = props.roll
  let date = new Date();
  const [data, setData] = useState('');
  const [autoplay,setAutoplay]=useState(false);
  useEffect(() => {
    Axios.post('http://localhost:3001/fetch-classroom-subjectwise', {
      subject: subject,
      roll: roll
    }).then((response) => {
      if (response.data === false) {
        alert('Unexpected error occured!!')
      } else {
        setData(response.data)
        console.log(response.data)
      }
    })
  }, [])


  function uploadTime(timestamp) {
    let newDate = new Date(parseInt(timestamp));
    let hours = newDate.getHours()
    console.log(hours);
    let diff = date - parseInt(timestamp);
    let hrs = Math.floor(diff / 3600000)
    let days= Math.floor(diff/(1000 * 3600 * 24))

    if(hrs>24){
return days + 'd ago'
    }else{
      return hrs + 'h ago';
    }
   
  }

  

  return (
    <div className="subject-classroom">
      <Slide autoplay={autoplay}>
      {data && data.map((d)=>{
      return  <div className="each-fade" key={d.id} id="slider" >
          <div className="image-container">
          <div class="card" id="eachCard">
  <div class="card-body" >
  <h6 style={{float:"right"}}>{uploadTime(d.date)}</h6>
    <h5 class="card-title">{d.title}</h5> 
    <h6 class="card-subtitle mb-2 " style={{color:"teal",fontWeight:"bold"} }>{d.subject} {d.type}</h6><br />
    <p class="card-text">{d.message}</p> 
   <button class="ui black button"> <a href={d.filelink} target="_blank" style={{textDecoration:"none",color:"white"}}>View file</a></button>
  </div>
</div>
          </div>
        </div>
      })}
        
      </Slide>
    </div>
  );
}
export default GeneralKnowledge;