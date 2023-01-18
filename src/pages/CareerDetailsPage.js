import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NavbarMoblie from '../components/mobile/NavbarMoblie'
import FooterMobile from '../components/mobile/FooterMobile'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import Footer from '../components/Footer'
import { searchdata } from '../utils/CareerPartApi'
import {Row,Col, Button} from 'react-bootstrap'
import '../sassFiles/sassPages/careerDetailsPage.scss'

const CareerDetailsPage = (props) => {

    let {id} = useParams()

    useEffect(()=>{
        var navbar = document.getElementById("mynavbar");
        navbar.classList.remove("sticky");
      },[])

      function myFunction() {
        var navbar = document.getElementById("mynavbar");
        
          navbar.classList.remove("sticky");
        if(myheadlineother == !null){
          var myheadlineother = document.getElementById("noticepagegapbalance")
    
        }else{
          myheadlineother=document.getElementById("noticepagegapbalance")
        }
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
          
          navbar.classList.add("sticky");
          myheadlineother.classList.add("margintop62");
          
          
          
        }
        
        if(window.pageYOffset==50){
          navbar.classList.remove("sticky");
          myheadlineother.classList.remove("margintop62");
          
        }
        
          
      }
      window.onscroll = function() {myFunction()};
  return (
    <>
         <div className="mobile">
        <NavbarMoblie/>        
        <div className="mobilecontainer">
            <div className="careerdetailspage">
                {
                    searchdata.map((item,key)=>{
                        if(item.id==id){
                            return(
                                <div className="wrapper" key={key}>
                                    <h3>{item.heading}</h3>
                                    <p>{item.paragraph}</p>
                                    <h3>Key Responsibilities</h3>
                                    <ul>
                                            {
                                                item.keyresponsibilities.map((item2,key2)=>{
                                                    return(
                                                        <li key={key2}>{item2.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    <h3>Skills Knowledge and Expertise</h3>
                                    <ul>
                                        {
                                                item.skillsandresponsibilities.map((item2,key2)=>{
                                                    return(
                                                        <li key={key2}>{item2.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h3>Experience Requirements</h3>
                                        <ul>
                                        {
                                                item.experiencerequirements.map((item2,key2)=>{
                                                    return(
                                                        <li key={key2}>{item2.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <div className="bottombox">
                                        <h4>Department</h4>
                                            <p>{item.detailspagedepartment}</p>
                                            <h4>Employment Type</h4>
                                            <p>{item.employmenttype}</p>
                                            <h4>Location</h4>
                                            <p>{item.location}</p>
                                            <h4>Workplace type</h4>
                                            <p>{item.workplacetype}</p>
                                            <h4>Compensation</h4>
                                            <p>{item.compensation}</p>
                                            <div className="read-more2">
                                                <Button>Apply Now</Button>

                                            </div>
                                        </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
        <FooterMobile/>
      </div>
      <div className="desktop">
            <Header/>                
            <Mynavbar/>
            <div className="myContainer careerdetailspage">
            {
                searchdata.map((item,key)=>{
                    if(item.id==id){
                        return(
                                                        
                            <div className="wrapper" key={key}>
                                <Row>
                                    <Col lg={9}>
                                    <div className="leftbox">
                                        <h2>{item.heading}</h2>
                                        <p>{item.paragraph}</p>
                                        <h3>Key Responsibilities</h3>
                                        <ul>
                                            {
                                                item.keyresponsibilities.map((item2,key2)=>{
                                                    return(
                                                        <li key={key2}>{item2.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h3>Skills Knowledge and Expertise</h3>
                                        <ul>
                                        {
                                                item.skillsandresponsibilities.map((item2,key2)=>{
                                                    return(
                                                        <li key={key2}>{item2.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h3>Experience Requirements</h3>
                                        <ul>
                                        {
                                                item.experiencerequirements.map((item2,key2)=>{
                                                    return(
                                                        <li key={key2}>{item2.list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        
                                    </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="rightbox">
                                            
                                            <h3>Department</h3>
                                            <p>{item.detailspagedepartment}</p>
                                            <h3>Employment Type</h3>
                                            <p>{item.employmenttype}</p>
                                            <h3>Location</h3>
                                            <p>{item.location}</p>
                                            <h3>Workplace type</h3>
                                            <p>{item.workplacetype}</p>
                                            <h3>Compensation</h3>
                                            <p>{item.compensation}</p>
                                            <div className="read-more2">
                                                <Button>Apply Now</Button>

                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                        )

                    }
                })
            }
            </div>
            <Footer/>
      </div>
    </>
  )
}

export default CareerDetailsPage