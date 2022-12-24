import React from 'react'

const Wcuboxwithcontent = (props) => {
  return (
    
    <>
        <div className={`wcumobilebox ${props.classChange}`}>
            <div className="wcumobileboximgwrapper">
            <img style={{width:`${props.imgwidth}`}} src={props.imgsrc} alt="wcucardicon1.png" />

            </div>
            <div className="writingofwcu">
                <p>{props.mycontent}</p>
            </div>
        </div>
    </>
  )
}

export default Wcuboxwithcontent