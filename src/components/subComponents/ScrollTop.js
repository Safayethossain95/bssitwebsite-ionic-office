import React,{useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)
   
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        }
        else if (scrolled <= 300){
              setVisible(false)
        }
      };
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
      };
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
    <div className={`scrolltop ${visible?"visibleclass":""}`}>
      <img src="./assets/images/ScrolltoTopIcon.svg" onClick={scrollToTop}
        style={{display: visible ? 'block' : 'none'}}  alt="ScrolltoTopIcon.svg" />
        {/* <FaArrowCircleUp /> */}
    </div>
    </>
  )
}

export default ScrollTop