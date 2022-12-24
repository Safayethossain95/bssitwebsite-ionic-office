import React from 'react'
import {Row,Col} from 'react-bootstrap'
import RedCardwithText from './subComponents/RedCardwithText'
const OurMethodAboutPage = () => {
  return (
    <>
        <div className="ourmethodaboutpage">
            <div className="myContainer">
                <div className="subheadingandparagraph">
                    <h3>Our Method</h3>
                    <Row>
                        <Col lg={8}>
                            <div className="ourmethodtext">
                                <p>Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto [i.e.To Build a sound and safe path for our future citizen which will help them to achieve their aspirations</p>

                            </div>
                            
                        
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col lg={12}>
                    <div className="ourmethodcards">
                            <Row>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardaboutpage1.png" paragraph="To prepare a Standard through planning and evaluate analyse the actual with perfection"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardaboutpage2.png" paragraph="IT based teaching with the help of Ebook and Mylab"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardaboutpage3.png" paragraph="Teaching through Phonetics and Audiovisual Presentation"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardaboutpage4.png" paragraph="Lectures, Group Discussions, Class Orientation"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardaboutpage5.png" paragraph="Mock Test, Examination, Solves Class "/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default OurMethodAboutPage