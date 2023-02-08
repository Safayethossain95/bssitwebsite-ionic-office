import React from 'react'
import TeacherDashboardComp from '../../components/dashboardComponents/TeacherDashboardComp'
import '../../sassFiles/sassPages/dashboards/srudentDashboards.scss'
const TeacherDashboardPage = () => {
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
    </>
  )
}

export default TeacherDashboardPage