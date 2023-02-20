import React,{useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import SearchpartCareer from '../components/SearchpartCareer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg'
import SmallParagraph from '../components/subComponents/SmallParagraph'
import '../sassFiles/sassPages/careerPage.scss'
import CareerComponent from '../components/mobile/careerPage/CareerComponent'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import '../sassFiles/mobile/sassPages/careerPage.scss'
const CareerPage = () => {
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
        <div className="careerpagemain">
          <div className="mobile">
              <NavbarMoblie/>
              <CareerComponent/>
              <FooterMobile/>
            </div>
            <div className="desktop">
                <Header/>                
                <Mynavbar/>
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Career"/>
                <SmallHeadingMsg smalltitle="Build Your Career"/>
                <SmallParagraph/>
                <SearchpartCareer/> 
                <Footer/>               
            </div>
        </div>
        
    </>
  )
}

export default CareerPage