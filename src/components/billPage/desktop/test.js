import React, { useState } from 'react'
import React,{useState} from 'react'
import {HiOutlineBell} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import '../../../sassFiles/sassPages/studentaddmissionbilll.scss'
import {Row,Col, Button} from 'react-bootstrap'
import {FiUpload} from 'react-icons/fi'
import {RxReload} from 'react-icons/rx'
import {Tab,Tabs} from 'react-bootstrap';
import {BiSave} from 'react-icons/bi';
const test = () => {
    const [ad,setad] = useState({
        firstname_mothers:"",
        middlename_mothers:"",
        lastname_mothers:"",
        mobile_mothers:"",
        phone_mothers:"",
        nationalid_mothers:"",
        education_mothers:"",
        education_details_mothers:"",
        occupation_mothers:"",
        occupation_details_mothers:"",
        officeAddress_mothers:"",
    })
  return (
    <>
        <Row style={{marginTop:"40px"}}>
                            <Col>
                                <p>First Name</p>
                                <input type="text" name="firstname_mothers" placeholder='-' value={studentadmissiondata.firstname_mothers} onChange={handleInput}/>
                            </Col>
                            <Col>
                                <p>Middle Name</p>
                                <input type="text" name="middlename_mothers" placeholder='-' value={studentadmissiondata.middlename_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Last Name</p>
                                <input type="text" name="lastname_mothers" placeholder='-' value={studentadmissiondata.lastname_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Mobile</p>
                                <input type="text" name="mobile_mothers" placeholder='-' value={studentadmissiondata.mobile_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Phone</p>
                                <input type="text" name="phone_mothers" placeholder='-' value={studentadmissiondata.phone_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>National Id</p>
                                <input type="text" name="nationalid_mothers" placeholder='-' value={studentadmissiondata.nationalid_mothers} onChange={handleInput}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Education</p>
                                <input type="text" name="education_mothers" placeholder='-' value={studentadmissiondata.education_mothers} onChange={handleInput}/>
                            </Col>
                            <Col>
                                <p>Education Details</p>
                                <input type="text" name="education_details_mothers" placeholder='-' value={studentadmissiondata.education_details_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Occupation</p>
                                <input type="text" name="occupation_mothers" placeholder='-' value={studentadmissiondata.occupation_mothers} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Occupation Details</p>
                                <input type="text" name="occupation_details_mothers" placeholder='-' value={studentadmissiondata.occupation_details_mothers} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Office Address</p>
                                <input type="text" name="officeAddress_mothers" placeholder='-' value={studentadmissiondata.officeAddress_mothers} onChange={handleInput}/>
                            </Col>
                           
                        </Row>
    </>
  )
}

export default test