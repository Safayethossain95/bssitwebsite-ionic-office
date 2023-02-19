import React,{useEffect,useState,ueRef} from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';

const Banner = () => {

  var settings = {
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade:true,
      autoplay:true,
      autoplaySpeed: 5000,
      loop:true,
      pauseOnHover:false
     
    };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div className="myContainer">
        <div className="mybanner" id="bntxinner">
        <Row>
            <Col lg={8} className="bannertext"  >

            <Slider  {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
              <div className="bntxinner" data-aos-delay="400" data-aos="fade-right"       data-aos-duration="2000">
                  <h3>Welcome to <br/> <p>Our First Slide</p>   </h3>
                  <p className="bannerdetailsp" style={{marginBottom:"36px"}}>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>
                </div> 
              <div className="bntxinner" data-aos-delay="400" data-aos="fade-right"       data-aos-duration="2000">
                  <h3>Hello <br/> <p>Second Slide</p>   </h3>
                  <p className="bannerdetailsp" style={{marginBottom:"36px"}}>Co-curricular activities fuel your learning by stimulating creative thought, improving your social and organizational skills, developing your interests and talents, and offering you the chance to switch off and do something.</p>
                </div> 
              <div className="bntxinner" data-aos-delay="400" data-aos="fade-right"       data-aos-duration="2000">
                  <h3>Hey <br/> <p>Third Slide</p>   </h3>
                  <p className="bannerdetailsp" style={{marginBottom:"36px"}}>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>
                </div> 

            </Slider>
               

                <div className="bannersmallboxwrapper">  
                <Slider  {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>                        
                 <Row>
                  <Col lg={12}>
                    <Row>
                    <Col lg={4} xs={12} className="bannersmallboxcenter " >
                    <div className='bannersmallbox' data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner2.png" alt="" />
                        <p><span>18+</span> Years Since Founded in 2004</p>
                    </div>                  
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                  <div className='bannersmallbox gap' data-aos-delay="500" data-aos="fade-up" data-aos-duration="2000">         
                      <img src="./assets/images/smallvectorbanner1.png" alt="" />
                      <p><span>1000+</span> Student from all over Dhaka city</p>
                  </div>
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox gap2' data-aos-delay="600" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner3.png" alt="" />
                        <p><span>400+</span> Teachers & Staff providing excellence</p>
                    </div>
                  </Col>
                    </Row>
                  </Col>
                  
                 </Row>
                 <Row>
                  <Col lg={12}>
                    <Row>
                    <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox' data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner2.png" alt="" />
                        <p><span>20+</span> Branches in Dhaka</p>
                    </div>                  
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                  <div className='bannersmallbox gap' data-aos-delay="500" data-aos="fade-up" data-aos-duration="2000">         
                      <img src="./assets/images/smallvectorbanner1.png" alt="" />
                      <p><span>5000+</span> Student from all over the country</p>
                  </div>
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox gap2' data-aos-delay="600" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner3.png" alt="" />
                        <p><span>300+</span> Teachers & Staff providing excellence</p>
                    </div>
                  </Col>
                    </Row>
                  </Col>
                  
                 </Row>
                 <Row>
                  <Col lg={12}>
                    <Row>
                    <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox' data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner2.png" alt="" />
                        <p><span>56+</span> Years Since Founded in 2004</p>
                    </div>                  
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                  <div className='bannersmallbox gap' data-aos-delay="500" data-aos="fade-up" data-aos-duration="2000">         
                      <img src="./assets/images/smallvectorbanner1.png" alt="" />
                      <p><span>1000+</span> Student from all over Dhaka city</p>
                  </div>
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter" >
                    <div className='bannersmallbox gap2' data-aos-delay="600" data-aos="fade-up" data-aos-duration="2000">         
                        <img src="./assets/images/smallvectorbanner3.png" alt="" />
                        <p><span>400+</span> Teachers & Staff providing excellence</p>
                    </div>
                  </Col>
                    </Row>
                  </Col>
                  
                 </Row>
                 </Slider> 
                </div>
            </Col>
            <Col lg={4} className="main_image">
                
                <Slider {...settings}  asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                    
                        <img src="./assets/images/hompagebannerimage/banner1.png" alt="main_image" />
                    
                    
                        <img src="./assets/images/hompagebannerimage/banner2.png" alt="main_image" />
                        
                        <img src="./assets/images/hompagebannerimage/banner3.png" alt="main_image" />
                    
                 
                    </Slider>
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