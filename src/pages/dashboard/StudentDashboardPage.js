import React,{useState} from 'react'
import StudentDashboardComp from '../../components/dashboardComponents/StudentDashboardComp'
import '../../sassFiles/sassPages/dashboards/srudentDashboards.scss'
import NavbarMoblie from '../../components/mobile/NavbarMoblie'
import FooterMobile from '../../components/mobile/FooterMobile'
import StuDashboardmb from '../../components/mobile/dashbordMobile/StuDashboardmb'
import '../../sassFiles/mobile/sassPages/dashboardsmb/stuDashboardmb.scss'
import StuDashNavbarSidebarmb from '../../components/mobile/StuDashNavbarSidebarmb'
import StuDashboardDocumenttab from '../../components/mobile/dashbordMobile/StuDashboardDocumenttab'

const StudentDashboardPage = () => {

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
              ""
            }
            
            <FooterMobile/>  

          </div>
        </div>      
    </>

  )
}

export default StudentDashboardPage