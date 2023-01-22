import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                            <Col xs={6} xl={6} lg={5} md={6} sm={6} className="text-end">
                                <a href="https://www.google.com"><img src="./assets/images/mobile/google_play.png" alt="" /></a>
                            </Col>
                            <Col xs={6} xl={6} lg={5} md={6} sm={6} className="text-start">
                                <a href="https://www.apple.com"><img src="./assets/images/mobile/app_store.png" alt="" /></a>
                            </Col>
                        </Row>
            </div>

        </div>
    </>
  )
}

export default LearnFromAnywhereMobile