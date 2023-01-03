import React from 'react'
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
const AboutUsPage = () => {
  // useEffect(()=>{
    
    
  //   var navbar = document.getElementById("navbar");
  //   var headline = document.getElementById("myheadline");
  //   var sticky = navbar.offsetTop;
    
  //   function myFunction() {
  //     if (window.pageYOffset >= sticky) {
  //       navbar.classList.add("sticky")
  //       headline.classList.add("headlinemargin")
  //     } else {
  //       navbar.classList.remove("sticky");
  //       headline.classList.remove("headlinemargin")
  //     }
  //   }
  //   window.onscroll = function() {myFunction()};
    

  // })
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