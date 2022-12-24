import React from 'react'
import {Row,Col} from 'react-bootstrap'
import RedCardwithText from './subComponents/RedCardwithText'
const OurObjectiveAboutUsPage = () => {
  return (
    <>
        <div className="ourobjectiveaboutus">
            <div className="myContainer">
            <div className="subheadingandparagraph">
                    <h3>Our Objectives</h3>
                    <Row>
                        <Col lg={8}>
                            <div className="ourmethodtext">
                                <p>
                                    To improve the human resources by educating them on all round development of human being i.e. - development of all four levels
                                </p>

                            </div>
                            
                        
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col lg={12}>
                    <div className="ourmethodcards">
                            <Row>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourobj1.png" paragraph="To create a congenial academic environment for the students"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourobj2.png" paragraph="To provide a specialized and high quality comprehensive education"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourobj3.png" paragraph="To improve the quality, talent and skills of individuals"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourobj4.png" paragraph="To provide International Standard Education in Bangladesh"/>
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

export default OurObjectiveAboutUsPage