import React from 'react'
import {Row,Col} from 'react-bootstrap'
const KarateCompmb = () => {
    let karateboxdata=[
        {
          heading:"Schedule & Venue",
          venue:"Middle Section (Campus 4)",
          training:"2 Days a week",
          timing:" Friday &  Saturday",
          batch:"1 = 10:00 AM to 12:00 PM",
          
        },
        {
          heading:"Fee Structure",
          admissionfee:"1500",
          monthlytutionfee:"1200",
          examfee:"500",
          idcard:"300"
          
          
        }
      ]
  return (
    <>
        <div className="mobilecontainer">
            <div className="heading">
                <h4>
                    Karate Course
                </h4>
                <p>
                BSS is introducing an additional course on Karate. Our course will provide each student with the essential karate skills to succeed in our community and the life skills they need to succeed in school, at home and in life.
                <br/>
                *Only BSS students are eligible to register for this course.
                </p>
            </div>

            <div className="cards">
            {
            karateboxdata.map((item,key)=>{
                return(
                <Col lg={6}>
                    <div className="karateinfobox">
                    <div className="flexwrap">
                        <h4>{item.heading?item.heading:""}</h4>
                        <p>{item.venue?`Venue: ${item.venue}`:""}</p>
                        <p>{item.training?`Training: ${item.training}`:""}</p>
                        <p>{item.timing?`Timing: ${item.timing}`:""}</p>
                        <p>{item.batch?`Batch: ${item.batch}`:""}</p>
                        <p>{item.admissionfee?`Admission Fee - TK. ${item.admissionfee}/=`:""}</p>
                        <p>{item.monthlytutionfee?`Monthly Tuition Fee - ${item.monthlytutionfee}/=`:""}</p>
                        <p>{item.examfee?`Examination Fee - TK ${item.examfee}/= [for every exam schedule]`:""}</p>
                        <p>{item.idcard?`ID Card from Bandladesh Karate Fedaration - TK ${item.idcard}/=`:""}</p>
                    </div>
                    </div>
                </Col>
                )
            })
            }


            </div>

            <div className="facilities">
                <h6>Facilities</h6>
                <p>All students will be able to participate in the School Karate Championship, Victory Day Karate Championship, and Independence Day Karate Championship. They will also be able to participate in District and Division level competitions. There is an opportunity to develop their career in both Private and Government Organizations. For example Banks, Insurance companies, Universities, etc.</p>
            </div>

            <div className="karateteacher">
                <Row>
                    <Col lg={12}>
                    <img className='teacherimg' src="./assets/images/mobile/karatepage/karatemb.png" alt="" />
                    </Col>
                    <Col lg={12}>
                    <div className="flexwrap">
                        <h5>Teacher&apos;s Information</h5>

                            <p className="boldme">Md. Humayun Kabir</p>
                            <p>7th Dan Black Belt</p>
                            <p>National Karate / Martial Arts Team Coach</p>
                            <p>Referee - National & International</p>
                            <p>President: Association of Shotokan Karate Do Bangladesh & Bangladesh SAMBO Association</p>
                            <div className="socialicons d-flex">
                            <a href="#">
                            <img className='firstimgmgtop' src="./assets/images/mobile/karatepage/icons/mail.png" alt="" />
                            </a>
                            <a href="#">
                            <img src="./assets/images/mobile/karatepage/icons/fb.png" alt="" />
                            </a>
                            <a href="#">
                            <img src="./assets/images/mobile/karatepage/icons/web.png" alt="" />
                            </a>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="contactaddresspart">
            <div className="contactforadmissioninfo">
                <div className="contactinfokaratebox">
                    <div className="flexwrap">
                    <h5>Contact for Admission & Information</h5>                    
                    <p>13, Larmini Street Wari, Dhaka</p>
                    <p>Phone : 0247115628 Cell : 01844264772</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default KarateCompmb