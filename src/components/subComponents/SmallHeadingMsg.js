import React from 'react'

const SmallHeadingMsg = (props) => {
  return (
    <>
        <div className="smallheadingmsg" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
            <div className="myContainer">
                <h5>{props.smalltitle}</h5>
            </div>
        </div>
    </>
  )
}

export default SmallHeadingMsg