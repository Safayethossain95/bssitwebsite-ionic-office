import React from 'react'
import Sidebarleft from '../components/billPage/desktop/Sidebarleft'
import StudentAdmissionEntryComponent from '../components/billPage/desktop/StudentAdmissionEntryComponent'
const StudentAdmissionEntryBillPage = () => {
  return (
    <>
         <div className="billentrymain">
            <div className="desktop ">       
            <div className="desktopforbillEntry">
                <Sidebarleft/>
                  <div className="billright">
                      <StudentAdmissionEntryComponent/>                     
                  </div>
            </div>         
                
            </div>
        </div>
    </>
  )
}

export default StudentAdmissionEntryBillPage