import React from 'react'
import { useParams } from 'react-router-dom'
import { noticedata } from '../utils/Homepage'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../sassFiles/mobile/sassPages/noticepagesingled.scss'
const NoticePageSingleDetail = () => {


    let {id} = useParams()
    console.log(id)
    
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
    
    if(window.pageYOffset==50){
      navbar.classList.remove("sticky");
      myheadlineother.classList.remove("margintop62");
      
    }
    
      
  }
  window.onscroll = function() {myFunction()};
  return (
    <>
        <div className="mobile">
        <NavbarMoblie/>        
        <div className="mobilecontainer">
        {
           noticedata.map((item,key)=>{
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
            noticedata.map((item,key)=>{
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

export default NoticePageSingleDetail