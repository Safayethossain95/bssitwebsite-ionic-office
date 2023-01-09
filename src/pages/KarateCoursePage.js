import React from 'react'
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg';
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import KarateCoursecomp from '../components/KarateCoursecomp';
import '../sassFiles/sassPages/karateCoursePage.scss'
import '../sassFiles/mobile/sassPages/karateCoursemb.scss'
import KarateCompmb from '../components/mobile/karatepage/KarateCompmb';
const KarateCoursePage = () => {
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
         <div className="karatecoursepagemain">
            <div className="mobile">
                <NavbarMoblie/>
                <div className="karatecoursecompdiv">
                  <KarateCompmb/>
                </div>
                <FooterMobile/>
                </div>
                <div className="desktop">
                    <Header/>                
                    <Mynavbar/>
                    <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Karate Course"/>
                    <SmallHeadingMsg smalltitle="BSS is introducing an additional course on Karate. Our course will provide each student with the essential karate skills to succeed in our community and the life skills they need to succeed in school, at home and in life.
                    *Only BSS students are eligible to register for this course."/>
                    <div className="karatecoursecompdiv">
                        <KarateCoursecomp/>

                    </div>
                    <Footer/>               
                </div>
            </div>
    </>
  )
}

export default KarateCoursePage