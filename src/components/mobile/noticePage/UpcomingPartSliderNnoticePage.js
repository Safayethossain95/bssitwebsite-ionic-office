import React from 'react'
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { upcomingnoticedata } from '../../../utils/NoticePageApi';
import $ from 'jquery'
const UpcomingPartSliderNnoticePage = (props) => {
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
                
                {
                    upcomingnoticedata.map((item,key)=>{
                      let trimmedString= item.paragraph.substr(0, 38)
                      return(
                        <div className="noticebox noticeboxleft m-auto">
                        <span></span>
                        <div className="noticeheading">
                        <h4>{item.heading}</h4>
                            </div>
                                <p className='mainparagraph'>
                               
                                {trimmedString}...
                                </p>
                                <div className="lastrow d-flex">
                                <img src="./assets/images/icons/cal.png" alt="" /> 
                                <p>{item.publishdate}</p>
                                </div>
                        </div>
                      )
                    })
                  }
                   
                    </Slider>
            </div>
    </>
  )
}

export default UpcomingPartSliderNnoticePage