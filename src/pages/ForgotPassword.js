import React,{useState} from 'react'

import '../sassFiles/sassPages/forgotPage.scss'
import ForgotPasswordComp from '../components/ForgotPasswordComp';
import ForgotPassCompmb from '../components/mobile/forgotPassPage/ForgotPassCompmb';
import '../sassFiles/mobile/sassPages/forgotPassPagemb.scss'
import NavbarMoblie from '../components/mobile/NavbarMoblie';
import FooterMobile from '../components/mobile/FooterMobile';
const ForgotPassword = () => {
    

  
  return (
    <>
    <div className="desktop">
        <ForgotPasswordComp/>
    </div>
        <div className="forgotpasspage">
          <div className="mobile">
            <NavbarMoblie/>
            <ForgotPassCompmb/>
            <FooterMobile/>
          </div>

        </div>
    </>
  )
}

export default ForgotPassword