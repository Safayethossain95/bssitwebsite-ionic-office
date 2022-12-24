import React from 'react'
import Wcuboxwithcontent from './subComponents/Wcuboxwithcontent';
import {Row,Col} from 'react-bootstrap';
const OurMethodAboutPageMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="ourmethodaboutpagemb">
                <div className="heading">
                    <h4>Our Method</h4>
                </div>
                <div className="ourmethodmbpara">
                    <p>Teaching the students to observe accurately, to think positively and truthfully, to speak correctly, and to write clearly, is the main motto [i.e.To Build a sound and safe path for our future citizen which will help them to achieve their aspirations]</p>
                </div>

                <Row className="ourmethodboxes">
                    <Col xs={6}>
                        <Wcuboxwithcontent imgsrc="./assets/images/mobile/methodpartaboutpageicon1.png" mycontent="To prepare a Standard through planning and evaluate analyse the actual with perfection"/>
                    </Col>
                    <Col xs={6}>
                        <Wcuboxwithcontent imgsrc="./assets/images/mobile/methodpartaboutpageicon2.png" mycontent="Teaching through Phonetics and Audiovisual Presentation"/>
                    </Col>
                    <Col xs={6}>
                        <Wcuboxwithcontent imgsrc="./assets/images/mobile/methodpartaboutpageicon3.png" mycontent="IT based teaching with the help of Ebook and Mylab"/>
                    </Col>
                    <Col xs={6}>
                        <Wcuboxwithcontent imgsrc="./assets/images/mobile/methodpartaboutpageicon4.png" mycontent="Lectures, Group Discussions, Class Orientation"/>
                    </Col>                                            
                    <Col xs={6} className="m-auto">
                        <Wcuboxwithcontent imgsrc="./assets/images/mobile/methodpartaboutpageicon5.png" mycontent="Mock Test, Examination, Solves Class "/>

                    </Col>                                            
                </Row>
            </div>
        </div>
    </>
  )
}

export default OurMethodAboutPageMobile