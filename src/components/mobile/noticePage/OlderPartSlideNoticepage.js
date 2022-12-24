import React from 'react'
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import $ from 'jquery'
const OlderPartSlideNoticepage = (props) => {
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
      $(function noticehover() {
      
        let x,y;
        $(".noticebox").on('mouseenter', function(e) {
          x = e.pageX - $(this).offset().left;
          y = e.pageY - $(this).offset().top;
          $(this).find("span").css({
            top: y,
            left: x
          });
        });
        $(".noticebox").on('mouseout', function(e) {
          x = e.pageX - $(this).offset().left;
          y = e.pageY - $(this).offset().top;
          $(this).find("span").css({
            top: y,
            left: x
          });
        });
        
      });
  return (
    <>
         <div className="noticemobile" data-aos="fade-up" data-aos-duration="2000">
            <div className={props.title?"heading":"d-none"}>
                        <h4>{props.title?props.title:"Notice"}</h4>
                    </div>
                    <div className="mobilecontainer">
                  <h5>{props.subtitle}</h5>
                </div>
                <Slider {...settings}>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                <div className="noticeheading">
                        <h4><span>07</span> Nov, 2022 </h4>
                    </div>
                        <p>
                        The school will be off for National Cancer Awareness Day. <br/>
                        National Cancer Awareness Day is observed on November <br/>
                        7 in India. The day highlights
                        the significance of increased awareness
                        <br/> about cancer
                        </p>
                </div>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                <div className="noticeheading">
                        <h4><span>07</span> Nov, 2022 </h4>
                    </div>
                        <p>
                        The school will be off for National Cancer Awareness Day. <br/>
                        National Cancer Awareness Day is observed on November <br/>
                        7 in India. The day highlights
                        the significance of increased awareness
                        <br/> about cancer
                        </p>
                </div>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                <div className="noticeheading">
                        <h4><span>07</span> Nov, 2022 </h4>
                    </div>
                        <p>
                        The school will be off for National Cancer Awareness Day. <br/>
                        National Cancer Awareness Day is observed on November <br/>
                        7 in India. The day highlights
                        the significance of increased awareness
                        <br/> about cancer
                        </p>
                </div>
                
                   
                    </Slider>
            </div>
    </>
  )
}

export default OlderPartSlideNoticepage