import React from 'react'
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

  $(function noticehover() {
      
    let x,y;
    $(".noticebox").on('mouseenter', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
    $(".noticebox").on('mouseout', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
  });
  
 
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