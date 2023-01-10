import React from 'react'

const FeeStructureDynamiccomp = (props) => {
  return (
    
    <>
        <div className="populatebox">
            <p>Admission Fee</p>
            <p>{props.admissionfeeprop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/=</p>
        </div>
        <div className="populatebox">
            <p>Billing Charge</p>
            <p>{props.billingchargeprop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/=</p>
        </div>
        <div className="populatebox">
            <p>Session Fee</p>
            <p>{props.sessionfeeprop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/=</p>
        </div>
        <div className="populatebox">
            <p>Tuition Fee</p>
            <p>{props.tuitionfeeprop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/=</p>
        </div>
        <div className="populatebox populateboxtotal">
            <p>Total</p>
            <p>{(props.admissionfeeprop+props.billingchargeprop+props.sessionfeeprop+props.tuitionfeeprop).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/=</p>
        </div>
    </>
  )
}

export default FeeStructureDynamiccomp