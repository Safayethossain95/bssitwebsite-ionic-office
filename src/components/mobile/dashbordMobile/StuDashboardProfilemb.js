import React from 'react'
import {Row,Col,Nav,Tab,Tabs} from 'react-bootstrap'
import {profiletabApi } from '../../../utils/DashboardApi/StudentDashboardApi'
import { useNavigate } from 'react-router-dom'
const StuDashboardProfilemb = () => {

    const navigate = useNavigate()

    const handlehelpSupport=()=>{
        navigate('/studashboard/helpandsupport')
    }

    const handleClassTeacher = ()=>{
        navigate('/studashboard/classteacher')

    }

  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                            <h3>Profile</h3>
                </div>
                <div className="flexwrapperprofilemb ">
                        <div className="profileleftcolumn">
                            <div className="proleftcoltop">
                                <div className="profileimgbig text-center">
                                <img src="./assets/images/dashboards/studentDashboard/profilePicBig.png" alt="profilePicBig.png" />

                                <h4>Md Jisan Khan</h4>
                                <p>ID 1705032108</p>
                                </div>

                                <div className="profiledetailpoints">
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> CLASS</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> Class 2</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> SECTION</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> Diamond 1</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> CAMPUS</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> Campus 4</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> HEIGHT</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> 4.5"</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> WEIGHT</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> 50.4KG</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="profilerightcolumn">
                            <h3>Profile Settings</h3>
                            <Tabs
                                defaultActiveKey="personaldetails"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                               
                                >
                                <Tab eventKey="personaldetails" title="Personal Details">
                                    <Row>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApi.personaldetails.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApi.personaldetails.email}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Residential Phone</p>
                                                <h5>{profiletabApi.personaldetails.residentialphone}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Date of Birth</p>
                                                <h5>{profiletabApi.personaldetails.dateofbirth}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Place of Birth</p>
                                                <h5>{profiletabApi.personaldetails.placeofbirth}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Country</p>
                                                <h5>{profiletabApi.personaldetails.country}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Gender</p>
                                                <h5>{profiletabApi.personaldetails.gender}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Religion</p>
                                                <h5>{profiletabApi.personaldetails.religion}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Nationality</p>
                                                <h5>{profiletabApi.personaldetails.nationality}</h5>
                                            </div>

                                        </Col>
                                       

                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Blood Group</p>
                                                <h5>{profiletabApi.personaldetails.bloodgroup}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Birth Certifiacte</p>
                                                <h5>{profiletabApi.personaldetails.birthcertificate}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApi.personaldetails.passport}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Medeical History</p>
                                                <h5>{profiletabApi.personaldetails.medicalhistory}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Emergency Medical Action</p>
                                                <h5>{profiletabApi.personaldetails.emergencymedicalaction}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <h5 className="subheading">Address</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Holding</p>
                                                <h5>{profiletabApi.personaldetails.holding}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Street</p>
                                                <h5>{profiletabApi.personaldetails.street}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Area</p>
                                                <h5>{profiletabApi.personaldetails.area}</h5>
                                            </div>

                                        </Col>

                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Post Code</p>
                                                <h5>{profiletabApi.personaldetails.postcode}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Police Station</p>
                                                <h5>{profiletabApi.personaldetails.policestation}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>City</p>
                                                <h5>{profiletabApi.personaldetails.city}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Division</p>
                                                <h5>{profiletabApi.personaldetails.division}</h5>
                                            </div>

                                        </Col>

                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Country</p>
                                                <h5>{profiletabApi.personaldetails.country}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <h5 className="subheading">Siblings</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Name</p>
                                                <h5>{profiletabApi.personaldetails.siblingname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>ID</p>
                                                <h5>{profiletabApi.personaldetails.siblingID}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="fatherdetails" title="Father Details">
                                    <Row>
                                    <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApi.fathersinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApi.fathersinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApi.fathersinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApi.fathersinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApi.fathersinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApi.fathersinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Occupation</p>
                                                <h5>{profiletabApi.fathersinfo.occupation}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Designation</p>
                                                <h5>{profiletabApi.fathersinfo.designation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={12}>
                                        <div className="infopopulatebox">
                                                <p>Company Address</p>
                                                <h5>{profiletabApi.fathersinfo.companyaddress}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="motherdetails" title="Mother Details">
                                <Row>
                                <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApi.mothersinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApi.mothersinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApi.mothersinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApi.mothersinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApi.mothersinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApi.mothersinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Occupation</p>
                                                <h5>{profiletabApi.mothersinfo.occupation}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Designation</p>
                                                <h5>{profiletabApi.mothersinfo.designation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={12}>
                                        <div className="infopopulatebox">
                                                <p>Company Address</p>
                                                <h5>{profiletabApi.mothersinfo.companyaddress}</h5>
                                            </div>
                                        </Col>
                                </Row>
                                </Tab>
                                <Tab eventKey="localguardian" title="Local Guardian">
                                <Row>
                                <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApi.localguardianinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApi.localguardianinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApi.localguardianinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApi.localguardianinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApi.localguardianinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Relation</p>
                                                <h5>{profiletabApi.localguardianinfo.relation}</h5>
                                            </div>

                                        </Col>
                                </Row>
                                </Tab>
                                </Tabs>
                        </div>
                        <div className="proleftcolbottom">
                                    <h3>Support</h3>

                                    <div className="proleftcolbottomflexwrapforbuttonw">
                                        <div className="leftforicon" onClick={handleClassTeacher}>
                                            <div className="flexwrap">
                                            <img src="./assets/images/dashboards/studentDashboard/profileTab/lowericon1.png" alt="lowericon1.png" />
                                            <h5>Class Teacher</h5>
                                            </div>
                                        </div>
                                        <div className="rightforicon" onClick={handlehelpSupport}>
                                             <div className="flexwrap">
                                            <img src="./assets/images/dashboards/studentDashboard/profileTab/lowericon2.png" alt="lowericon2.png" />
                                            <h5>Help & Support</h5>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default StuDashboardProfilemb