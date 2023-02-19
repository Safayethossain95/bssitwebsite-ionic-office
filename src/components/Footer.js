import React from 'react'
import {BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {Row,Col} from 'react-bootstrap'
import {usefullinkslist,inportantlinks} from '../utils/Homepage'
import { officeaddressesdata } from '../utils/ComponentApi/FooterApi'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="myContainer">
                {/* <div className="socialicons">
                    <div className="socialswrapper">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                        <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                        <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
                    </div>
                </div> */}
               <div className="firstrowoffooter">
                    <Row>
                        <Col lg={3}>
                            <img className='footerlogoclass' src="./assets/images/logo/footer_logo_big.png" alt="footer_logo.png" />
                        </Col>
                        <Col lg={3} style={{marginTop:"20px"}}>
                            <div className="footeritemslist">
                                <div className="fthead">
                                    <h4>Useful Links</h4>
                                </div>
                                <div className="ftitems">   
                                    <Row>
                                        {
                                            usefullinkslist.map((item,key)=>{
                                                return(
                                                    <Col lg={6} key={key}>
                                                        <Link to={item.link}>{item.listitem}</Link>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} style={{marginTop:"20px"}}>
                        <div className="footeritemslist">
                                <div className="fthead">
                                    <h4>Important Links</h4>
                                </div>
                                <div className="ftitems">   
                                    <Row>
                                        {
                                            inportantlinks.map((item,key)=>{
                                                return(
                                                    <Col lg={12} key={key}>
                                                        <Link to={item.link}>{item.listitem}</Link>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} style={{marginTop:"20px"}}>
                            <div className="footeritemslist">
                                <div className="fthead">
                                    <h4>
                                        Social Links
                                    </h4>
                                </div>
                                <div className="socialicons">
                                    <div className="socialswrapper">
                                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                                        <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                                        <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
                                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
                                    </div>
                                </div>
                                <div className="brandicons">
                                    <Row>
                                        <Col lg={4} className="brandiconsdiv">
                                            <img src="./assets/images/bclogo.png" alt="bclogo.png" />
                                        </Col>
                                        <Col lg={4} className="brandiconsdiv">
                                            <img src="./assets/images/edexcellogo.png" alt="" />
                                        </Col>
                                        <Col lg={4} className="brandiconsdiv">
                                            <img src="./assets/images/BSSITlogo.png" alt="" />
                                        </Col>
                                    </Row>
                                </div> 
                            </div>
                        </Col>
                    </Row>

                        <div className="officeaddresses">
                        <Row>
                            {
                                officeaddressesdata.map((item,key)=>{
                                    return(
                                        <Col lg={4} key={key}>
                                            <h5>{item.officename}</h5>
                                            <p><a target='_blank' href={`${item.maplink}`}>{item.address}</a></p>
                                            <p><a href={`tel:${item.tel}`}>TEL: {item.phone}</a> </p>
                                            <p>{item.email}</p>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        </div>
                        <div className="copyright">
                            <p>&copy; This website is copyrighted by BSSIT 2004 - 2022 </p>
                        </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Footer