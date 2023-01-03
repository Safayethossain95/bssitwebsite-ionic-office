import React,{useState} from 'react'
import {Row,Col, Form} from 'react-bootstrap'
import { RiContactsBook2Fill } from 'react-icons/ri'
import CommonButton from './subComponents/CommonButton'
import HeadlineOfOtherPage from './subComponents/HeadlineOfOtherPage'

const ContactPageComp = () => {

  const contactcardsdata = [
    {
        heading:"Corporate Office",
        address:"13, Larmini Street Wari, Dhaka",
        phone:"88027115628",
        email:"info@britishstandardschool.com"
    },
    {
        heading:"Junior Section",
        campus:"Campus 3",
        address:"26/1, Larmini Street Wari, Dhaka",
        phone:"88029512540",
        email:"juniorsection@britishstandardschool.com"
    },
    {
        heading:"Middle Section",
        campus:"Campus 4",
        address:"13, Larmini Street Wari, Dhaka",
        phone:"880223388129",
        email:"middlesection@britishstandardschool.com"
    },
    {
        heading:"Senior Section",
        campus:"Campus 1",
        address:"2/7, Nawab Street Wari, Dhaka",
        phone:"880247116519",
        email:"seniorsection@britishstandardschool.com"
    },

  ]
  const [contactformdata,setcontactformdata] = useState({
    name:"",
    email:"",
    phone:"",
    info:"",
    subject:"",
    message:"",
    captcha:""
  })
  const handleInput=(e)=>{
    setcontactformdata({...contactformdata,[e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(contactformdata)
  }
  return (
    <>
        <div className="myContainerseventy">
            
        <Row style={{marginTop:"100px"}}>
            {
                contactcardsdata.map((item,key)=>{
                    return (
                        <Col lg={6} className="columnpadding" key={key} style={{marginBottom:"70px",padding:"0 35px"}}>
                            <div className="contactdeskbox">
                                <div className="flexwrapper">
                                    <h4>{item.heading}</h4>
                                    {
                                        item.campus?
                                        <p>{item.campus}</p>
                                        :
                                        ""
                                    }
                                    <p>{item.address}</p>
                                    <p>TEL: {item.phone}</p>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
            
        </Row>
        <HeadlineOfOtherPage noticepagegapbalance="contactmargintop" headline="Online Inquiry"/>
        <Form onSubmit={handleSubmit}>

        <Row>
            <Col lg={6} style={{padding:"0 35px"}} className="columnpadding">
                <div className="basicinputfield">
                    <input type="text" placeholder='Name' name="name"  onChange={handleInput}/>
                    <input type="emial" placeholder='Email' name="email"  onChange={handleInput}/>
                    <input type="text" placeholder='Phone' name="phone"  onChange={handleInput}/>
                    <input type="text" placeholder='Info' name="info" onChange={handleInput}/>
                    <input type="text" placeholder='Subject' name="subject" onChange={handleInput}/>
                </div>
            </Col>
            <Col lg={6} style={{padding:"0 35px"}} className="columnpadding">
                <div className="basicinputfield contactpagerightsideform">
                    <textarea name="message" placeholder="Message" onChange={handleInput}></textarea>
                    <input type="text" placeholder='Captcha' name="captcha" onChange={handleInput}/>
                </div>
            </Col>
        </Row>
        <CommonButton buttonTitle="Send Message"/>
        </Form>
        </div>
    </>
  )
}

export default ContactPageComp