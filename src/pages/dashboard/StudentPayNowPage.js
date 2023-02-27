import React,{useState,useEffect} from 'react'
import StudentDashboardComp from '../../components/dashboardComponents/StudentDashboardComp'
import '../../sassFiles/sassPages/dashboards/srudentDashboards.scss'
import NavbarMoblie from '../../components/mobile/NavbarMoblie'
import FooterMobile from '../../components/mobile/FooterMobile'
import StuDashboardmb from '../../components/mobile/dashbordMobile/StuDashboardmb'
import '../../sassFiles/mobile/sassPages/dashboardsmb/stuDashPayNowmb.scss'
import '../../sassFiles/sassPages/dashboards/studentDashboardinnerpages/studentDashPayNow.scss'
import StuDashNavbarSidebarmb from '../../components/mobile/StuDashNavbarSidebarmb'
import StuDashboardDocumenttab from '../../components/mobile/dashbordMobile/StuDashboardDocumenttab'
import StuDashboardNoticemb from '../../components/mobile/dashbordMobile/StuDashboardNoticemb'
import StuDashboardClassroutinemb from '../../components/mobile/dashbordMobile/StuDashboardClassroutinemb'
import StuDashboardAttmb from '../../components/mobile/dashbordMobile/StuDashboardAttmb'
import StuDashboardBillInfomb from '../../components/mobile/dashbordMobile/StuDashboardBillInfomb'
import StuDashboardResultmb from '../../components/mobile/dashbordMobile/StuDashboardResultmb'
import StuDashboardProfilemb from '../../components/mobile/dashbordMobile/StuDashboardProfilemb'
import StuDashboardExamRoutinemb from '../../components/mobile/dashbordMobile/StuDashboardExamRoutinemb'
import StuDashboardLeaveFormmb from '../../components/mobile/dashbordMobile/StuDashboardLeaveFormmb'
import StudentDashHelpSupportComp from '../../components/dashboardComponents/StudentDashHelpSupportComp'
import StuDashboardHelpSupportmb from '../../components/mobile/dashbordMobile/StuDashboardHelpSupportmb'
import StuDashPayNowComp from '../../components/dashboardComponents/StuDashPayNowComp'
import StuDashPayNowMb from '../../components/mobile/dashbordMobile/StuDashPayNowMb'

const StudentPayNowPage = () => {

  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#f2f2f2"})

  const [tbvaluevar,settbvaluevar]=useState("billInfoTab")

  const tabchanger = (tabvalue)=>{
    settbvaluevar(tabvalue)
    
  }

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
        <div className="desktop">
            <div className="studentdashboardwrapper">
                <div className="overlayfordrpdwn"></div>
                <div className="stu_sidebar">
                    <StuDashPayNowComp/>

                </div>
            </div>
        </div>  
        <div className="mobile">
          <div className="studentdashboardmobilewrapper">
            <StuDashNavbarSidebarmb func={tabchanger}/>
            {
              tbvaluevar=="dashboardTab"?
              
              <StuDashboardmb/>
              :
              tbvaluevar=="documentTab"?
              <StuDashboardDocumenttab/>
              
              :
              tbvaluevar=="noticeTab"?
              <StuDashboardNoticemb/>
              
              :
              tbvaluevar=="classRoutineTab"?
              <StuDashboardClassroutinemb/>
              
              :
              tbvaluevar=="attendanceTab"?
              <StuDashboardAttmb/>
              
              :
              tbvaluevar=="billInfoTab"?
              <StuDashPayNowMb/>
              
              :
              tbvaluevar=="resultTab"?
              <StuDashboardResultmb/>
              
              :
              tbvaluevar=="profileTab"?
              <StuDashboardHelpSupportmb/>
              
              :
              tbvaluevar=="leaveFormTab"?
              <StuDashboardLeaveFormmb/>
              
              :
              tbvaluevar=="examRoutineTab"?
              <StuDashboardExamRoutinemb/>
              
              :
              ""
            }
            
            <FooterMobile/>  

          </div>
        </div>      
    </>

  )
}

export default StudentPayNowPage