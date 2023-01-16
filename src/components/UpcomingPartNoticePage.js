import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { upcomingnoticedata } from '../utils/NoticePageApi'
import { useNavigate } from 'react-router-dom';
const UpcomingPartNoticePage = () => {

  let navigate = useNavigate()
  const handleNoticeSinglePage=(id)=>{
    navigate(`/notice/upcoming/${id}`)
}
  return (
    <>
        <div className="upcomingpartnoticepage">
            <div className="myContainerMini">
            
                <div className="subheadingandparagraph">
                    <h3>Up Coming</h3>                    
                </div>
            
            <Row className="noticecontent">
            {
                      upcomingnoticedata.map((item,key)=>{
                        let trimmedString= item.paragraph.substr(0, 38)
                      return(
                        <div className="myContainer">
                          <Col lg={12} md={12} key={key}>
                        <div className="noticebox noticeboxleft upcoming" onClick={()=>handleNoticeSinglePage(item.id)}>
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

export default UpcomingPartNoticePage