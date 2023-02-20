import React,{useState,useEffect} from 'react'
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg';
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import '../sassFiles/sassPages/trackAdmissionPage.scss'
import TrackAmissionComp from '../components/TrackAmissionComp';
import TrackAdmissioncompmb from '../components/mobile/TrackAdmissioncompmb';
const TrackAdmissionPage = () => {
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
        <div className="trackadmissionpagemain">
            <div className="mobile">
                <NavbarMoblie/>
                <div className="trackadmissioncompdiv">
                  <TrackAdmissioncompmb/>
                </div>
                <FooterMobile/>
                </div>
                <div className="desktop">
                    <Header/>                
                    <Mynavbar/>
                    <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Track Admission"/>
                    <SmallHeadingMsg smalltitle="Track Your Application Details"/>
                    <div className="trackadmissioncompdiv">
                        <TrackAmissionComp/>

                    </div>
                    <Footer/>               
                </div>
            </div>
    </>
  )
}

export default TrackAdmissionPage