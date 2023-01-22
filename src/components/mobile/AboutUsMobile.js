import React from 'react'
import { Link } from 'react-router-dom'
const AboutUsMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="aboutuspartmobile" data-aos="fade-up" data-aos-duration="2000">
                <div className="myheading">
                    <h4 className='myappplybutton'>About Us</h4>
                </div>
                <div className="aboutuscontent">
                    <img src="./assets/images/mobile/AboutUs.png" alt="AboutUs.png" />
                    <p>Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto [i.e.To Build a sound and safe path for our future citizen which will help them to achieve their aspirations. To prepare a standard through planning and evaluate analyse the actual with perfection.
                    IT based teaching with the help of Ebook and Mylab. Teaching through Phonetics and Audiovisual Presentation
                    Lectures, Group Discussions, Class Orientation
                    Mock Test, Examination, Solves Class. Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto. <Link to="/aboutus">Read more</Link> 
                    </p>                        
                </div>

            </div>
        </div>
    </>
  )
}

export default AboutUsMobile