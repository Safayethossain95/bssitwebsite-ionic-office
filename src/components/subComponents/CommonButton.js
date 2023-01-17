import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CommonButton = (props) => {
  

  return (
    <>
        <div data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000" className={`read-more navabrbutton ${props.displaynone} ${props.bannerbt} ${props.noticebt} ${props.eventbt} ${props.classChange}`}>
        <Button onClick={props.myclick} type="submit"><span></span>{props.buttonTitle}</Button>
        </div>
    </>
  )
}

export default CommonButton