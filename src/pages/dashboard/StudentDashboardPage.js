import React from 'react'
import StudentDashboardComp from '../../components/dashboardComponents/StudentDashboardComp'
import '../../sassFiles/sassPages/dashboards/srudentDashboards.scss'
const StudentDashboardPage = () => {
  return (
    <>
        <div className="desktop">
            <div className="studentdashboardwrapper">
                <div className="stu_sidebar">
                    <StudentDashboardComp/>

                </div>
            </div>
        </div>        
    </>

  )
}

export default StudentDashboardPage