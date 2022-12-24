import React from 'react'

const HeadlineOfOtherPage = (props) => {
  return (
    <>
        <div className={`myheadline`} id={`${props.noticepagegapbalance}`}>
            <h1>{props.headline}</h1>
        </div>
    </>
  )
}

export default HeadlineOfOtherPage