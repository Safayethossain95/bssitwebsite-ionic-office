import React from 'react'

const HeadlineOfOtherPage = (props) => {
  return (
    <>
        <div  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000" className={`myheadline`} id={`${props.noticepagegapbalance}`}>
            <h1>{props.headline}</h1>
        </div>
    </>
  )
}

export default HeadlineOfOtherPage