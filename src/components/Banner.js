import React,{useEffect} from 'react'
import { Container,Col,Row } from 'react-bootstrap';

import $ from 'jquery';
const Banner = () => {
  useEffect(()=>{
   

    
  },[])
  return (
    <div className="myContainer">
        <div className="mybanner" id="bntxinner">
        <Row>
            <Col lg={9} className="bannertext"  >
              <div className="bntxinner" data-aos-delay="400" data-aos="fade-right" data-aos-duration="2000">
                <h3>Welcome to <br/> <p>British Standard School</p>   </h3>
                <p className="bannerdetailsp" style={{marginBottom:"36px"}}>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>

              </div>
                
                

                
                <div className="bannersmallboxwrapper">
                                  
                 <Row>
                  <Col lg={11}>
                    <Row>
                    <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox' data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner1.png" alt="" />
                        <p><span>1000+</span>"Student from all over the Dhaka city"</p>
                    </div>                  
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                  <div className='bannersmallbox gap' data-aos-delay="500" data-aos="fade-up" data-aos-duration="2000">         
                      <img src="./assets/images/smallvectorbanner2.png" alt="" />
                      <p><span>1000+</span>"Student from all over the Dhaka city"</p>
                  </div>
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox gap2' data-aos-delay="600" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner3.png" alt="" />
                        <p><span>1000+</span>"Student from all over the Dhaka city"</p>
                    </div>
                  </Col>
                    </Row>
                  </Col>
                  
                 </Row>
                </div>
            </Col>
            <Col lg={3} className="main_image">
                <img src="./assets/images/Main_Image.png" alt="main_image" />
                
            </Col>
        </Row>

        <div className="bannerbgimg">
                  <img src="./assets/images/BG_Logo_full.png" alt="" />

                  </div>
        </div>
    </div>
  )
}

export default Banner