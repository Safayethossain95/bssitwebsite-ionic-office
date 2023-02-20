import React,{useEffect} from 'react'
import $ from 'jquery';
import AddressCards from '../components/AddressCards'
import GalleryAboutPage from '../components/GalleryAboutPage'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import OurMethodAboutPage from '../components/OurMethodAboutPage'
import OurMissionAboutUs from '../components/OurMissionAboutUs'
import OurObjectiveAboutUsPage from '../components/OurObjectiveAboutUsPage'
import OurVisionAboutUsPage from '../components/OurVisionAboutUsPage'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import TransportServiceAboutUsPage from '../components/TransportServiceAboutUsPage'
import Footer from '../components/Footer'
import ScrollTop from '../components/subComponents/ScrollTop'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import AboutUsBreadCrumb from '../components/mobile/AboutUsBreadCrumb'
import OurMethodAboutPageMobile from '../components/mobile/OurMethodAboutPageMobile'
import OurVisionAboutPageMb from '../components/mobile/OurVisionAboutPageMb'
import OurObjectivesPartAboutpageMobile from '../components/mobile/OurObjectivesPartAboutpageMobile'
import TransportServicePartMb from '../components/mobile/TransportServicePartMb'
import AddresspartSliderMb from '../components/mobile/AddresspartSliderMb'
import GalleryPartAboutPageMb from '../components/mobile/GalleryPartAboutPageMb'
import FooterMobile from '../components/mobile/FooterMobile'
import '../sassFiles/style.scss'
const AboutUsPage = () => {
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
          <AboutUsBreadCrumb/>
          <OurMethodAboutPageMobile/>
          <OurVisionAboutPageMb/>
          <OurObjectivesPartAboutpageMobile/>
          <TransportServicePartMb/>
          <AddresspartSliderMb/>
          <GalleryPartAboutPageMb/>
          <FooterMobile/>
        </div>
        <div className="aboutpage desktop">
            <Header/>
            <Mynavbar/>
            <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="About Us"/>
            <OurMissionAboutUs/>
            <OurMethodAboutPage/>
            <OurVisionAboutUsPage/>
            <OurObjectiveAboutUsPage/>
            <TransportServiceAboutUsPage/>
            <AddressCards/>
            <GalleryAboutPage/>
            <ScrollTop/>
            <Footer/>
        </div>
    </>
  )
}

export default AboutUsPage