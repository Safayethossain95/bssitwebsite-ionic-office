import React,{useState,useEffect} from 'react'
import TeacherDashboardComp from '../../components/dashboardComponents/TeacherDashboardComp'

import '../../sassFiles/mobile/sassPages/dashboardsmb/TeachDashmb.scss'
import StuDashboardDocumenttab from '../../components/mobile/dashbordMobile/StuDashboardDocumenttab'
import FooterMobile from '../../components/mobile/FooterMobile'
import TeacherDashSidebarmb from '../../components/mobile/TeacherDashSidebarmb'
import TeaDashmb from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaDashmb'
import TeaClassDashTab from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaClassDashTab'
import TeaCurriculumTab from '../../components/mobile/dashbordMobile/TeaCurriculumTab'
import TeaResultEntryTab from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaResultEntryTab'
import TeaAttdDashTab from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaAttdDashTab'
import TeaSalaryDashTab from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaSalaryDashTab'
import TeaLeaveFormTab from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaLeaveFormTab'
import TeaProfileDashTab from '../../components/mobile/dashbordMobile/TeacherDashboard/TeaProfileDashTab'
const TeacherDashboardPage = () => {
  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#f2f2f2"})

  const [tbvaluevar,settbvaluevar]=useState("dashboardTab")

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

    <div className="desktop">
        <div className="studentdashboardwrapper">
            <div className="overlayfordrpdwn"></div>
            <div className="stu_sidebar">
                <TeacherDashboardComp/>

            </div>
        </div>
    </div>  
    <div className="mobile">
          <div className="teacherdashboardmobilewrapper">
            <div className="overlayfordrpdwn"></div>
            <TeacherDashSidebarmb func={tabchanger}/>
            {
              tbvaluevar=="dashboardTab"?
              
              <TeaDashmb/>
              :
              tbvaluevar=="classRoutineTab"?
              <TeaClassDashTab/>
              
              :
              tbvaluevar=="curriculumTab"?
              <TeaCurriculumTab/>
              
              :
              tbvaluevar=="resultentryTab"?
              <TeaResultEntryTab/>
              
              :
              tbvaluevar=="attendanceTab"?
              <TeaAttdDashTab/>
              
              :
              tbvaluevar=="salaryinfoTab"?
              <TeaSalaryDashTab/>
              
              :
              tbvaluevar=="leaveformTab"?
              <TeaLeaveFormTab/>
              
              :
              tbvaluevar=="profileTab"?
              <TeaProfileDashTab/>
              
              :
              
              ""
            }
            
            <FooterMobile/>  

          </div>
        </div>       
    </>
  )
}

export default TeacherDashboardPage