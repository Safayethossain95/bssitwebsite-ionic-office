import React from 'react'
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg';
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import FeeStructureComp from '../components/FeeStructureComp';
import '../sassFiles/sassPages/feeStructures.scss'
import FeeStructureCompmb from '../components/mobile/FeeStructureCompmb';
import '../sassFiles/mobile/sassPages/feeStructurePagemb.scss'
const FeeStructurePage = () => {
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
           <div className="feestructurepagemain">
            <div className="mobile">
                <NavbarMoblie/>
                <div className="feestructurecompdiv">
                  <FeeStructureCompmb/>
                </div>
                <FooterMobile/>
                </div>
                <div className="desktop">
                    <Header/>                
                    <Mynavbar/>
                    <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Fee Stucture"/>
                    <SmallHeadingMsg smalltitle="Session : [July 2022 - June 2023]"/>
                    <div className="feestructurecompdiv">
                    <FeeStructureComp/>
                    

                    </div>
                    <Footer/>               
                </div>
            </div>
    </>
  )
}

export default FeeStructurePage