import React from 'react'
import BillEntryComponent from '../components/billPage/desktop/BillEntryComponent'
import Sidebarleft from '../components/billPage/desktop/Sidebarleft'
import '../sassFiles/sassPages/billEntry.scss'
const BillEntryPage = () => {
  return (
    <>
        <div className="billentrymain">
            <div className="desktop ">       
            <div className="desktopforbillEntry">
                <Sidebarleft/>
                  <div className="billright">
                      <BillEntryComponent/>                      
                  </div>
            </div>         
                
            </div>
        </div>
    </>
  )
}

export default BillEntryPage