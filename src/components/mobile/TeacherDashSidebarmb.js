import React,{useEffect,useState} from 'react'
import {Navbar,Nav } from 'react-bootstrap'
import CommonButton from '../subComponents/CommonButton'
import {NavLink,Link} from 'react-router-dom';
import '../../sassFiles/mobile/sassPages/homepage.scss'
import {Row,Col} from 'react-bootstrap'
const TeacherDashSidebarmb = (props) => {
    let activeStyle = {
        color:"#ED1C24"
      };
    const [varforiconchange,setvarforiconchange ]=useState("")
    const handleonclick=()=>{
      
      
      var mynavbarnav = document.getElementById("mynavbarnav");
      mynavbarnav.classList.toggle('show');
      mynavbarnav.classList.toggle('navbar-white');
    }
    
    const handletoggler=()=>{
      var navtoggler = document.getElementById("nav-icon4");
      navtoggler.classList.toggle('open');
    }
    const handleTabvalue=(mytabval)=>{
        var mynavbarnav = document.getElementById("mynavbarnav");
        mynavbarnav.classList.remove('show');
        var navtoggler = document.getElementById("nav-icon4");
        navtoggler.classList.toggle('open');
        props.func(mytabval)
        var getiddashboardtab = document.getElementById("dashboardTab")
        var getclassroutinetab = document.getElementById("classRoutineTab")
        var getcurriculumtab = document.getElementById("curriculumTab")
        var getreslultentrytab = document.getElementById("resultentryTab")
        var getattendancetab = document.getElementById("attendanceTab")
        var getsalaryinfotab = document.getElementById("salaryinfoTab")
        var getleaveformtab = document.getElementById("leaveformTab")
        var getprofiletab = document.getElementById("profileTab")
    
        getiddashboardtab.classList.remove("activei")
        getclassroutinetab.classList.remove("activei")
        getcurriculumtab.classList.remove("activei")
        getreslultentrytab.classList.remove("activei")
        getattendancetab.classList.remove("activei")
        getsalaryinfotab.classList.remove("activei")
        getleaveformtab.classList.remove("activei")
        getprofiletab.classList.remove("activei")
    
        var getidtab = document.getElementById(mytabval)
        setvarforiconchange(mytabval)
        getidtab.classList.add('activei')
    
    }
  return (
    <>
          <Navbar id="navbarmini" className="mynavbarmb studashnav" expand="lg">
            
            <div className="headerwrapper">
              <Row style={{width:"100%"}}>
                <Col xs={2}>
                    <div className='navbar-brand2'>
                      <Link to="/"><img src="./assets/images/logo/navbar_logo.png" alt="logo" /> </Link>
                                         
                </div>                
                </Col>
                <Col xs={9} style={{paddingRight:"0",paddingLeft:"0"}} className="togglermenuclass2">
                    <p>British Standard School</p> 
                </Col>

                <Col xs={1} className="togglermenuclass">
                <div className="navbar-toggler" onClick={handleonclick} id="navbar-toggler" aria-controls="basic-navbar-nav" >
                <div id="nav-icon4" onClick={handletoggler}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                </div>
                </Col>
              </Row>
                
             
                
                <Nav className="mynavbarnav mynavbarnavdash" id="mynavbarnav">
                        <div className="profileimgandid d-flex align-items-center">
                        <img style={{borderRadius:"50%",width:"50px",height:"50px"}} src="./assets/images/dashboards/teacherDashboard/profile_pic.png" alt="smallpropic.png" />
                        <div className="propicidpartright">
                            <h4>Farhana Akhtar</h4>
                            <p>ID 1705032108</p>
                        </div>
                    </div>
                    <NavLink  
                    className="activei" id="dashboardTab"
                    onClick={()=>handleTabvalue("dashboardTab")}
                    >

                         {
                            varforiconchange=="dashboardTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        
                        Dashboard
                        </NavLink>

                   
                   
                    <NavLink id="classRoutineTab" onClick={()=>handleTabvalue("classRoutineTab")}                    
                    >
                        {
                            varforiconchange=="classRoutineTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Class Routine
                    </NavLink>
                    <NavLink id="curriculumTab" onClick={()=>handleTabvalue("curriculumTab")}                    
                    >
                        {
                            varforiconchange=="curriculumTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Curriculum Entry
                    </NavLink>
                    <NavLink id="resultentryTab" onClick={()=>handleTabvalue("resultentryTab")}                    
                    >
                        {
                            varforiconchange=="resultentryTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Result Entry
                    </NavLink>
                    <NavLink id="attendanceTab" onClick={()=>handleTabvalue("attendanceTab")}                    
                    >
                        {
                            varforiconchange=="attendanceTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Attendance
                    </NavLink>
                    <NavLink id="salaryinfoTab" onClick={()=>handleTabvalue("salaryinfoTab")}                    
                    >
                        {
                            varforiconchange=="salaryinfoTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Salary Info
                    </NavLink>
                    <NavLink id="leaveformTab" onClick={()=>handleTabvalue("leaveformTab")}                    
                    >
                        {
                            varforiconchange=="leaveformTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Leave Form
                    </NavLink>
                    <NavLink id="profileTab" onClick={()=>handleTabvalue("profileTab")}                    
                    >
                        {
                            varforiconchange=="profileTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Profile
                    </NavLink>

                </Nav>
                
                
            
            </div>
            </Navbar>
    </>
  )
}

export default TeacherDashSidebarmb