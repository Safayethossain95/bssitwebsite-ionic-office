import React from 'react'
import Wcuboxwithcontent from './subComponents/Wcuboxwithcontent'
import {Row,Col} from 'react-bootstrap'
const OurObjectivesPartAboutpageMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="ourobjectivespartmb">
                <div className="heading">
                    <h4>Our Objectives</h4>
                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>
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
                </Row>
            </div>


        </div>
    </>
  )
}

export default OurObjectivesPartAboutpageMobile