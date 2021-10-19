import React from 'react';
import { useState, useEffect } from 'react'
import Image1 from '../images/slideImages/1.jpg'
import Image2 from '../images/slideImages/2.jpg'
import Image3 from '../images/slideImages/3.jpg'
import Image4 from '../images/slideImages/4.jpg'
import HeaderComponent from './headerComponent'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Tweets from './components/Tweet'
import Footer from './components/footer'
import Typist from 'react-text-typist';
import { Button } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom';
const Home = () => {
    const history=useHistory();
    const fadeImages = [Image1, Image2, Image3, Image4];
    const [quotes, setquote] = useState('');
    const [author, setAuthor] = useState('');
    let arrayOfQuotes = '';
    let quote = '';
    const fadeProperties = {
        duration: 1000,
        canSwipe: false,
    };

    function fetchQuotes() {
        fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                arrayOfQuotes = data;
                quote = arrayOfQuotes[Math.floor(Math.random() * 70)];
                console.log(quote);
                setquote(quote.text);
                setAuthor(quote.author);
            });
    }

    useEffect(() => {
        fetchQuotes();

    }, [])


    return (
        <div className="App">
            <HeaderComponent />
            <div className="mainHome" >
                <div className="head">
                    <div className="schoolDet">
                        <h1 style={{fontFamily:'nunito'}}>
                            <Typist sentences={['School Management System.', 'Welcome.']} loop={true} typingSpeed={250} pauseTime={2000} /></h1>
                    </div>
                </div>
                <div className="slide-container">
                    <Fade {...fadeProperties}>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={fadeImages[0]} />


                            </div>
                        </div>
                        <div className="each-fade">

                            <div className="image-container">

                                <img src={fadeImages[1]} />
                            </div>
                        </div>
                        <div className="each-fade">

                            <div className="image-container">
                                <img src={fadeImages[2]} />
                            </div>

                        </div>
                        <div className="each-fade">

                            <div className="image-container">
                                <img src={fadeImages[3]} />
                            </div>

                        </div>
                    </Fade>
                </div>
 <br /> <br /> <br />
<div className="btnAdmission">
<Button.Group>
    <Button color="orange" onClick={()=>history.push('/StudentSignup')}>Admission</Button>
    <Button.Or />
    <Button positive onClick={()=>history.push('/TeacherSignup')}>Apply</Button>
  </Button.Group>
</div>

                <div className="schoolData" >
                    <div className="motive" >
                       XYZ School at XYZ Location is  one of the most reputed schools in the city which is dedicated to impart 'Education Par Excellence' to quench the academic thirst of zealous students hailing from both urban and rural areas.
                  <br />  The School has excellent infrastructure facilities and other features to cater the needs of student community in the competitive era. It aims at holistic development of the students with equal emphasis on co-curricular activities in order to develop the talent and mental ability of the students.
                   <br /> Personal and public cleanliness, obedience, punctuality, regularity, participation in programmes in a spirit of co-operation, showing respect to elders, sympathy, modesty in behaviour, offering hospitality to guests, unreserved appreciation of what is good, these virtues are cultivated in our esteemed institution by experienced staff.
</div>
                </div>
                <br />
                <div className="quoteOftheDay">
                    <p>Quote of the day</p>
                    {quotes && <p>{quotes}</p>}
                    {author && <span className="quoteAuthor">-{author}</span>}
                </div>
                <br />
                <div className="topReviews">
                    <h1>Our top reviews <br /><br />
                        <i className="fas fa-hand-point-down hand"></i></h1>
                </div>
                <div className="tweets">
                    <Tweets />
                </div> <br />
            </div>
            <Footer />
        </div>
    );
}

export default Home;