import React from 'react'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery'
const OlderNoticePartNoticePage = () => {
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
        <div className="oldernoticepartnoticepage">
            <div className="myContainerMini">
                
                <div className="subheadingandparagraph">
                    <h3>Older</h3>                    
                </div>

                <Row className="noticecontent">
                    <Col lg={4} md={6}>
                        
                        <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                        <div className="noticeheading">
                                <h4><span>15</span> Nov, 2022 </h4>
                            </div>
                                <p>Campus 3 is going to celebrate "Fruit Festival" on this Thursday in our premises. Everyone of our BSS family is welcome to experience the event. We will be happy to welcome you all.</p>
                      
                        </div>
                        
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="noticebox noticeboxmiddle">
                        <span></span>
                            <div className="noticeheading">
                                <h4><span>14</span> Dec, 2022 </h4>
                            </div>
                                <p>Notice for Starter to Nursery
                                Respected Guardians,   
                                You are informed to come and see the T. Bks. and C/W Ex. Bks. of your ward's on Saturday,
                                 05 November 2022 instead of Saturday, 29 October 2022. 
                                Timing : 10:30 am to 12:00 pm</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="noticebox noticeboxright m-auto noticelastbox">
                        <span></span>
                            <div className="noticeheading">
                                <h4><span>16</span> Dec, 2022 </h4>
                            </div>
                                <p>Notice for Jr. KG & Sr. KG
                                Respected Guardians,
                                This is to inform you that we are going to celebrate "Breakfast Making Day" 
                                on Thursday, 29 September 2022. a and details of the event will be given in WhatsApp group. </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        
                        <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                        <div className="noticeheading">
                                <h4><span>15</span> Nov, 2022 </h4>
                            </div>
                                <p>Campus 3 is going to celebrate "Fruit Festival" on this Thursday in our premises. Everyone of our BSS family is welcome to experience the event. We will be happy to welcome you all.</p>
                      
                        </div>
                        
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="noticebox noticeboxmiddle">
                        <span></span>
                            <div className="noticeheading">
                                <h4><span>14</span> Dec, 2022 </h4>
                            </div>
                                <p>Notice for Starter to Nursery
                                Respected Guardians,   
                                You are informed to come and see the T. Bks. and C/W Ex. Bks. of your ward's on Saturday,
                                 05 November 2022 instead of Saturday, 29 October 2022. 
                                Timing : 10:30 am to 12:00 pm</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="noticebox noticeboxright m-auto noticelastbox">
                        <span></span>
                            <div className="noticeheading">
                                <h4><span>16</span> Dec, 2022 </h4>
                            </div>
                                <p>Notice for Jr. KG & Sr. KG
                                Respected Guardians,
                                This is to inform you that we are going to celebrate "Breakfast Making Day" 
                                on Thursday, 29 September 2022. a and details of the event will be given in WhatsApp group. </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        
                        <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                        <div className="noticeheading">
                                <h4><span>15</span> Nov, 2022 </h4>
                            </div>
                                <p>Campus 3 is going to celebrate "Fruit Festival" on this Thursday in our premises. Everyone of our BSS family is welcome to experience the event. We will be happy to welcome you all.</p>
                      
                        </div>
                        
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="noticebox noticeboxmiddle">
                        <span></span>
                            <div className="noticeheading">
                                <h4><span>14</span> Dec, 2022 </h4>
                            </div>
                                <p>Notice for Starter to Nursery
                                Respected Guardians,   
                                You are informed to come and see the T. Bks. and C/W Ex. Bks. of your ward's on Saturday,
                                 05 November 2022 instead of Saturday, 29 October 2022. 
                                Timing : 10:30 am to 12:00 pm</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="noticebox noticeboxright m-auto noticelastbox">
                        <span></span>
                            <div className="noticeheading">
                                <h4><span>16</span> Dec, 2022 </h4>
                            </div>
                                <p>Notice for Jr. KG & Sr. KG
                                Respected Guardians,
                                This is to inform you that we are going to celebrate "Breakfast Making Day" 
                                on Thursday, 29 September 2022. a and details of the event will be given in WhatsApp group. </p>
                        </div>
                    </Col>
                    
                </Row>
            </div>
        </div>
    </>
  )
}

export default OlderNoticePartNoticePage