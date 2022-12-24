import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CommonButton = (props) => {
  

  return (
    <>
        <div className={`read-more navabrbutton ${props.displaynone} ${props.bannerbt} ${props.noticebt} ${props.eventbt} ${props.classChange}`}>
        <Button type="submit"><span></span>{props.buttonTitle}</Button>
        </div>
    </>
  )
}

export default CommonButton