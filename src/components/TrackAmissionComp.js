import React from 'react'
import CommonButton from './subComponents/CommonButton'
import {Row,Col} from 'react-bootstrap'
const TrackAmissionComp = () => {    
    const handletrackadmissionsearch=()=>{
    }
  return (
    <>
        <div className="basicinfopopulate">                            
            <div className="searchandsearchbutton m-auto d-flex flex-column" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                <p>Search Track Number</p>
                <div className="flexwrapper d-flex">
                    <input type="text" />
                    <CommonButton myclick={handletrackadmissionsearch} buttonTitle="Search"/>
                </div>
            </div>               
        </div>
    </>
  )
}

export default TrackAmissionComp