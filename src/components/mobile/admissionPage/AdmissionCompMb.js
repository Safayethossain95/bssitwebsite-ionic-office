import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AdmissionCompMb = () => {
    const admissioninfodata =[
        {
          heading:"Please check candidate age for eligible class",
          img:"./assets/images/mobile/admissionpage/1.png",
          link:"/"
        },
        {
          heading:"Please check fee structure before apply for admission",
          img:"./assets/images/mobile/admissionpage/2.png",
          link:"/",
          customimgwidthclass:"card"
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
      const secondrowcards=[
        {
          heading:"School Timing",
          img:"./assets/images/mobile/admissionpage/3.png",
          link:"/"
        },
        {
          heading:"Track Admission",
          img:"./assets/images/mobile/admissionpage/4.png",
          link:"/"
        },
      ]
      const thirdrowcards=[
        {
          heading:"Karate Course",
          img:"./assets/images/admissionpage/5.png",
          paragraph:"BSS is introducing an additional course on Karate. Our course will provide each student with the essential karate skills to succeed in our community and the life skills they need to succeed in school, at home and in life.",
          link:"/"
        },
      ]
  return (
    <>
        <div className="admissioncompmb">
            <div className="mobilecontainer">
                <div className="heading">
                    <h4>
                        Admission
                        <br/>
                        Information
                    </h4>
                </div>
                <Row style={{marginBottom:"50px"}}>
            {
            admissioninfodata.map((item,key)=>{
              return(
                <Col lg={12} className="px-0" key={key}>
                <div className="adinfobox">
                  <div className="adinfoboxleft firstrow">
                    <div className="wrapflex">
                    <h3>{item.heading}</h3>
                    
                    
                    </div>
                  </div>
                  <div className="adinfoboxright">
                    <img className={item.customimgwidthclass?"customimgwidthclass":""} src={item.img} alt="" />
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
              <p>Note: If all the above data & requirement is fulfilled then click the Proceed button for apply</p>
              
            </div>
            <Row>
            {
            secondrowcards.map((item,key)=>{
              return(
                <Col lg={12} className="px-0" key={key}>
                <div className="adinfobox">
                  <div className="adinfoboxleft secondrow">
                    <div className="wrapflex">
                    <h3>{item.heading}</h3>
                    
                    
                    </div>
                  </div>
                  <div className="adinfoboxright secondrow">
                    <img className={item.customimgwidthclass?"customimgwidthclass":""} src={item.img} alt="" />
                  </div>
                </div>
              
              </Col>
              )
            })
            }
              
            </Row>
            <Row>
            {
            thirdrowcards.map((item,key)=>{
              return(
                <Col lg={12} className="px-0" key={key}>
                <div className="adinfobox thirdrow">
               
                    <img src={item.img} alt="" />
                    <div className="wrapflex">
                    <h3>{item.heading}</h3>
                    <p>{item.paragraph}</p>
                    
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

export default AdmissionCompMb