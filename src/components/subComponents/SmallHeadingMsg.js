import React from 'react'

const SmallHeadingMsg = (props) => {
  return (
    <>
        <div className="smallheadingmsg">
            <div className="myContainer">
                <h5>{props.smalltitle}</h5>
            </div>
        </div>
    </>
  )
}

export default SmallHeadingMsg