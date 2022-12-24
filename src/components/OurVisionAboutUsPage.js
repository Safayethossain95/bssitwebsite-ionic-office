import React from 'react'
import {Row,Col} from 'react-bootstrap'
import RedCardwithText from './subComponents/RedCardwithText'
const OurVisionAboutUsPage = () => {
  return (
    <>
        <div className="myContainer">
            <div className="ourVisionAboutPage">
            <div className="subheadingandparagraph">
                    <h3>Our Vision</h3>
                    <Row>
                        <Col lg={8}>
                            <div className="ourmethodtext">
                                <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                            </div>
                            
                        
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col lg={12}>
                    <div className="ourmethodcards">
                            <Row>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourvision1.png" paragraph="PHYSICALLY"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourvision2.png" paragraph="MENTALLY"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourvision3.png" paragraph="INTELLECTUALLY"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/redcardourvision4.png" paragraph="SPIRITUALLY"/>
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

export default OurVisionAboutUsPage