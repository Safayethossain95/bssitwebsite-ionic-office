import React,{useState,useEffect} from 'react'
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg';
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import SchoolTimingComp from '../components/SchoolTimingComp';
import '../sassFiles/sassPages/schoolTiming.scss'
import SchoolTimingComponentmb from '../components/SchoolTimingComponentmb';
import '../sassFiles/mobile/sassPages/schoolTimingPagemb.scss'
const SchoolTimingPage = () => {
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
        <div className="studenttimingpagemain">
          <div className="mobile">
              <NavbarMoblie/>
              <div className="schooltimingcompdiv">
                <SchoolTimingComponentmb/>
              </div>
              <FooterMobile/>
            </div>
            <div className="desktop">
                <Header/>                
                <Mynavbar/>
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="School Timing"/>                
                <div className="schooltimingcompdiv">
                    <SchoolTimingComp/>
                </div>
                <Footer/>               
            </div>
        </div>
    </>
  )
}

export default SchoolTimingPage