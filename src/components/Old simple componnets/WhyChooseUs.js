import React from 'react'
import {Row,Col} from 'react-bootstrap'
import RedCardwithText from './subComponents/RedCardwithText'
import $ from 'jquery';
const WhyChooseUs = () => {

  // $(window).load(function(){
  //   $(".static").addClass("aa")
  // })
  return (
    <>
        <div className="myContainer">
          <div className="whychooseus">
              <h3>Why Choose Us</h3>
              <div className="wcuheadingp">
                <p>The decision to become an exceptional is a highly personal one, based on a number of factors that you must weigh for yourself. It's not a step to be taken lightly. We are different because</p>
              </div>

              <Row>
                    <Col lg={12}>
                    <div className="ourmethodcards">
                            <Row>
                                <Col lg={6}>                                                                                                                                 
                                    <RedCardwithText imgsrc="./assets/images/wcucardicon1.png" paragraph="Encourage contact between Students and Faculty"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/wcucardicon2.png" paragraph="Develop Reciprocity and cooperation among students"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/wcucardicon3.png" paragraph="Encourage Active Learning"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/wcucardicon4.png" paragraph="Give Prompt Feedback"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/wcucardicon5.png" paragraph="Emphasize time on task"/>
                                </Col>
                                <Col lg={6}>
                                    <RedCardwithText imgsrc="./assets/images/wcucardicon6.png" paragraph="Communicate high expectations"/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
              {/* <Row className="wcucontent wcugapup">
                <Col lg={4} md={6} sm={6}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon1.png" alt="" />
                    <p>Encourage contact between Students <br/> and Faculty</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon2.png" alt="" />
                    <p>Develop Reciprocity and cooperation <br/> among students</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                <div className="wcubox">
                    <img src="./assets/images/wcuicon3.png" alt="" />
                    <p>Encourage Active Learning</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} className="wcugapsmall">
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon4.png" alt="" />
                    <p>Encourage contact between Students <br/> and Faculty</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} className="wcugapsmall">
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon5.png" alt="" />
                    <p>Develop Reciprocity and cooperation <br/> among students</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} className="wcugapsmall">
                <div className="wcubox">
                    <img src="./assets/images/wcuicon6.png" alt="" />
                    <p>Encourage Active Learning</p>
                  </div>
                </Col>
              </Row> */}
              {/* <Row  className="wcucontent wcugapsmall">
                <Col lg={4}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon4.png" alt="" />
                    <p>Encourage contact between Students <br/> and Faculty</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon5.png" alt="" />
                    <p>Develop Reciprocity and cooperation <br/> among students</p>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="wcubox">
                    <img src="./assets/images/wcuicon6.png" alt="" />
                    <p>Encourage Active Learning</p>
                  </div>
                </Col>
              </Row> */}
          </div>
        </div>
    </>
  )
}

export default WhyChooseUs