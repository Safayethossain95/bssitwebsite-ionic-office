import React from 'react'
import StudentAgeComp from '../components/StudentAgeComp';
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg';
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import '../sassFiles/sassPages/studentAgePage.scss'
import StudentAgePagemb from '../components/mobile/studentAgePage/StudentAgePagemb';

const StudentAgeCheckPage = () => {
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
        <div className="studentagepagemain">
          <div className="mobile">
              <NavbarMoblie/>
              <div className="studentagecompdiv">
              <StudentAgePagemb/>
              </div>
              <FooterMobile/>
            </div>
            <div className="desktop">
                <Header/>                
                <Mynavbar/>
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="STUDENT'S AGE"/>
                <SmallHeadingMsg smalltitle="Limit for The Following Class"/>
                <div className="studentagecompdiv">
                    <StudentAgeComp/>

                </div>
                <Footer/>               
            </div>
        </div>
    </>
  )
}

export default StudentAgeCheckPage