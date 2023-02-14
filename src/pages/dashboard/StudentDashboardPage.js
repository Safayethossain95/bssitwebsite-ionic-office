import React,{useState} from 'react'
import StudentDashboardComp from '../../components/dashboardComponents/StudentDashboardComp'
import '../../sassFiles/sassPages/dashboards/srudentDashboards.scss'
import NavbarMoblie from '../../components/mobile/NavbarMoblie'
import FooterMobile from '../../components/mobile/FooterMobile'
import StuDashboardmb from '../../components/mobile/dashbordMobile/StuDashboardmb'
import '../../sassFiles/mobile/sassPages/dashboardsmb/stuDashboardmb.scss'
import StuDashNavbarSidebarmb from '../../components/mobile/StuDashNavbarSidebarmb'
import StuDashboardDocumenttab from '../../components/mobile/dashbordMobile/StuDashboardDocumenttab'
import StuDashboardNoticemb from '../../components/mobile/dashbordMobile/StuDashboardNoticemb'
import StuDashboardClassroutinemb from '../../components/mobile/dashbordMobile/StuDashboardClassroutinemb'
import StuDashboardAttmb from '../../components/mobile/dashbordMobile/StuDashboardAttmb'
import StuDashboardBillInfomb from '../../components/mobile/dashbordMobile/StuDashboardBillInfomb'
import StuDashboardResultmb from '../../components/mobile/dashbordMobile/StuDashboardResultmb'
import StuDashboardProfilemb from '../../components/mobile/dashbordMobile/StuDashboardProfilemb'
import StuDashboardExamRoutinemb from '../../components/mobile/dashbordMobile/StuDashboardExamRoutinemb'

const StudentDashboardPage = () => {

  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

  setBodyColor({color: "#f2f2f2"})

  const [tbvaluevar,settbvaluevar]=useState("dashboardTab")

  const tabchanger = (tabvalue)=>{
    settbvaluevar(tabvalue)
    
  }

  return (
    <>
        <div className="desktop">
            <div className="studentdashboardwrapper">
                <div className="overlayfordrpdwn"></div>
                <div className="stu_sidebar">
                    <StudentDashboardComp/>

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
              <StuDashboardBillInfomb/>
              
              :
              tbvaluevar=="resultTab"?
              <StuDashboardResultmb/>
              
              :
              tbvaluevar=="profileTab"?
              <StuDashboardProfilemb/>
              
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

export default StudentDashboardPage