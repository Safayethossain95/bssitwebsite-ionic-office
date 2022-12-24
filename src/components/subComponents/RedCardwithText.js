import React from 'react'
import {Row,Col} from 'react-bootstrap'
const RedCardwithText = (props) => {
  return (
    <>
        <div className="redcardwithtext">
            <Row>
                <Col lg={3}>
                <div className="redcardleft">
                    <img src={props.imgsrc} alt="redcardaboutpage1" />
                </div>
                </Col>
                <Col lg={9}>
                    <div className="redcardright">
                        <p>{props.paragraph}
                        </p>
                    </div>

                </Col>
            </Row>
            
        </div>
    </>
  )
}

export default RedCardwithText