import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Wcuboxwithcontent from '../mobile/subComponents/Wcuboxwithcontent'
const WhyChooseUSMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="whychooseusmobile" data-aos="fade-up" data-aos-duration="2000">
            <div className="heading">
                    <h4>Why Choose Us</h4>
                </div>
            <div className="wcucontent">
                <p>The decision to become an exceptional is a highly personal one, based on a number of factors that you must weigh for yourself. It's not a step to be taken lightly. We are different because</p>
            </div>

            <Row className="wcuboxesgap">
                <Col xs={6}>
                    <Wcuboxwithcontent imgsrc="./assets/images/mobile/wcucardicon1.png" imgwidth="38px" mycontent="Encourage contact between Students and Faculty"/>
                </Col>
                <Col xs={6}>
                    <Wcuboxwithcontent imgsrc="./assets/images/mobile/wcucardicon2.png" imgwidth="25px" mycontent="Develop Reciprocity and cooperation among students"/>
                </Col>
                <Col xs={6}>
                    <Wcuboxwithcontent imgsrc="./assets/images/mobile/wcucardicon6.png" imgwidth="25px" mycontent="Communicate high expectations"/>
                </Col>
                <Col xs={6}>
                    <Wcuboxwithcontent imgsrc="./assets/images/mobile/wcucardicon3.png" imgwidth="25px" mycontent="Encourage Active Learning"/>
                </Col>
                <Col xs={6}>
                    <Wcuboxwithcontent imgsrc="./assets/images/mobile/wcucardicon4.png" imgwidth="25px" mycontent="Give Prompt Feedback"/>
                </Col>
                <Col xs={6}>
                    <Wcuboxwithcontent imgsrc="./assets/images/mobile/wcucardicon5.png" imgwidth="25px" mycontent="Emphasize time on task"/>
                </Col>
            </Row>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUSMobile