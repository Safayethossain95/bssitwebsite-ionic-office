import React from 'react'
import HeadlineOfOtherPage from './subComponents/HeadlineOfOtherPage'
import {Row,Col} from 'react-bootstrap'
const TransportServiceAboutUsPage = () => {
  return (
    <>
        <div className="myContainer">
            <div className="transportserviceaboutpage" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                <HeadlineOfOtherPage headline="Transport Service"/>
                <Row>
                    <Col lg={6}>
                    <div className="subheadingandparagraph">
                        <h3>Our Facilities</h3>
                        
                            <div className="transportlist">
                                <ul>
                                    <li><p>1. A/C Micro Bus</p></li>
                                    <li><p>2. GPRS Tracking System</p></li>
                                    <li><p>3. Prepaid System (Pay according to the usage)</p></li>
                                    <li><p>4. Well Secured (Female staff available)</p></li>
                                    <li><p>5. Limited Seat</p></li>
                                </ul>
                            </div>
                           
                    </div>
                    </Col>
                    <Col lg={6} className="d-flex align-items-center">
                        <img className='w-100' src="./assets/images/transportimg.png" alt="transportimg.png" />
                    </Col>
                </Row>
            </div>
            
        </div>
    </>
  )
}

export default TransportServiceAboutUsPage