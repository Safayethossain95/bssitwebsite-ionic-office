import React from 'react'
import AdmissionPageComp from '../components/AdmissionPageComp'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import '../sassFiles/sassPages/admissionPage.scss'
import AdmissionCompMb from '../components/mobile/admissionPage/AdmissionCompMb'
import '../sassFiles/mobile/sassPages/admissionPagemb.scss'
const AdmissionPage = () => {
  return (
    <>
        <div className="admissionpagemain">
          <div className="mobile">
              <NavbarMoblie/>
              <AdmissionCompMb/>
              <FooterMobile/>
            </div>
            <div className="desktop">
                <Header/>                
                <Mynavbar/>
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Admission Information"/>
                <AdmissionPageComp/>
                <Footer/>               
            </div>
        </div>
    </>
  )
}

export default AdmissionPage