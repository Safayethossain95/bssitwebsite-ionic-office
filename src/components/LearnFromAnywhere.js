import React from 'react'
import {Row,Col} from 'react-bootstrap'
const LearnFromAnywhere = () => {
  return (
    <>
        <div className="myContainer">
            <div className="learnfaw">
                <Row>
                    <Col lg={7} xl={8} className="learnleftimg">
                        <img src="./assets/images/LearnFromAnywhere.png" alt="LearnFromAnywhere" />
                    </Col>
                    <Col lg={5} xl={4} className="learnright">
                        <h3>Learn From <br/> Anywhere</h3>
                        <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>
                        <Row className="blackbuttons">
                            <Col xl={6} lg={5} md={6} sm={6}>
                                <div className="blackbutton ms-auto">
                                    <img src="./assets/images/applelogo.png" alt="" />
                                    <p>Download on the <br/> <span>App Store</span></p>
                                </div>
                            </Col>
                            <Col xl={6} lg={5} md={6} sm={6}>
                                <div className="blackbutton blackbuttonlg2 me-auto">
                                    <img src="./assets/images/playstorelogo.png" alt="" />
                                    <p>Get it on <br/> <span>Google Play</span></p>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default LearnFromAnywhere