import React,{useEffect} from 'react'
import {Navbar,Nav,Accordion } from 'react-bootstrap'
import CommonButton from '../subComponents/CommonButton'
import {NavLink,Link} from 'react-router-dom';
import '../../sassFiles/mobile/sassPages/homepage.scss'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery'
const NavbarMoblie = () => {
    let activeStyle = {
        color:"#ED1C24"
      };

    const handleonclick=()=>{
      
      
      var mynavbarnav = document.getElementById("mynavbarnav");
      mynavbarnav.classList.toggle('show');
      mynavbarnav.classList.toggle('navbar-white');
    }

    const handletoggler=()=>{
      var navtoggler = document.getElementById("nav-icon4");
      navtoggler.classList.toggle('open');
    }

   

  return (
    <>
        <Navbar id="navbarmini" className="mynavbarmb" expand="lg">
            
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
                
                
                
                <Nav className="mynavbarnav" id="mynavbarnav">
                    
                    <NavLink to="/" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Home</NavLink>

                    <NavLink to="/aboutus" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >About Us</NavLink>

                      <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Admission</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                  <li>
                                    <NavLink to="/studentagecheck" style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                    }>Candidate Age</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/feestructure" style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                    }>Fee Structure</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/schooltiming" style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                    }>School Timing</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/trackadmission" style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                    }>Track Admission</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/karatecourse" style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                    }>Karate Course</NavLink>
                                  </li>
                                 
                                 
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                    

                    <NavLink to="/notice" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Notice</NavLink>
                    
                    <NavLink to="/career" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Career</NavLink>

                    <NavLink to="/contact" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Contact</NavLink>

                    <NavLink to="/studashboard" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Student Panel</NavLink>

                    <NavLink to="/teacherdashboard" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Teacher Panel</NavLink>

                    <Link className='appplybutton'>Apply Online <img src="./assets/images/icons/arrowright.png" alt="" /> </Link>
                </Nav>
                
                
            
            </div>
            </Navbar>
    </>
  )
}

export default NavbarMoblie