import React from 'react'
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { noticedata } from '../../../utils/NoticePageApi';
import $ from 'jquery'
const LatestSliderNoticePage = (props) => {
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
      const handleNoticeSinglePage=(id)=>{
        navigate(`/notice/latest/${id}`)
       
    }
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
                    noticedata.map((item,key)=>{
                      let trimmedString= item.paragraph.substr(0, 38)
                      return(
                        <div className="noticebox noticeboxleft m-auto" onClick={()=>handleNoticeSinglePage(item.id)}>
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
                <div className="noticebox noticeboxlast m-auto">
                <span></span>
                <div className="ntcwrapper ">
                    <div className="carditemwrapper">
                    
                    <p style={{fontSize:"12px"}}>No more</p>
                    </div>
                </div> 
                </div>
                   
                    </Slider>
            </div>

    </>
  )
}

export default LatestSliderNoticePage