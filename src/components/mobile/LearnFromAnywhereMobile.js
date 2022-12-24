import React from 'react'
import {Row,Col} from 'react-bootstrap'
const LearnFromAnywhereMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="learnfromanywheremobile" data-aos="fade-up" data-aos-duration="2000">
                <img src="./assets/images/mobile/eventandnewsmobileimg.png" alt="" />
                <div className="heading">
                    <h4>Learn From Anywhere</h4>
                </div>
                <div className="paragraphmini">
                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>
                </div>
                <Row className="blackbuttons">
                            <Col xs={6} xl={6} lg={5} md={6} sm={6} className="text-right">
                                <div className="blackbutton ms-auto">
                                    <img src="./assets/images/applelogo.png" alt="" />
                                    <p>Download on the <br/> <span>App Store</span></p>
                                </div>
                            </Col>
                            <Col xs={6} xl={6} lg={5} md={6} sm={6}>
                                <div className="blackbutton blackbuttonlg2 me-auto">
                                    <img src="./assets/images/playstorelogo.png" alt="" />
                                    <p>Get it on <br/> <span>Google Play</span></p>
                                </div>
                            </Col>
                        </Row>
            </div>

        </div>
    </>
  )
}

export default LearnFromAnywhereMobile