import React from 'react'
import {Row,Col,Nav,Tab,Tabs} from 'react-bootstrap'
import {profiletabApiteacher } from '../../../../utils/DashboardApi/TeacherDashboardApi'
const TeaProfileDashTab = () => {
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
                                <img src="./assets/images/dashboards/teacherDashboard/profile_pic_big.png" alt="profile_pic_big.png" />

                                <h4>Farhana Ahmed</h4>
                                <p>ID 1705032108</p>
                                </div>

                                <div className="profiledetailpoints">
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" >
                                            <p> DEPARTMENT</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> ACADEMIC</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" >
                                            <p> DESIGNATION</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> ACADEMIC</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft">
                                            <p>SECTION</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> JUNIOR</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft">
                                            <p> OFFICE IN TIME</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> 09:10</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft">
                                            <p> OFFICE OUT TIME</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> 14:40</p>
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
                                                <h5>{profiletabApiteacher.personaldetails.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.personaldetails.email}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Residential Phone</p>
                                                <h5>{profiletabApiteacher.personaldetails.residentialphone}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Date of Birth</p>
                                                <h5>{profiletabApiteacher.personaldetails.dateofbirth}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Place of Birth</p>
                                                <h5>{profiletabApiteacher.personaldetails.placeofbirth}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Country</p>
                                                <h5>{profiletabApiteacher.personaldetails.country}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Gender</p>
                                                <h5>{profiletabApiteacher.personaldetails.gender}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Religion</p>
                                                <h5>{profiletabApiteacher.personaldetails.religion}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Nationality</p>
                                                <h5>{profiletabApiteacher.personaldetails.nationality}</h5>
                                            </div>

                                        </Col>
                                       

                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Blood Group</p>
                                                <h5>{profiletabApiteacher.personaldetails.bloodgroup}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Birth Certifiacte</p>
                                                <h5>{profiletabApiteacher.personaldetails.birthcertificate}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.personaldetails.passport}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Medeical History</p>
                                                <h5>{profiletabApiteacher.personaldetails.medicalhistory}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Emergency Medical Action</p>
                                                <h5>{profiletabApiteacher.personaldetails.emergencymedicalaction}</h5>
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
                                                <h5>{profiletabApiteacher.personaldetails.holding}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Street</p>
                                                <h5>{profiletabApiteacher.personaldetails.street}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Area</p>
                                                <h5>{profiletabApiteacher.personaldetails.area}</h5>
                                            </div>

                                        </Col>

                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Post Code</p>
                                                <h5>{profiletabApiteacher.personaldetails.postcode}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Police Station</p>
                                                <h5>{profiletabApiteacher.personaldetails.policestation}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>City</p>
                                                <h5>{profiletabApiteacher.personaldetails.city}</h5>
                                            </div>

                                        </Col>
                                        <Col xs={6} style={{paddingRight:"10px"}}>
                                            <div className="infopopulatebox">
                                                <p>Division</p>
                                                <h5>{profiletabApiteacher.personaldetails.division}</h5>
                                            </div>

                                        </Col>

                                        <Col xs={6} style={{paddingLeft:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Country</p>
                                                <h5>{profiletabApiteacher.personaldetails.country}</h5>
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
                                                <h5>{profiletabApiteacher.personaldetails.siblingname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>ID</p>
                                                <h5>{profiletabApiteacher.personaldetails.siblingID}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="fatherdetails" title="Father Details">
                                    <Row>
                                    <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApiteacher.fathersinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.fathersinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApiteacher.fathersinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.fathersinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApiteacher.fathersinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApiteacher.fathersinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Occupation</p>
                                                <h5>{profiletabApiteacher.fathersinfo.occupation}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Designation</p>
                                                <h5>{profiletabApiteacher.fathersinfo.designation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={12}>
                                        <div className="infopopulatebox">
                                                <p>Company Address</p>
                                                <h5>{profiletabApiteacher.fathersinfo.companyaddress}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="motherdetails" title="Mother Details">
                                <Row>
                                <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApiteacher.mothersinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.mothersinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApiteacher.mothersinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.mothersinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApiteacher.mothersinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApiteacher.mothersinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Occupation</p>
                                                <h5>{profiletabApiteacher.mothersinfo.occupation}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="infopopulatebox">
                                                <p>Designation</p>
                                                <h5>{profiletabApiteacher.mothersinfo.designation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={12}>
                                        <div className="infopopulatebox">
                                                <p>Company Address</p>
                                                <h5>{profiletabApiteacher.mothersinfo.companyaddress}</h5>
                                            </div>
                                        </Col>
                                </Row>
                                </Tab>
                                <Tab eventKey="localguardian" title="Local Guardian">
                                <Row>
                                <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Relation</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.relation}</h5>
                                            </div>

                                        </Col>
                                </Row>
                                </Tab>
                                </Tabs>
                        </div>
                        <div className="proleftcolbottom">
                                    <h3>Support</h3>

                                    <div className="proleftcolbottomflexwrapforbuttonw">
                                        <div className="leftforicon">
                                            <div className="flexwrap">
                                            <img src="./assets/images/dashboards/studentDashboard/profileTab/lowericon1.png" alt="lowericon1.png" />
                                            <h5>Class Teacher</h5>
                                            </div>
                                        </div>
                                        <div className="rightforicon">
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

export default TeaProfileDashTab