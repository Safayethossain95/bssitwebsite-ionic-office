import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {MdEmail} from 'react-icons/md'
import {BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
import { usefullinkslist,inportantlinks,officeaddressesdata } from '../../utils/ComponentApi/FooterApi'
import { Link } from 'react-router-dom'
const FooterMobile = () => {
  return (
    <>
        
        <div className="footermobile">
            <div className="mobilecontainer">
                
                        <div className="footerlogocenter">  
                            <img src="./assets/images/logo/Footer_logo.png" alt="" />
                        </div>

                        <div className="useful_links">
                            <Row>
                                <Col xs={5}>
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
                                <Col xs={7}>
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
                                <div className="socialicons">
                                <div className="fthead">
                                            <h4 style={{marginBottom:"0"}}>Social Links</h4>
                                        </div>
                                    <div className="socialswrapper">
                                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                                        <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                                        <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
                                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </div>
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
                        <div className="brandicons">
                                    <Row>
                                        <Col xs={4} className="brandiconsdiv">
                                            <img src="./assets/images/bclogo.png" alt="bclogo.png" />
                                        </Col>
                                        <Col xs={4} className="brandiconsdiv text-center">
                                            <img src="./assets/images/edexcellogo.png" alt="" />
                                        </Col>
                                        <Col xs={4} className="brandiconsdiv text-end">
                                            <img src="./assets/images/BSSITlogo.png" alt="" />
                                        </Col>
                                    </Row>
                                </div> 
                        <div className="copyright">
                            <p>&copy; This website is copyrighted by BSSIT 2004 - 2022 </p>
                        </div>

            </div>
        </div>
        
        
    </>
  )
}

export default FooterMobile