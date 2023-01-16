import React from 'react'
import {Row,Col} from 'react-bootstrap'
import RedCardwithText from './subComponents/RedCardwithText'
import $ from 'jquery';
import {noticelist} from '../utils/Homepage'
import { useNavigate } from 'react-router-dom';
import { noticedata } from '../utils/NoticePageApi';
const WhyChooseUs = () => {

  // $(window).load(function(){
  //   $(".static").addClass("aa")
  // })
  let navigate = useNavigate()
  const handleNoticeClick=(id)=>{
    navigate(`/notice/latest/${id}`)
  }
  return (
    <>
        <div className="myContainer">
          <div className="whychooseus">
             <Row>
              <Col lg={7} className="whyleft">
                <h4>Why Choose Us</h4>
                <p>The decision to become an exceptional is a highly personal one, based on a number of factors that you must weigh for yourself. It's not a step to be taken lightly. We are different because</p>

                <Row>
                  <Col lg={6}>
                    <Row style={{height:"50px",marginBottom:"25px"}}>
                      <Col lg={2}>
                      <div className="whysmbox">
                        <img src="./assets/images/wcucardicon1.png" alt="" />
                      </div>
                      </Col>
                      <Col lg={10} className='innerp d-flex align-items-center'>
                      <p>Encourage contact between Students and Faculty</p>
                      </Col>
                      
                    </Row>
                    <Row style={{height:"50px",marginBottom:"25px"}}>
                      <Col lg={2}>
                      <div className="whysmbox">
                        <img src="./assets/images/wcucardicon3.png" alt="" />
                      </div>
                      </Col>
                      <Col lg={10} className='innerp d-flex align-items-center'>
                      <p>Encourage Active Learning</p>
                      </Col>
                      
                    </Row>
                    <Row style={{height:"50px",marginBottom:"25px"}}>
                      <Col lg={2}>
                      <div className="whysmbox">
                        <img src="./assets/images/wcucardicon5.png" alt="" />
                      </div>
                      </Col>
                      <Col lg={10} className='innerp d-flex align-items-center'>
                      <p>Emphasize time on task</p>
                      </Col>
                      
                    </Row>
                   
                      

                  </Col>
                  <Col lg={6}>
                  <Row style={{height:"50px",marginBottom:"25px"}}>
                      <Col lg={2}>
                      <div className="whysmbox">
                        <img src="./assets/images/wcucardicon2.png" alt="" />
                      </div>
                      </Col>
                      <Col lg={10} className='innerp d-flex align-items-center'>
                      <p>Develop Reciprocity and cooperation among students</p>
                      </Col>
                  </Row>
                  <Row style={{height:"50px",marginBottom:"25px"}}>
                      <Col lg={2}>
                      <div className="whysmbox">
                        <img src="./assets/images/wcucardicon4.png" alt="" />
                      </div>
                      </Col>
                      <Col lg={10} className='innerp d-flex align-items-center'>
                      <p>Give Prompt Feedback</p>
                      </Col>
                  </Row>
                  <Row >
                      <Col lg={2}>
                      <div className="whysmbox">
                        <img src="./assets/images/wcucardicon6.png" alt="" />
                      </div>
                      </Col>
                      <Col lg={10} className='innerp d-flex align-items-center'>
                      <p>Communicate high expectations
</p>
                      </Col>
                  </Row>
                  </Col>
                </Row>
              </Col>
              <Col lg={5}>
                <div className="whyright">
                <h4>Notice</h4>
                <div className="noticecase">
                  <div className="tablelikediv">
                    {
                      noticedata.map((item,key)=>{
                        let trimmedString= item.paragraph.substr(0, 38)
                        return(
                          <div className="tbdiv" onClick={()=>handleNoticeClick(item.id)} key={key}>
                             <div className="flexwrap">
                             <h5>{item.heading}</h5>
                             <p className='mainparagraph'>
                               
                               {trimmedString}...
                               {/* <span>...</span> */}
                               </p>
                             <div className="cald">
                              <img src="./assets/images/icons/cal.png" alt="" />
                              <p>{item.publishdate}</p>
                             </div>
                             </div>
                          </div>
                        )
                      })
                    }
                    
                    
                  </div>
                </div>
                </div>
              </Col>
             </Row>
          </div>
        </div>
    </>
  )
}

export default WhyChooseUs