import React,{useState,useEffect} from 'react'
import StudentAgeComp from '../components/StudentAgeComp';
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg';
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import '../sassFiles/sassPages/studentAgePage.scss'
import StudentAgePagemb from '../components/mobile/studentAgePage/StudentAgePagemb';

const StudentAgeCheckPage = () => {
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
        navbar.classList.add("sticky");
        
        
        
      } else {
        navbar2.classList.remove("sticky2");
        
        
      }
      if(window.pageYOffset===0){
        navbar.classList.remove("sticky");
        
      }
      if (window.pageYOffset >= 100) {
        navbar2.classList.add("sticky2shadow");
       
        
      } else {
        navbar2.classList.remove("sticky2shadow");
       
        
      }
    }
    window.onscroll = function() {myFunction()};
    
   
  },[])
      
  return (
    <>
        <div className="studentagepagemain">
          <div className="mobile">
              <NavbarMoblie/>
              <div className="studentagecompdiv">
              <StudentAgePagemb/>
              </div>
              <FooterMobile/>
            </div>
            <div className="desktop">
                <Header/>                
                <Mynavbar/>
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="STUDENT'S AGE"/>
                <SmallHeadingMsg smalltitle="Limit for The Following Class"/>
                <div className="studentagecompdiv">
                    <StudentAgeComp/>

                </div>
                <Footer/>               
            </div>
        </div>
    </>
  )
}

export default StudentAgeCheckPage