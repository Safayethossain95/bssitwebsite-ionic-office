import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
const AboutUs = () => {
  return (
    <>
        <div className="myContainer">
        <div className="aboutus">
            <h3>About Us</h3>

            <Row className="aboutuscontent">
                <Col lg={5} md={6} className="text-center">
                    <img  src="./assets/images/About_Us.png" alt="about us" />
                </Col>
                <Col lg={7} md={6} className="aboutustext">
                    <p>Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto [i.e.To Build a sound and safe path for our future citizen which will help them to achieve their aspirations. To prepare a standard through planning and evaluate analyse the actual with perfection.</p>
                    <p className="d-md-none d-lg-block">IT based teaching with the help of Ebook and Mylab. Teaching through Phonetics and Audiovisual Presentation
                        Lectures, Group Discussions, Class Orientation
                        Mock Test, Examination, Solves Class. Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto.</p>
                    <CommonButton displaynone="d-md-none d-lg-block" buttonTitle="Read More"/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="aboutustext2 d-md-block d-none d-lg-none">

                        <p>IT based teaching with the help of Ebook and Mylab. Teaching through Phonetics and Audiovisual Presentation
                        Lectures, Group Discussions, Class Orientation
                        Mock Test, Examination, Solves Class. Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto.</p>
                        <CommonButton displaynone="d-md-block d-none" buttonTitle="Read More"/>
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    </>
  )
}

export default AboutUs