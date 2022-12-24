import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import SearchpartCareer from '../components/SearchpartCareer'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import SmallHeadingMsg from '../components/subComponents/SmallHeadingMsg'
import SmallParagraph from '../components/subComponents/SmallParagraph'
import '../sassFiles/sassPages/careerPage.scss'
const CareerPage = () => {
  return (
    <>
        <div className="careerpagemain">
            <div className="desktop">
                <Header/>
                <Mynavbar/>
                <HeadlineOfOtherPage noticepagegapbalance="noticepagegapbalance" headline="Career"/>
                <SmallHeadingMsg smalltitle="Build Your Career"/>
                <SmallParagraph/>
                <SearchpartCareer/> 
                <Footer/>               
            </div>
        </div>
        
    </>
  )
}

export default CareerPage