import React,{useEffect} from 'react'
import Mynavbar from '../components/Navbar'
import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Notice from '../components/Notice'
import WhyChooseUs from '../components/WhyChooseUs'
import LearnFromAnywhere from '../components/LearnFromAnywhere'
import EventAndNews from '../components/EventAndNews'
import Footer from '../components/Footer'
import $ from 'jquery';
import ScrollTop from '../components/subComponents/ScrollTop'
import NavbarMoblie from './../components/mobile/NavbarMoblie';
import BannerMobile from '../components/mobile/BannerMobile'
import AboutUsMobile from '../components/mobile/AboutUsMobile'
import WhyChooseUSMobile from '../components/mobile/WhyChooseUSMobile'
import EventAndNewsMobile from '../components/mobile/EventAndNewsMobile'
import LearnFromAnywhereMobile from '../components/mobile/LearnFromAnywhereMobile'
import FooterMobile from '../components/mobile/FooterMobile'
import NoticeMobile from '../components/mobile/NoticeMobile'
import '../sassFiles/style.scss'
import '../sassFiles/mobile/sassPages/homepage.scss'


// import { isPlatform } from '@ionic/react';

const Homepage = () => {

  

useEffect(()=>{
  // $(".navbar-toggler").click(function(){
         
  //   $(".mynavbarnav").toggleClass("show");
  //   $(".mynavbarmb").toggleClass("navbar-white");
  // })
  
  // $(document).ready(function(){
  //   $('#nav-icon4').click(function(){
  //     $(this).toggleClass('open');
  //   });

    
  // });
 
  
  

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
  var navbar2 = document.getElementById("navbarmini");
  var navbar = document.getElementById("mynavbar");
  var bnx = document.getElementById("bntxinner");
  
  
  var sticky = navbar2.offsetTop;

  
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar2.classList.add("sticky2");
      navbar.classList.add("sticky");
      bnx.classList.add("headlinemargin");
      
      
    } else {
      navbar2.classList.remove("sticky2");
      
      
    }
    if(window.pageYOffset===0){
      navbar.classList.remove("sticky");
      bnx.classList.remove("headlinemargin");
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
          <BannerMobile/>
          <AboutUsMobile/>
          <WhyChooseUSMobile/>
          <NoticeMobile title="Notice"/>
          <EventAndNewsMobile/>
          <LearnFromAnywhereMobile/>
          <FooterMobile/>
        </div>
        <div className="desktop">
          <section>

          <Header/>
          <Mynavbar/>
          </section>
          <section>
            <Banner/>
          </section>
          <section>
            <AboutUs/>
          </section>
          
          <section>
          <WhyChooseUs/>
          </section>
          <section>
          <EventAndNews/>

          </section>
          <section>

          <LearnFromAnywhere/>
          </section>
          <ScrollTop/>
          <Footer/>

        </div>
       

    </>
  )
}

export default Homepage