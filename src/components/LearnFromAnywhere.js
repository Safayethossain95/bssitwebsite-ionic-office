import React from 'react'
import {Row,Col} from 'react-bootstrap'
const LearnFromAnywhere = () => {
  return (
    <>
        <div className="myContainer">
            <div className="learnfaw" data-aos="fade-up" data-aos-duration="2000">
                <Row>
                    <Col lg={7} xl={8} className="learnleftimg">
                        <img src="./assets/images/LearnFromAnywhere.png" alt="LearnFromAnywhere" />
                    </Col>
                    <Col lg={5} xl={4} className="learnright">
                        <h3>Learn From <br/> Anywhere</h3>
                        <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>
                        <Row className="blackbuttons">
                            
                              
                                    <a href="https://www.google.com"><img src="./assets/images/google_play.png" alt="" /></a>
                               
                                    <a href="https://www.google.com"><img src="./assets/images/app_store.png" alt="" /></a>
                              
                          
                        </Row>
                        
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default LearnFromAnywhere