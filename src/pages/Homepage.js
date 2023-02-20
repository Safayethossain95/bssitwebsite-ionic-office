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

  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#fff"})

useEffect(()=>{
 
  var navbar2 = document.getElementById("navbarmini");
  var navbar = document.getElementById("mynavbar");
  var bnx = document.getElementById("bntxinner");
  
  
  var sticky = navbar2.offsetTop;

  
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar2.classList.add("sticky2");
      
      bnx.classList.add("headlinemargin");
      
      
    } else {
      navbar2.classList.remove("sticky2");
      
      
    }
    if(window.pageYOffset > 99){
      navbar.classList.add("sticky");
    }else{
      navbar.classList.remove("sticky");
    }
    if(window.pageYOffset===0){
      
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

          <Header/>
          <Mynavbar/>                    
            <Banner/>                    
            <AboutUs/>          
                    
          <WhyChooseUs/>                    
          <EventAndNews/>
                    

          <LearnFromAnywhere/>          
          <ScrollTop/>
          <Footer/>

        </div>
       

    </>
  )
}

export default Homepage