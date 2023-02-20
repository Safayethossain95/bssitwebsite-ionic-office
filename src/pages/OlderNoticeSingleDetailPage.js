import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { oldernoticedata } from '../utils/NoticePageApi'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../sassFiles/mobile/sassPages/noticepagesingled.scss'
const OlderNoticeSingleDetailPage = () => {

  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#fff"})
    let {id} = useParams()
    console.log(id)

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
        <div className="mobile">
        <NavbarMoblie/>        
        <div className="mobilecontainer">
        {
           oldernoticedata.map((item,key)=>{
            if(id==item.id){
                return(
                    <div className="heading">
                        <h3>{item.heading}</h3>
                        <div className="datewrap d-flex">
                            <img style={{width:"20px",height:"20px"}} src="./assets/images/icons/cal.png" alt="calendericon" />
                            <p className='gapadjustmargin'>{item.publishdate}</p>
                        </div>
                        <p>{item.paragraph}</p>
                    </div>
                )
            }
           })
        }
        </div>
        <FooterMobile/>
      </div>
      <div className="desktop">
            <Header/>                
            <Mynavbar/>
            <div className="myContainer noticepagesinglecompdesk">
            {
            oldernoticedata.map((item,key)=>{
                if(id==item.id){
                    return(
                        <div className="heading">
                            <h3>{item.heading}</h3>
                            <div className="datewrap d-flex">
                                <img style={{width:"20px",height:"20px"}} src="./assets/images/icons/cal.png" alt="calendericon" />
                                <p className='gapadjustmargin'>{item.publishdate}</p>
                            </div>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                }
            })
            }
            </div>
            <Footer/>
      </div>
    </>
  )
}

export default OlderNoticeSingleDetailPage