import React from 'react'
import BasicInformation from '../components/billPage/desktop/BasicInformation'
import Headerpartbill from '../components/billPage/desktop/Headerpartbill'
import Sidebarleft from '../components/billPage/desktop/Sidebarleft'
import '../sassFiles/sassPages/billPage.scss'

const BillPage = () => {
  return (
    <>
        <div className="billpagemain">
            <div className="desktop ">
              <div className="desktopforbillpage">
                <Sidebarleft/>
                <div className="billright">
                    <Headerpartbill/>
                    
                </div>

              </div>
            </div>
        </div>
    </>
  )
}

export default BillPage