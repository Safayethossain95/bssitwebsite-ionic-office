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
  function myFunction() {
    var navbar = document.getElementById("mynavbar");
    if(myheadlineother == !null){
      var myheadlineother = document.getElementById("noticepagegapbalance")

    }else{
      myheadlineother=document.getElementById("noticepagegapbalance")
    }
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      
      navbar.classList.add("sticky");
      myheadlineother.classList.add("margintop62");
      
      
      
    }
    
    if(window.pageYOffset==0){
      navbar.classList.remove("sticky");
      myheadlineother.classList.remove("margintop62");
      
    }
    
      
  }
  window.onscroll = function() {myFunction()};
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
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Contact"/>
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