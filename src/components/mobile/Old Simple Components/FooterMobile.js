import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {MdEmail} from 'react-icons/md'
import {BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
const FooterMobile = () => {
  return (
    <>
        
        <div className="footermobile">
            <div className="mobilecontainer">
                <div className="socialicons">
                            <div className="socialswrapper">
                                <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                                <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                                <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
                                <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
                            </div>
                        </div>
                        <div className="contactinfo">
                            
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
                                    <img src="./assets/images/BSSITlogo.png" alt="BSSITlogo" />
                                </Col>
                                <Col lg={6} className="footersmallmiddle text-center">
                                    <p>&copy; This website is copyrighted by BSSIT 2004 - 2022 </p>
                                </Col>
                               
                            </Row>
                        </div>

            </div>
        </div>
        
        
    </>
  )
}

export default FooterMobile