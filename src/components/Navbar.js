import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {BsChevronDown} from 'react-icons/bs'
import {NavLink,Link,useNavigate} from 'react-router-dom';

const Mynavbar = () => {

  let navigate=useNavigate()

  const handleadmissionclick=()=>{
    navigate('/admission')
  }
    let activeStyle = {
    color:"#ED1C24"
  };
  
  return (
    <>
        
        <Navbar id="mynavbar" className="mynavbar" expand="lg">
        <div className="myContainer">
            <div className="headerwrapper">
                <Navbar.Brand href="#" className="smallbrandv"><img src="./assets/images/logo/bsslogostudashboard.png" alt="bsslogostudashboard.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <NavLink to="/aboutus" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >About Us
                    </NavLink>

                    <NavLink className="admissionclass" to="/admission" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Admission <BsChevronDown/>

                    <div className="admissionmenu">
                      <ul>
                        <li>
                          <NavLink to="/studentagecheck" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>Candidate Age</NavLink>
                        </li>
                        <li>
                          <NavLink to="/feestructure" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>Fee Structure</NavLink>
                        </li>
                        <li>
                          <NavLink to="/abc" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>Document Requirements</NavLink>
                        </li>
                        <li>
                          <NavLink to="/schooltiming" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>School Timing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/trackadmission" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>Track Admission</NavLink>
                        </li>
                        <li>
                          <NavLink to="/karatecourse" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>Karate Course</NavLink>
                        </li>
                        <li>
                          <NavLink to="/abc" style={({ isActive }) =>
                      isActive ? activeStyle : undefined}>Transport Service</NavLink>
                        </li>
                      </ul>
                    </div>
                    </NavLink>

                    <NavLink to="/notice" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Notice
                    </NavLink>
                    
                    <NavLink to="/career" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Career
                    </NavLink>

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
                    
                </Nav>
                
                </Navbar.Collapse>
                <Link className='appplybutton'>Apply Online <img src="./assets/images/icons/arrowright.png" alt="" /> </Link>
            </div>
        </div>
            </Navbar>
    </>
  )
}

export default Mynavbar