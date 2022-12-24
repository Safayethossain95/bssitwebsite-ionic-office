import React,{useRef} from 'react'
import HeadlineOfOtherPage from './subComponents/HeadlineOfOtherPage'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button} from 'react-bootstrap';
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import CommonButton from './subComponents/CommonButton';
const GalleryAboutPage = () => {

    const slider = React.useRef(null);
    
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false
          };
  return (
    <>
        <div className="myContainer">
            <div className="galleryaboutpage" style={{padding:"0 50px"}}>
            <HeadlineOfOtherPage headline="Gallery"/>

            <div className="gallery-slider">
                <button className='prevbutton' onClick={() => slider?.current?.slickPrev()}><BsArrowLeft/></button>
                <button className="nextbutton" onClick={() => slider?.current?.slickNext()}><BsArrowRight/></button>

                    <Slider ref={slider} {...settings}>
                    <div>
                        <div className="galimg">
                            <img src="./assets/images/gallerybaoutpageimg1.png" alt="gallerybaoutpageimg1" />
                        </div>
                    </div>
                    <div>
                        <div className="galimg">
                            <img src="./assets/images/galleryaboutpageimg2.png" alt="galleryaboutpageimg2" />
                        </div>
                        
                    </div>
                    <div>
                    <div className="galimg">
                            <img src="./assets/images/galleryaboutpageimg3.png" alt="galleryaboutpageimg2" />
                        </div>
                    </div>
                    <div>
                    <div className="galimg">
                            <img src="./assets/images/galleryaboutpageimg2.png" alt="galleryaboutpageimg2" />
                        </div>
                    </div>
                 
                    </Slider>

            </div>
            <div className="gallerybuttonviewall">
                <CommonButton buttonTitle="View All" />
            </div>
            
           
            </div>
        </div>
    </>
  )
}

export default GalleryAboutPage