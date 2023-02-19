import React,{useEffect} from 'react'
import Header from '../components/Header'
import LatestNoticeNoticePage from '../components/LatestNoticeNoticePage'
import Mynavbar from '../components/Navbar'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import UpcomingPartNoticePage from '../components/UpcomingPartNoticePage'
import '../sassFiles/sassPages/noticePage.scss'
import $ from 'jquery'
import OlderNoticePartNoticePage from '../components/OlderNoticePartNoticePage'
import Footer from '../components/Footer'
import ScrollTop from '../components/subComponents/ScrollTop'
import NavbarMoblie from '../components/mobile/NavbarMoblie'

import '../sassFiles/mobile/sassPages/noticePage.scss'
import LatestPartMb from '../components/mobile/noticePage/LatestPartMb'
import UpcomingPartMb from '../components/mobile/noticePage/UpcomingPartMb'
import OlderPartMb from '../components/mobile/noticePage/OlderPartMb'
import FooterMobile from '../components/mobile/FooterMobile'
const NoticePage = () => {
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

      <div className="mobile">
        <NavbarMoblie/>        
        <LatestPartMb/>
        <UpcomingPartMb/>
        <OlderPartMb/>
        <FooterMobile/>
      </div>
      <div className="desktop">
        <Header/>
        <Mynavbar/>
        <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Notice"/>
        <LatestNoticeNoticePage/>
        <UpcomingPartNoticePage/>
        <OlderNoticePartNoticePage/>
        <ScrollTop/>
        <Footer/>
      </div>
        
    </>
  )
}

export default NoticePage