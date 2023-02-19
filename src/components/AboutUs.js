
import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    // data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000"

  return (
    <>
        <div className="myContainer">
        <div className="aboutus" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="headingdiv">
                <h3 className="appplybuttonother ">About Us</h3>

            </div>

            <Row className="aboutuscontent">
                <Col lg={4} md={6} className="text-center">
                    <img style={{width:"90%"}} src="./assets/images/About_Us.png" alt="about us" />
                </Col>
                <Col lg={8} md={6} className="aboutustext d-flex align-items-center">
                    <div className="flexwrap">
                    <p style={{marginBottom:"35px"}}>Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto [i.e.To Build a sound and safe path for our future citizen which will help them to achieve their aspirations. To prepare a standard through planning and evaluate analyse the actual with perfection.</p>
                    <p className="d-md-none d-lg-block">IT based teaching with the help of Ebook and Mylab. Teaching through Phonetics and Audiovisual Presentation
                    Lectures, Group Discussions, Class Orientation
                    Mock Test, Examination, Solves Class. Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto. <Link to="/aboutus">Read more</Link> </p>
                   
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="aboutustext2 d-md-block d-none d-lg-none">

                        <p>IT based teaching with the help of Ebook and Mylab. Teaching through Phonetics and Audiovisual Presentation
                        Lectures, Group Discussions, Class Orientation
                        Mock Test, Examination, Solves Class. Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto.</p>
                        
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    </>
  )
}

export default AboutUs