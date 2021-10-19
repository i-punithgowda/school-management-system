import React from 'react';
import HeaderComponent from './headerComponent'
import Image from '../images/school.jpg'
const About = () => {
    return (
        <div className="main" style={{width:'100%',height:'790px'}}>
            <HeaderComponent />
            <div className="aboutMain">
                <div className="heading">
                    <h1>About us </h1>
                                   </div>
                                   <div className="imageAbout">
                        <img src={Image} alt=""  />
                    </div>
                    <div className="details">
                    <h1>We are XYZ School</h1><br />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore, ab perferendis, nobis natus suscipit, nulla porro cupiditate eius cum quasi voluptas itaque. Aliquid molestiae doloremque vero iure, obcaecati excepturi.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore, ab perferendis, nobis natus suscipit, nulla porro cupiditate eius cum quasi voluptas itaque. Aliquid molestiae doloremque vero iure, obcaecati excepturi.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore, ab perferendis, nobis natus suscipit, nulla porro cupiditate eius cum quasi voluptas itaque. Aliquid molestiae doloremque vero iure, obcaecati excepturi.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore, ab perferendis, nobis natus suscipit, nulla porro cupiditate eius cum quasi voluptas itaque. Aliquid molestiae doloremque vero iure, obcaecati excepturi.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore, ab perferendis, nobis natus suscipit, nulla porro cupiditate eius cum quasi voluptas itaque. Aliquid molestiae doloremque vero iure, obcaecati excepturi.</p>

               </div>
            </div>
        </div>
    );
}

export default About;