import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'

import {NavLink,Link,useNavigate} from 'react-router-dom';

const Mynavbar = () => {

  let navigate=useNavigate()

  const handleadmissionclick=()=>{
    navigate('/admission')
  }
    let activeStyle = {
    color:"#ED1C24"
  };
  
  // useEffect(()=>{
    
    
  //   var navbar = document.getElementById("mynavbar");
  //   var homepagemargin = document.getElementById("bntxinner");
    
  //   var sticky2 = navbar.offsetTop;
    
  //   function myFunction2() {
  //     if (window.pageYOffset >= 62) {
  //       $(".mynavbar").addClass("sticky")
  //       // navbar.classList.add("sticky")
  //       // navbar.className += " sticky"
  //       homepagemargin.classList.add("headlinemargin")
        
  //     } else {
  //       navbar.classList.remove("sticky");
  //       homepagemargin.classList.remove("headlinemargin")
        
  //     }
  //   }
  //   window.onscroll = function() {myFunction2()};
    

  // },[])
  return (
    <>
        
        <Navbar id="mynavbar" className="mynavbar" expand="lg">
        <div className="myContainer">
            <div className="headerwrapper">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <NavLink to="/aboutus" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >About Us
                    </NavLink>

                    <NavLink to="/admission" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Admission
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

                    <NavLink to="/login" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Student Panel</NavLink>

                    <NavLink to="/teacherspanel" style={({ isActive }) =>
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