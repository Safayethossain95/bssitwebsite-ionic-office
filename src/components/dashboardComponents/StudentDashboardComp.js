import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {HiOutlineBell} from 'react-icons/hi'
import {Row,Col} from 'react-bootstrap'
const StudentDashboardComp = () => {
  return (
    <>
        <div className="sidebarleftbill">
            <div className="sidebarleftbillbox">
                <div className="logo">
                    <img src="./assets/images/logo/bsslogostudashboard.png" alt="" />
                </div>
                <div className="menupart">
                  <ul>
                    <li><Link className='active' to="/studashboard"> <img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Dashboard</Link></li>
                    <li><Link to="/"><img src="./assets/images/icons/tinysquaresicon.png" alt="" />Document</Link></li>
                    <li><Link to="/"><img src="./assets/images/icons/tinysquaresicon.png" alt="" />Option 2</Link></li>
                    <li><Link to="/"><img src="./assets/images/icons/tinysquaresicon.png" alt="" />Option 3</Link></li>
                  </ul>
                </div>
                <div className="logout">
                  <Button>Logout</Button>
                </div>
            </div>
        </div>
        <div className="rightpartcontentwrap">
        <div className="headerpartbill">
            
            <div className="leftsidecontent">
               <h3>Good Morning Jisan</h3>
            </div>
        
            <div className="rightsidestuff">
                <div className="bellicon">
                    <HiOutlineBell/>
                </div>
                <div className="profilesmallinfo">
                    <div className="profilepic">
                        <img src="./assets/images/dashboards/studentDashboard/profilepic.png" alt="headerprofilepic" />
                    </div>
                    <div className="roleandid">
                        <div className="roleidwrapper">
                            <h5>Md Jisan Khan</h5>
                            <p>ID 1705032108</p>
                        </div>
                    </div>
                </div>
            </div>
       
    
        </div>

        <Row>
            <Col lg={4}>
                <div className="samebox">
                    <div className="headerpart">
                        <div className="flexwrap">
                            <h4>Documnets</h4>
                            <p>View more</p>
                        </div>
                    </div>
                    <div className="contentpart">
                        <div className="smallbarcard">
                            <img src="./assets/images/dashboards/studentDashboard/smallbaricon1.png" alt="smallbaricon1.png" />
                            <div className="textssmallbar">
                                <div className="flexwrap">
                                <h5>Home Work</h5>
                                <p>8 files available for download</p>
                                </div>
                            </div>
                            <div className="downloadbutton">
                                <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                            </div>
                        </div>
                        <div className="smallbarcard">
                            <img style={{width:"38px"}} src="./assets/images/dashboards/studentDashboard/smallbaricon2.png" alt="smallbaricon1.png" />
                            <div className="textssmallbar">
                                <div className="flexwrap">
                                <h5>Class Work</h5>
                                <p>8 files available for download</p>
                                </div>
                            </div>
                            <div className="downloadbutton">
                                <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                            </div>
                        </div>
                        <div className="smallbarcard">
                            <img style={{width:"42px"}} src="./assets/images/dashboards/studentDashboard/smallbaricon3.png" alt="smallbaricon1.png" />
                            <div className="textssmallbar">
                                <div className="flexwrap">
                                <h5>Assesment</h5>
                                <p>8 files available for download</p>
                                </div>
                            </div>
                            <div className="downloadbutton">
                                <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                            </div>
                        </div>
                        <div className="smallbarcard">
                            <img style={{width:"42px"}} src="./assets/images/dashboards/studentDashboard/smallbaricon4.png" alt="smallbaricon1.png" />
                            <div className="textssmallbar">
                                <div className="flexwrap">
                                <h5>Exam Paper</h5>
                                <p>8 files available for download</p>
                                </div>
                            </div>
                            <div className="downloadbutton">
                                <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                            </div>
                        </div>
                        <div className="smallbarcard">
                            <img style={{width:"42px"}} src="./assets/images/dashboards/studentDashboard/smallbaricon5.png" alt="smallbaricon1.png" />
                            <div className="textssmallbar">
                                <div className="flexwrap">
                                <h5>Syllabus</h5>
                                <p>8 files available for download</p>
                                </div>
                            </div>
                            <div className="downloadbutton">
                                <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </Col>
            <Col lg={4}>
            <div className="samebox">

                </div>
            </Col>
            <Col lg={4}>
            <div className="samebox">

                </div>
            </Col>
        </Row>
        </div>
    </>
  )
}

export default StudentDashboardComp