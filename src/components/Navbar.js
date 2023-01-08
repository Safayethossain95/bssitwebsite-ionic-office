import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
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
            
            <div className="headerwrapper">
                <Navbar.Brand>
                    <Link to="/"><img src="./assets/images/Logo.svg" alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <NavLink to="/aboutus" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >About Us</NavLink>
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
                    
                </Nav>
                <CommonButton myclick={handleadmissionclick} buttonTitle='Admission'/>
                </Navbar.Collapse>
            
            </div>
            </Navbar>
    </>
  )
}

export default Mynavbar