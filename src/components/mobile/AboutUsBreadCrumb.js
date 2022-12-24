import React from 'react'
import { Parallax } from 'react-parallax';
import '../../sassFiles/mobile/sassPages/aboutPage.scss'
const AboutUsBreadCrumb = () => {
  return (
    <>
        <div className="aboutusbreadcrumb">
            {/* <img src="./assets/images/mobile/aboutuspagebreadcrumbimg.png" alt="aboutuspagebreadcrumbimg.png" /> */}
            
            <Parallax className='aboutparalaxrel' bgImage="./assets/images/mobile/aboutuspagebreadcrumbimg.png" bgImageAlt="the cat" strength={500}>
        
        <div className="bluroverlay">

               </div>
                <div className="content">
                    <div className="mobilecontainer">
                <div className="aboutmobileimgoverlay">
                    <h4>About Us</h4>

                    <div className="bannertextmb">
                        <h3>Our Mission</h3>
                        <p>Let us make every child by giving them material education, and spiritual education.
                        To develop every individual to BUILD A NATION THROUGH EDUCATION. It is our approach to prepare our students to excel and to give something back to our noble profession and society. We attempt to develop our students for not only professional life but their practical life too. So, come and visit us and learn about our school, and allow us to bring the best out of each student.</p>
                    </div>
                    </div>
                    </div>
                </div>
        </Parallax>
        </div>
    </>
  )
}

export default AboutUsBreadCrumb