import React from 'react'
import {BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {Row,Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="myContainer">
                <div className="socialicons">
                    <div className="socialswrapper">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                        <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                        <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
                    </div>
                </div>
                <div className="contactinfo">
                    <h4 className="text-center">Contact address</h4>
                    <div className="cdetails text-center">
                    <p>+880 199999999999</p>
                    <p>contact@britishstandardschool.com</p>
                    <p>13 Larmini Street, wari, Dhaka, Bangladesh</p>

                    </div>
                </div>
                <div className="footersmall">
                    <Row>
                        <Col lg={3} className="footersmallleft">
                            <img src="./assets/images/bclogo.png" alt="bclogo" />
                            <img src="./assets/images/edexcellogo.png" alt="edexcellogo" />
                        </Col>
                        <Col lg={6} className="footersmallmiddle text-center">
                            <p>&copy; This website is copyrighted by BSSIT 2004 - 2022 </p>
                        </Col>
                        <Col lg={3} className="footersmallright">
                            <img src="./assets/images/BSSITlogo.png" alt="BSSITlogo" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer