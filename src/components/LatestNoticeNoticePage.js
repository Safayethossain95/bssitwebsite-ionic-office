import React,{useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery';
import { noticedata } from '../utils/NoticePageApi';
import { useNavigate } from 'react-router-dom';
const LatestNoticeNoticePage = () => {
   
      let navigate = useNavigate()
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

      const handleNoticeSinglePage=(id)=>{
          navigate(`/notice/latest/${id}`)
         
      }
  return (
    <>
        <div className="latestNoticepart" id="latestNoticepart">
            <div className="myContainerMini">
            <div className="subheadingandparagraph">
                    <h3>Latest</h3>
                    
                </div>
            <Row className="noticecontent">
              

                        
                    {
                      noticedata.map((item,key)=>{
                        let trimmedString= item.paragraph.substr(0, 38)
                      return(
                        <div className="myContainer">
                          <Col lg={12} md={12} key={key}>
                        <div className="noticebox noticeboxleft" onClick={()=>handleNoticeSinglePage(item.id)}>
                        <span></span>
                        <div className="flexwrap">
                        <div className="noticeheading">
                        <h4>{item.heading}</h4>
                            </div>
                                <p className='mainparagraph'>
                               
                                {trimmedString}...
                                </p>
                                <div className="lastrow d-flex">
                                <img src="./assets/images/icons/cal27.png" alt="" /> 
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

export default LatestNoticeNoticePage