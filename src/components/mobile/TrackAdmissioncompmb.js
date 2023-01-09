import React from 'react'
import '../../sassFiles/mobile/sassPages/trackAdmissionPagemb.scss'
import CommonButton from '../subComponents/CommonButton'
const TrackAdmissioncompmb = () => {
    const handletracksearchmb=()=>{
        
    }
  return (
    <>
        <div className="mobilecontainer">
            <div className="heading">
                <h4>
                    Track Admission
                </h4>
                <p>
                    Track Your Application Details
                </p>
            </div>
            <div className="searchpart">
                <h5>Search Track Number</h5>

                <input type="text" placeholder='Enter Track Number'/>
                <div className="mybutton">
                <CommonButton onClick={handletracksearchmb} buttonTitle="Search"/>

                </div>
            </div>
        </div>
    </>
  )
}

export default TrackAdmissioncompmb