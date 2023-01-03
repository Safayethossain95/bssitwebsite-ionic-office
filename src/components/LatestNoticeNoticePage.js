import React,{useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery';

const LatestNoticeNoticePage = () => {
   
      useEffect(()=>{
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
      },[])
  return (
    <>
        <div className="latestNoticepart" id="latestNoticepart">
            <div className="myContainerMini">
            <div className="subheadingandparagraph">
                    <h3>Latest</h3>
                    
                </div>
            <Row className="noticecontent">
              

                    <Col lg={12} md={12}>
                        
                        <div className="noticebox noticeboxwide m-auto">
                            <span></span>
                        <div className="noticeheading">
                                <h4><span>07</span> Nov, 2022 </h4>
                            </div>
                                <p>Notice for Play:Diamond-I,  Nursery:Diamond-I, Ruby-I, & pearl-I 
                                Respected Guardians,
                                You are requested to attend a meeting with the AVP on Sunday, 21 August 2022. 
                                Agenda: Academic, Rules &amp; regulations
                                Time	: 10:00 AM to 11:00 AM. Venue	: Campus 4 [13, Larmini Street Wari]
                                Your presence will be highly appreciated.
                                Regards,
                                BSS</p>
                        </div>
                        
                    </Col>
              
                    
                </Row>
            </div>
        </div>
    </>
  )
}

export default LatestNoticeNoticePage