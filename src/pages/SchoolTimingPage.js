import React from 'react'
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