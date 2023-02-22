import React from 'react'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery'
import { oldernoticedata } from '../utils/NoticePageApi'
import { useNavigate } from 'react-router-dom'
const OlderNoticePartNoticePage = () => {
  let navigate = useNavigate()
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
        navigate(`/notice/older/${id}`)
      }
  return (
    <>
        <div className="oldernoticepartnoticepage">
            <div className="myContainerMini">
                
                <div className="subheadingandparagraph" data-aos-delay="600" data-aos="fade-in" data-aos-duration="1000">
                    <h3>Older</h3>                    
                </div>

                <Row className="noticecontent noticecontentolder">
                {
                      oldernoticedata.map((item,key)=>{
                        let trimmedString= item.paragraph.substr(0, 38)
                      return(
                        <div className="myContainermini">
                          <Col lg={12} md={12} key={key}>
                        <div className="noticebox hoverscale noticeboxleft upcoming" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000" onClick={()=>handleNoticeSinglePage(item.id)}>
                        <span></span>
                        <div className="flexwrap">
                        <div className="noticeheading">
                        <h4>{item.heading}</h4>
                            </div>
                                <p className='mainparagraph'>
                               
                                {trimmedString}...
                                </p>
                                <div className="lastrow d-flex">
                                <img src="./assets/images/icons/calfaded.png" alt="" /> 
                                <p>{item.publishdate}</p>

                                </div>
                        </div>
                        </div>
                      </Col>

                        </div>
                      )
                    })
                  }
                    
                </Row>
            </div>
        </div>
    </>
  )
}

export default OlderNoticePartNoticePage