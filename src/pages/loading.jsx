
import LoadImg from '../images/schoolLoad.png';
import {useState,useEffect} from 'react';
const Loading = () => {
    const [data,setData]=useState('');
    const [i,setI]=useState(0);
    let arrayObj=['Loading components','Loading Images','Starting database','Loading modules','Loading react-app']


    setInterval(()=>{
       if(i>=5){
        setI(4)
           }else{
        setI(i+1);
        setData(arrayObj[i]);
       }
    },700);


    return (
        <div className="loadingScreen" style={{width:"1600px", height:"790px",backgroundColor:"#7561e8"}}>
        <div className="loadImg" >
           <img src={LoadImg} alt="" />
           
        </div>
        <div class="linear-activity">
    <div class="indeterminate"></div>
</div>
<div className="loadingThings">
    {data && <label>{data}</label>}
</div>
        </div>
        
    );
}

export default Loading;

