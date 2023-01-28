import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {HiOutlineBell} from 'react-icons/hi'
import {Row,Col,Nav,Tab} from 'react-bootstrap'
import { prevPaymentHistory,paymentHistoryDue,noticeData,documentData,attendenceApi,periodsubjectdata } from '../../utils/DashboardApi/StudentDashboardApi'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'

ChartJS.register(ArcElement, Tooltip, Legend);
const StudentDashboardComp = () => {
   
    const chdata = {
        labels:["present","absent"],
        datasets:[{
            data:[attendenceApi.firstSemester.present,attendenceApi.firstSemester.absent],
            backgroundColor:[
                "rgba(49, 39, 131, 0.5)",
                "rgba(237, 28, 36, 0.5)",
            ],
            borderWidth:0,
            
            
        }],
        
    }
    const chdata2 = {
        labels:["present","absent"],
        datasets:[{
            data:[attendenceApi.secondSemester.present,attendenceApi.secondSemester.absent],
            backgroundColor:[
                "rgba(49, 39, 131, 0.5)",
                "rgba(237, 28, 36, 0.5)",
            ],
            borderWidth:0,
            
            
        }],
        
    }
    const [drpday,setDrpday] = useState("")
    
    const dropdownvalue=(e)=>{
        // console.log(e.value)
        setDrpday(e.value)
      }
      const dayoptions = [
        'Select Day','Sturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Frriday'
      ];
      const defaultOptiontype = dayoptions[0];
      const [variableactivekey,setvariableactivekey] = useState("first")

      const handleSelecttab = (tabvalue)=>{
        setvariableactivekey(tabvalue)
        var element = document.getElementById(tabvalue);
        var firstthing = document.getElementById("first");
        var secondthing = document.getElementById("second");
        var thirdthing = document.getElementById("third");
        var fourththing = document.getElementById("fourth");
        var fifththing = document.getElementById("fifth");
        var sixththing = document.getElementById("sixth");
        var sevenththing = document.getElementById("seventh");
        var eighththing = document.getElementById("eighth");
        var ninththing = document.getElementById("ninth");
        firstthing.classList.remove("active");
        secondthing.classList.remove("active");
        thirdthing.classList.remove("active");
        fourththing.classList.remove("active");
        fifththing.classList.remove("active");
        sixththing.classList.remove("active");
        sevenththing.classList.remove("active");
        eighththing.classList.remove("active");
        ninththing.classList.remove("active");
        element.classList.add("active");
      }
  return (
    <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" activeKey={variableactivekey}>
        <div className="sidebarleftbill">
            <div className="sidebarleftbillbox">
                <div className="logo">
                    <img src="./assets/images/logo/bsslogostudashboard.png" alt="" />
                </div>
                <div className="menupart">
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <a id="first" className='active' onClick={()=>handleSelecttab("first")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Dashboard</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="second" onClick={()=>handleSelecttab("second")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Document</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="third" onClick={()=>handleSelecttab("third")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Notice</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="fourth" onClick={()=>handleSelecttab("fourth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Routine</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="fifth" onClick={()=>handleSelecttab("fifth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Attendence</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="sixth" onClick={()=>handleSelecttab("sixth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Bill Info</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="seventh" onClick={()=>handleSelecttab("seventh")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Result</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="eighth" onClick={()=>handleSelecttab("eighth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Leave Form</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="ninth" onClick={()=>handleSelecttab("ninth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Profile</a>
                    </Nav.Item>
                </Nav>
                  
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
        <Tab.Content >
            <Tab.Pane eventKey="first" className="tabPane">
                <div className="tabpaneheightadjust">
                    <Row style={{flex:"1 1 50%"}}>
                    <Col lg={4} style={{paddingRight:"15px"}}>
                        <div className="samebox">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Documnets</h4>
                                        <p onClick={()=>handleSelecttab("second")} >View more</p>
                                </div>
                            </div>
                            <div className="contentpart" >
                            
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon1.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.homework.filetype}</h5>
                                                    <p>{documentData.homework.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon2.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.classwork.filetype}</h5>
                                                    <p>{documentData.classwork.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon3.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.assesment.filetype}</h5>
                                                    <p>{documentData.assesment.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon4.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.exampaper.filetype}</h5>
                                                    <p>{documentData.exampaper.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon5.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.syllabus.filetype}</h5>
                                                    <p>{documentData.syllabus.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                
                            
                            </div>
                        </div>
                        
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                    <div className="samebox">
                        <div className="headerpart">
                            <div className="flexwrap">
                                <div className="flexwrap2">
                                <h4>Notice </h4>
                                <div><span>18</span></div>
                                </div>
                                <p>View more</p>
                            </div>
                        </div>
                        <div className="contentpart">
                        {
                            noticeData.map((item,key)=>{
                                return(
                                <div className="noticebarmini" key={key}>
                                    <h5> {item.noticeheading}- <span>Published : {item.publishDate}</span></h5>                    
                                </div>
                                )
                            })
                        }

                        </div>
                        
                    </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0"}}>
                    <div className="samebox">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Attendence</h4>
                                    <p eventKey="second">View all</p>
                                </div>
                            </div>
                            <div className="chartidtabd">
                            <Tab.Container id="chartidtabs" defaultActiveKey="first-chart">
                                <Nav variant="pills" className="flex-row">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first-chart">First Semester</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second-chart">Second Semester</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first-chart">
                                        <div className="presenttext">
                                        <p>{attendenceApi.firstSemester.present}%</p>
                                        <p>present</p>
                                        </div>
                                        <div className="absenttext">
                                        <p >{attendenceApi.firstSemester.absent}%</p>
                                        <p>absent</p>
                                        </div>
                                        <Doughnut style={{margin:"0 auto",width:"250px",height:"250px"}} data={chdata}/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second-chart">
                                        <Doughnut style={{margin:"0 auto",width:"50%!important",height:"50%!important"}} data={chdata2}/>
                                        
                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    <Row className="secondRow" style={{flex:"1 1 50%"}}> 
                    <Col lg={4} style={{paddingRight:"15px"}}>
                        <div className="samebox prevhistory">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Payment History</h4>
                                    <p>View all</p>
                                </div>
                            </div>

                            <div className="smallheading">
                                <h5>{paymentHistoryDue.dueformonths==1?`You have total ${paymentHistoryDue.dueformonths} month tuition fee due`:paymentHistoryDue.dueformonths>1?`You have total ${paymentHistoryDue.dueformonths} months tuition fee due`:"You have no tution fee due"}</h5>
                            </div>
                            <div className="cardbarprevphistory">
                                <div className="duepartcardbar">
                                    <h3>Due Amount</h3>
                                    <div className="rightsidflexpart">
                                        <div className="pillright">
                                            <h6>Not Paid</h6>
                                        </div>
                                        <div className="amount">
                                            <p>৳ {paymentHistoryDue.dueAmount}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="paymenthistoryoverview">
                                    <div className="paymenthistoryovflexwrap">
                                        {
                                        prevPaymentHistory.map((item,key)=>{
                                            return(
                                                <div className="payhpartcardbar">
                                                    <div className="monthdatewrapper">
                                                    <h3>{item.month}</h3>
                                                    <p>Date: {item.date}</p>
                                                    </div>
                                                    <div className="rightsidflexpart">
                                                        <div className="pillright">
                                                            <h6>Paid</h6>
                                                        </div>
                                                        <div className="amount">
                                                            <p>৳ {item.amount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <Button className="paymentbutton">Pay Now</Button>
                        </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                        <div className="samebox sameboxroutine">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Class Routine</h4>
                                    <div className="dropdownwrapper">
                                        <Dropdown className='filterdropone' options={dayoptions} onChange={(e)=>dropdownvalue(e)} value={defaultOptiontype} placeholder="Select an option" />
                                        <BsChevronDown/>
                                    </div>
                                </div>
                            </div>
                            <div className="routinetable">
                                <table>
                                    {
                                        periodsubjectdata.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                
                                </table>
                            </div>
                            <div className="extraclassbox">
                                <p>No Extra Class</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                        <div className="samebox sameboxcalender">
                            
                            
                        </div>
                    </Col>
                    </Row>

                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row>
            <Col lg={4}>
                <div className="samebox">
                    <div className="headerpart">
                        <div className="flexwrap">
                            <h4>Documnets Second Page</h4>
                            <p>View more</p>
                        </div>
                    </div>
                    <div className="contentpart">
                        <div className="smallbarcard">
                            <img src="./assets/images/dashboards/studentDashboard/smallbaricon1.png" alt="smallbaricon1.png" />
                            <div className="textssmallbar">
                                <div className="flexwrap">
                                <h5>Home Work</h5>
                                <p>8  files available for download</p>
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
                                <p>8  files available for download</p>
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
                                <p>8  files available for download</p>
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
                                <p>8  files available for download</p>
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
                                <p>8  files available for download</p>
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
            </Tab.Pane>
          </Tab.Content>
        
        </div>
        </Tab.Container>
    </>
  )
}

export default StudentDashboardComp