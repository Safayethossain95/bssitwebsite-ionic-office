import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import CommonButton from './subComponents/CommonButton'
const AdmissionPageComp = () => {
  let navigate = useNavigate()
  const admissioninfodata =[
    {
      heading:"Please check candidate age for eligible class",
      img:"./assets/images/admissionpage/1.png",
      link:"/studentagecheck"
    },
    {
      heading:"Please check fee structure before apply for admission",
      img:"./assets/images/admissionpage/2.png",
      link:"/"
    },
  ]
  const secondrowcards=[
    {
      heading:"School Timing",
      img:"./assets/images/admissionpage/3.png",
      link:"/schooltiming"
    },
    {
      heading:"Track Admission",
      img:"./assets/images/admissionpage/4.png",
      link:"/trackadmission"
    },
  ]
  const thirdrowcards=[
    {
      heading:"Karate Course",
      img:"./assets/images/admissionpage/5.png",
      paragraph:"BSS is introducing an additional course on Karate. Our course will provide each student with the essential karate skills to succeed in our community and the life skills they need to succeed in school, at home and in life. For more information ",
      link:"/karatecourse"
    },
  ]
  const documentrequirementlist=[
    {
      listitem:"Student recent passport size image is required."
    },
    {
      listitem:"Student birth certificate soft copy is required."
    },
    {
      listitem:"Student previous transcript's soft copy is required."
    },
    {
      listitem:"Father's NID soft copy is required."
    },
    {
      listitem:"Mother's NID soft copy is required."
    },
    {
      listitem:"Student recent passport size image is required."
    },

  ]
  const handleProceed=()=>{
    navigate('/admissionproceed')
  }
  return (
    <>
        <div className="admissionpagecomp">
          <div className="myContainerseventy">
            <Row>
            {
            admissioninfodata.map((item,key)=>{
              return(
                <Col lg={6} style={{padding:"0 15px"}} key={key}>
                <div className="adinfobox">
                  <div className="adinfoboxleft">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="adinfoboxright">
                    <div className="wrapflex">
                    <h3>{item.heading}</h3>
                    <Link to={item.link}>Click Here</Link>
                    </div>
                  </div>
                </div>
              
              </Col>
              )
            })
            
            }
              
            </Row>

            <div className="documentsrequirements">
              <h2>Document Requirments</h2>
              <ul>
                {
                  documentrequirementlist.map((item,key)=>{
                    return(
                      <li key={key}>{item.listitem}</li>
                    )
                  })
                }
                
              </ul>
              <p><span>Note:</span> If all the above data & requirement is fulfilled then click the Proceed button for apply</p>
              <CommonButton myclick={handleProceed} buttonTitle="Apply Online"/>
            </div>
            <Row style={{marginBottom:"50px"}}>
            {
            secondrowcards.map((item,key)=>{
              return(
                <Col lg={6} style={{padding:"0 15px"}} key={key}>
                <div className="adinfobox">
                  
                  <div className="adinfoboxleft">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="adinfoboxright">
                    <div className="wrapflex">
                    <h3>{item.heading}</h3>
                    <Link to={item.link}>Click Here</Link>
                    </div>
                  </div>
                </div>
              
              </Col>
              )
            })
            
            }
              
            </Row>
            <Row style={{marginBottom:"50px"}}>
            {
            thirdrowcards.map((item,key)=>{
              return(
                <Col lg={12} key={key}>
                <div className="adinfobox">
                  
                  <div className="adinfoboxleft karate">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="adinfoboxright karate">
                    <div className="wrapflex">
                    <h3>{item.heading}</h3>
                    <p>{item.paragraph}</p>
                    <Link to={item.link}>click here</Link>
                    </div>
                  </div>
                </div>
              
              </Col>
              )
            })
            }
              
            </Row>
          </div>
        </div>
    </>

  )
}

export default AdmissionPageComp