import React from 'react'
import Slider from "react-slick";
const AddresspartSliderMb = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
      };
  return (
    <>
        <div className="addresspartslidermb">
        <Slider {...settings}>
                            
        <div className="addresscard">
            <div className="addresscardcontent">
                <h3>Corporate Office</h3>
                <p>13, Larmini Street Wari, Dhaka
                88027115628, 01774977206
                transport@britishstandardschool.com</p>
            </div>
        </div>
        <div className="addresscard">
            <div className="addresscardcontent">
                <h3>Corporate Office</h3>
                <p>13, Larmini Street Wari, Dhaka
                88027115628, 01774977206
                transport@britishstandardschool.com</p>
            </div>
        </div>
        <div className="addresscard">
            <div className="addresscardcontent">
                <h3>Corporate Office</h3>
                <p>13, Larmini Street Wari, Dhaka
                88027115628, 01774977206
                transport@britishstandardschool.com</p>
            </div>
        </div>
    
    </Slider>
        </div>
    </>
  )
}

export default AddresspartSliderMb