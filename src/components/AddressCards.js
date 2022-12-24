import React from 'react'
import {Row,Col} from 'react-bootstrap'
const AddressCards = () => {
  return (
    <>
        <div className="addresscards">
            <div className="myContainer">
                <Row className="addresscardsrow">
                    <Col lg={6}>
                        <div className="addresscard">
                            <div className="addresscardcontent">
                                <h3>Corporate Office</h3>
                                <p>13, Larmini Street Wari, Dhaka
                                88027115628, 01774977206
                                transport@britishstandardschool.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="addresscard">
                            <div className="addresscardcontent addresscardcontent2">
                                <h3>Route-1</h3>
                                <p>BSS WARI : Faridabad - Gandaria - Sutrapur - Narinda</p>
                                </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="addresscard">
                            <div className="addresscardcontent addresscardcontent2">
                                <h3>Route-2</h3>
                                <p>BSS WARI : Bagicha - Arambag - Basabo - Manda - Uttor Jatrabari - Gopibag</p>
                                </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="addresscard">
                            <div className="addresscardcontent addresscardcontent4">
                                <h3>Route-3</h3>
                                <p>BSS WARI : Rajendropur - Bariabazar - Dholaipar - Dayagonj</p>
                                </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default AddressCards