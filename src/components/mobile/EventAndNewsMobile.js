import React from 'react'
import Slider from "react-slick";
import {FiArrowRight} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
const EventAndNewsMobile = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '18px',
      };
      var navigate = useNavigate()
      const handleViewall=()=>{
        navigate("/aboutus")
      }
  return (
    <>
        <div className="mobilecontainer2">
            <div className="eventandnewsmobile" data-aos="fade-up" data-aos-duration="2000">
                <div className="myheading">
                        <h4 className='myappplybutton'>Event & News</h4>
                    </div>

                   
                        <Slider {...settings}>
                            
                                <div className="eventcardwrapper">
                                <div className="eventcard ">
                                    <div className="eventcardimg2">
                                    <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                                    <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                                    </div>
                                    <div className="eventcardtext">
                                    <h4>Class 3 students working on their science project</h4>
                                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                                    </div>
                                </div>

                            
                            </div>
                       
                                <div className="eventcardwrapper">
                                <div className="eventcard ">
                                    <div className="eventcardimg2">
                                    <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                                    <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                                    </div>
                                    <div className="eventcardtext">
                                    <h4>Class 3 students working on their science project</h4>
                                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="eventcardwrapper">
                                <div className="eventcard ">
                                    <div className="eventcardimg2">
                                    <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                                    <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                                    </div>
                                    <div className="eventcardtext">
                                    <h4>Class 3 students working on their science project</h4>
                                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="eventcardwrapper eventcardwrapperlast">
                                <div className="eventcard ">
                                    <div className="carditemwrapper" onClick={handleViewall}>
                                    <div className="iconeventcard text-center">
                                        <FiArrowRight/>
                                    </div>
                                    <p>View All</p>
                                    </div>
                                </div>
                            </div>
                            
                            </Slider>
                        
            </div>
        </div>
    </>
  )
}

export default EventAndNewsMobile