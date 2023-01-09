import React from 'react'
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