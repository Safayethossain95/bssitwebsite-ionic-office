import React from 'react'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import ContactPageComp from '../components/ContactPageComp'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import '../sassFiles/sassPages/contactPage.scss'
import ContactPageComponent from '../components/mobile/contactPage/ContactPageComponent'
import '../sassFiles/mobile/sassPages/contactPage.scss'
const ContactPage = () => {
  return (
    <>
        <div className="contactpagemain">
          <div className="mobile">
              <NavbarMoblie/>
              <div className="contactpagecomponentdivmb">
              <ContactPageComponent/>

              </div>
              <FooterMobile/>
            </div>
            <div className="desktop">
                <Header/>                
                <Mynavbar/>
                <HeadlineOfOtherPage  headline="Contact"/>
                <div className="contactpagecomponentdiv">
                    <ContactPageComp/>

                </div>
                <Footer/>               
            </div>
        </div>
    </>
  )
}

export default ContactPage