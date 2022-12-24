import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Wcuboxwithcontent from './subComponents/Wcuboxwithcontent'
const OurVisionAboutPageMb = () => {
  return (
    <div className="ourvisionpagemb">
        <div className="mobilecontainer">
        <div className="heading">
                    <h4>Our Vision</h4>
                <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>
                </div>
                <div className="wcucardsinourvision">
            <Row>
                <Col xs={6}>                
                    <Wcuboxwithcontent classChange='ourvisionmb' imgwidth="30px" imgsrc="./assets/images/mobile/redcardourvision1.png" mycontent="PHYSICALLY"/>
                </Col>
                <Col xs={6}>                
                    <Wcuboxwithcontent classChange='ourvisionmb' imgwidth="30px" imgsrc="./assets/images/mobile/redcardourvision2.png" mycontent="MENTALITY"/>
                </Col>
                <Col xs={6}>                
                    <Wcuboxwithcontent classChange='ourvisionmb' imgwidth="30px" imgsrc="./assets/images/mobile/redcardourvision3.png" mycontent="INTELLECTUALLY"/>
                </Col>
                <Col xs={6}>                
                    <Wcuboxwithcontent classChange='ourvisionmb' imgwidth="30px" imgsrc="./assets/images/mobile/redcardourvision4.png" mycontent="SPIRITUALLY"/>
                </Col>
            </Row>
        </div>
        </div>

        
    </div>
  )
}

export default OurVisionAboutPageMb