import React from 'react'
import '../../../sassFiles/customComponentSassfiles/pillSmall.scss'
const PillSmall = (props) => {
  return (
    <>
        <div className={`iampillsmall ${props.class}`} style={{background:`${props.bg}`}}>
            <p  style={{fontSize:`${props.fontsize}`,color:`${props.textcolor}`}}>{props.text}</p>
        </div>
    </>
  )
}

export default PillSmall