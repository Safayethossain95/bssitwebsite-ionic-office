import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton';
const EventAndNews = () => {
  return (
    <>
        <div className="myContainer">
            <div className="eventandnews">
                <h3>Event & News</h3>
                <Row className="eventcardsall">
                  <Col lg={6} md={12} className="eventcardfirst">
                    <div className="eventcardwrapper">
                      <div className="eventcard firstoneev">
                        <div className="eventcardimg">
                          <img src="./assets/images/eventcardpic1.png" alt="eventcardpic" />
                          <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                        </div>
                        <div className="eventcardtext">
                          <h4>Class 3 students working on their <br/> science project</h4>
                          <p>To improve the human resources by educating  <br/> them on all round development of human being i.e. <br/> - development of all four levels</p>

                        </div>
                      </div>

                    </div>
                  </Col>
                  <Col lg={6} md={12}>
                    <Row>
                      <Col lg={6} md={6} className="evxsmgap">
                        <div className="eventcardwrapper">
                            <div className="eventcard">
                              <div className="eventcardimg">
                                <img src="./assets/images/eventcardpic2.png" alt="eventcardpic" />
                                <div className="evcardlabel smallleft"><p>OCT 07, 2022</p></div>
                              </div>
                              <div className="eventcardtext smallcard">
                                <p>PLAYGROUP and NURSERY celebrated “Red Day”</p>
                              </div>
                            </div>

                          </div>
                      </Col>
                      <Col lg={6} md={6} className="evxsmgap">
                          <div className="eventcardwrapper">
                            <div className="eventcard">
                              <div className="eventcardimg">
                                <img src="./assets/images/eventcardpic3.png" alt="eventcardpic" />
                                <div className="evcardlabel smallleft"><p>OCT 12, 2022</p></div>
                              </div>
                              <div className="eventcardtext smallcard">
                                <p>National Nature Summit organized by (NDNSC)</p>
                              </div>
                            </div>

                          </div>
                      </Col>
                      <Col lg={6} md={6} className="eventlowercardsmallgap">
                        <div className="eventcardwrapper">
                            <div className="eventcard">
                              <div className="eventcardimg">
                                <img src="./assets/images/eventcardpic4.png" alt="eventcardpic" />
                                <div className="evcardlabel smallleft"><p>SEP 29, 2022</p></div>
                              </div>
                              <div className="eventcardtext smallcard">
                                <p>Our Students enjoyed making Breakfast</p>
                              </div>
                            </div>

                          </div>
                      </Col>
                      <Col lg={6} md={6} className="eventlowercardsmallgap">
                          <div className="eventcardwrapper">
                            <div className="eventcard">
                              <div className="eventcardimg">
                                <img src="./assets/images/eventcardpic5.png" alt="eventcardpic" />
                                <div className="evcardlabel smallleft"><p>SEP 12, 2022</p></div>
                              </div>
                              <div className="eventcardtext smallcard">
                                <p>Senior KG enjoy their Art and Craft class</p>
                              </div>
                            </div>
                          </div>
                      </Col>
                    </Row>
                    
                  </Col>
                  <CommonButton eventbt="eventbt" buttonTitle="View All"/>
                </Row>
                
            </div>
        </div>
    </>
  )
}

export default EventAndNews