import React from 'react';
import Image from '../images/404Man.jpg'
import {Link} from 'react-router-dom';
const Error = () => {
    return ( 
        <div className="containerError">
        <span className="Err404">404 
        </span>
        <span className="ntFd">Not Found!!!</span>
       
        <div className="errorMain">
           <img src={Image} alt="" />
        </div>
        <div className="errorDetails">
        <span className="whoops">Whoopsieee!! :(</span><br />
        <span className="msgErr">You have reached the end of this Universe , Go home and take rest :)</span>
       <Link to="/">
        <button className="btnhome404">Back to Home</button>
        </Link>
        </div>
        </div>
     );
}
 
export default Error;