import React from 'react'
import {Row,Col} from 'react-bootstrap'
const OurMissionAboutUs = () => {
  return (
    <>
        <div className="myContainer">
            <div className="ourmissionaboutus" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                <Row className="ourmissionaboutuscontent">
                    <Col lg={4} md={6} className="text-center">
                        <img src="./assets/images/ourmissionaboutus.png" alt="about us" />
                    </Col>
                    <Col lg={8} md={6} className="d-flex align-items-center">
                        <div className="ourmissionaboutustext">
                            <h3>Our Mission</h3>
                            <p>Let us make every child by giving them material education, and spiritual education.
                            To develop every individual to BUILD A NATION THROUGH EDUCATION. It is our approach to prepare our students to excel and to give something back to our noble profession and society. We attempt to develop our students for not only professional life but their practical life too. So, come and visit us and learn about our school, and allow us to bring the best out of each student.</p>
                        </div>

                       
                    </Col>
                </Row>
              
            </div>
        </div>
    </>
  )
}

export default OurMissionAboutUs