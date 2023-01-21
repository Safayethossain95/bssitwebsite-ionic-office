import React from 'react'

import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';
const BannerMobile = () => {
    let navigate = useNavigate()
    const handleredirecttoadmission=()=>{
        navigate('/admission')
    }
  return (
    <>
    <div className="fullwidth">
    <div className="bannermobilebg">
            <img src="./assets/images/mobile/BG_Logo_full.png" alt="BG_Logo_full" />
        </div>
        <div className="mobilecontainer2">
        <div className="bannermobile">
        
        <Parallax  bgImage="./assets/images/hompagebannerimage/banner1.png" bgImageAlt="the cat" strength={500}>
        
        <div className="bluroverlay">

                </div>
                <div className="content">
                    <div className="mobilecontainer4">
                <div className="bannermobileimgoverlay">
                    <div className="textpartov">
                    <h4>Welcome to</h4>
                    <p>British Standard School</p>

                    </div>
                    <div className="textparagraph">
                        <p>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>
                    </div>
                   
                    </div>

                    </div>

                </div>
        </Parallax>
        
            {/* <div className="bannermobileimg">
                <img src="./assets/images/mobile/homepagemobilemainimg.png" alt="homepagemobilemainimg" />
                <div className="bluroverlay">

                </div>
                <div className="bannermobileimgoverlay">
                    <div className="textpartov">
                    <h4>Welcome to</h4>
                    <p>British Standard School</p>

                    </div>
                    <div className="textparagraph">
                        <p>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>
                    </div>
                    <CommonButton buttonTitle="Learn More"/>
                </div>


            </div> */}
            <div className="mobilecontainer">

            <div className="bannercardssmall">
                <div className="bannercardsmallsinglebox">
                    <img src="./assets/images/mobile/smallvectorbanner2.png" alt="" />
                    
                    <p><span>18+</span> Years Since Founded in 2004</p>
                </div>
                <div className="bannercardsmallsinglebox smgap1">
                    <img src="./assets/images/mobile/smallvectorbanner1.png" alt="" />
                    
                    <p><span>1000+</span> students from all over Dhaka city</p>
                </div>
                <div className="bannercardsmallsinglebox smgap2">
                    <img src="./assets/images/mobile/smallvectorbanner3.png" alt="" />
                    <p><span>400+</span> Teach ers & Staff providing excellence</p>
                </div>
            </div>
            </div>
        </div>

    </div>
    </div>
   
    </>
  )
}

export default BannerMobile