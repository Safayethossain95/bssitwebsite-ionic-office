import React,{useEffect} from 'react'
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
  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#fff"})
  useEffect(()=>{
  
    var navbar2 = document.getElementById("navbarmini");
    var navbar = document.getElementById("mynavbar");
    
    
    
    var sticky = navbar2.offsetTop;
  
    
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar2.classList.add("sticky2");
        
        
        
        
      } else {
        navbar2.classList.remove("sticky2");
        
        
      }
      if(window.pageYOffset > 99){
        navbar.classList.add("sticky");
      }else{
        navbar.classList.remove("sticky");
      }
    
      if (window.pageYOffset >= 30) {
        navbar2.classList.add("sticky2shadow");
       
        
      } else {
        navbar2.classList.remove("sticky2shadow");
       
        
      }
    }
    window.onscroll = function() {myFunction()};
    
   
  },[])
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