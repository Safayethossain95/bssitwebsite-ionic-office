import React,{useState} from 'react'

import LoginPageComp from '../components/LoginPageComp';
import LoginPagemb from '../components/mobile/LoginPagemb';
import NavbarMoblie from '../components/mobile/NavbarMoblie';
import FooterMobile from '../components/mobile/FooterMobile';
const Login = () => {
  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#fff"})
  
  return (
    <>
      <div className="desktop">
        <div className="authentication">
          <LoginPageComp/>
        </div>        
      </div>
      <div className="loginpage">
        <div className="mobile">          
          <NavbarMoblie/>
            <div className="logincompdiv">
            <LoginPagemb/>
            </div>
          <FooterMobile/>
        </div>
      </div>
    </>
  )
}

export default Login