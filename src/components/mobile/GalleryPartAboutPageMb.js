import React from 'react'
import Slider from "react-slick";
const GalleryPartAboutPageMb = () => {
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
    
        <div className="gallerypartaboutpagemb">
        <div className="heading">
            <h4>Gallery</h4>
        </div>
        <Slider {...settings}>
                            
            <div className="galimgslide">
                <img src="./assets/images/eventcardpic5.png" alt="" />
            </div>
            <div className="galimgslide">
                <img src="./assets/images/eventcardpic5.png" alt="" />
            </div>
            <div className="galimgslide">
                <img src="./assets/images/eventcardpic5.png" alt="" />
            </div>
            <div className="galimgslide">
                <img src="./assets/images/eventcardpic5.png" alt="" />
            </div>
        
        </Slider>
        </div>
    </>
  )
}

export default GalleryPartAboutPageMb