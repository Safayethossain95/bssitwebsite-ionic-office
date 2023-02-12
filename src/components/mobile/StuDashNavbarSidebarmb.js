import React,{useEffect,useState} from 'react'
import {Navbar,Nav } from 'react-bootstrap'
import CommonButton from '../subComponents/CommonButton'
import {NavLink,Link} from 'react-router-dom';
import '../../sassFiles/mobile/sassPages/homepage.scss'
import {Row,Col} from 'react-bootstrap'
const StuDashNavbarSidebarmb = (props) => {
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
    var getiddocumenttab = document.getElementById("documentTab")
    var getinoticetab = document.getElementById("noticeTab")
    var getclassroutinetab = document.getElementById("classRoutineTab")
    var getatttab = document.getElementById("attendanceTab")
    getiddashboardtab.classList.remove("activei")
    getiddocumenttab.classList.remove("activei")
    getinoticetab.classList.remove("activei")
    getatttab.classList.remove("activei")
    getclassroutinetab.classList.remove("activei")
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
                        <div className="profileimgandid">
                        <img src="./assets/images/dashboards/studentDashboard/mobile/dashboardsidebar/smallpropic.png" alt="smallpropic.png" />
                        <div className="propicidpartright">
                            <h4>MD. Jisan Khan</h4>
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

                    <NavLink id="documentTab" onClick={()=>handleTabvalue("documentTab")}                    
                    >
                        {
                            varforiconchange=="documentTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Document
                    </NavLink>
                    <NavLink id="noticeTab" onClick={()=>handleTabvalue("noticeTab")}                    
                    >
                        {
                            varforiconchange=="noticeTab"?
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticon.png" alt="" />
                            :
                            <img src="./assets/images/dashboards/studentDashboard/mobile/icons/bulleticonblack.png" alt="" />
                        }
                        Notice
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

                </Nav>
                
                
            
            </div>
            </Navbar>
    </>
  )
}

export default StuDashNavbarSidebarmb