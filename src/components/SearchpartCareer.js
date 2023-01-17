import React,{useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import SearchBar from './subComponents/SearchBar'
import {FiSearch} from 'react-icons/fi'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {BsChevronDown} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import { Link } from 'react-router-dom';

const SearchpartCareer = () => {

    const navigate = useNavigate()

    let [searchworddesk,setsearchworddesk] = useState("")
    const options = [
        'Dhaka', 'Chattogram', 'Barishal' , 'Khulna' , 'Rajshahi' , 'Rangpur','Mymensingh','Sylhet'
      ];
    const options2 = [
        'Front-end Designer','Back-end Developer','UI/UX Designer'
      ];
      const defaultOption = "All Locations";
      const defaultOption2 = "All Departments";
      const [drplocationdesk,setdrplocationdesk] = useState("")
      const [drpepdesk,setdrpdepdesk]=useState("")
      const dropdownvalue=(e)=>{
        console.log(e.value)
        setdrplocationdesk(e.value)
      }
      const dropdownvalue2=(e)=>{
        console.log(e.value)
        setdrpdepdesk(e.value)
      }
      const handleSearch=(e)=>{
        console.log(e.target.value)
        setsearchworddesk(e.target.value)
      }

      const data = [
        {
            name:"tariq"
        },
        {
            name:"faruq"
        }
      ]
      const searchdata = [
        {
            heading:"Senior Software Engineer",
            paragraph:"We are looking for Senior developer in our C++ team, having professional experience and good knowledge on high-end applications development. Your primary focus will be developing enterprise level applications for customers following proper design patterns...",
            pagelink:"/",
            location:"Dhaka",
            department:"Front-end Designer"
        },
        {
            heading:"Software Development Lead",
            paragraph:"We are looking for development leads having professional experience on leading a team of software engineers and having working experience of building web applications using Java or .NET. As a development lead, you will be responsible for managing...",
            pagelink:"/",
            location:"Khulna",            
            department:"Back-end Developer"
        },
        {
            heading:"Software QA Engineer",
            paragraph:"We are looking for a Quality Assurance (QA) engineer to develop and execute manual or automated tests to ensure product quality. Our ideal candidate will be responsible for conducting tests to ensure software runs smoothly and meets client needs. If you hold an engineering background and...",
            pagelink:"/",
            location:"Dhaka",
            department:"Front-end Designer",
            

        },
        {
            heading:"Software QA Engineer",
            paragraph:"We are looking for a Quality Assurance (QA) engineer to develop and execute manual or automated tests to ensure product quality. Our ideal candidate will be responsible for conducting tests to ensure software runs smoothly and meets client needs. If you hold an engineering background and...",
            pagelink:"/",
            location:"Rajshahi",
            department:"UI/UX Designer"
        },
        {
            heading:"Software Technical Lead (.Net)",
            paragraph:"We are looking for technical leads having professional experience and deep knowledge on C#, .NET (ASP.NET MVC, .NET Core) and web technologies (JavaScript and single page application frameworks). As a technical lead, you will be responsible to ensure technical...",
            pagelink:"/",
            location:"Rajshahi",
            department:"UI/UX Designer"
        },
        {
            heading:"Telesales Executive",
            paragraph:"We are looking for an enthusiastic telesales representative to contribute in generating sales for our company. You will be responsible for closing sales deals over the phone and maintaining good customer relationships. An effective telesales representative must be an excellent communicator...",
            pagelink:"/",
            location:"Rajshahi",
            department:"UI/UX Designer"
        },
        {
            heading:"Software Technical Lead (C++)",
            paragraph:"We are looking for technical leads having professional experience and deep knowledge on C++. As a technical lead, you will be responsible to ensure technical quality of the software applications wedevelop. You will be guiding software development teams...",
            pagelink:"/",
            location:"Rajshahi",
            department:"UI/UX Designer"
        },
      ]
    //   useEffect(()=>{
    //     $('.careerboxtext p').text(function(_, txt) {
            
    //           txt = txt.substr(0, 200) + "...";
              
    //           $(this).html(txt)
    //         //   $(this).parent().append("<span href='#'>Read More</span>");
    //       });
    //   },[])

     
      
  return (
    <>
        <div className="searchpartcareer">
            <div className="myContainer">
                <Row>
                    <Col lg={6}>
                        <div className="searchbar" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                            <input type="text" placeholder='Search...' name="search" onChange={handleSearch} value={searchworddesk}/>
                            <FiSearch/>
                        </div>
                        
                    </Col>
                    <Col lg={6}>
                        <Row data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                            <Col lg={6}>
                                <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' options={options} onChange={(e)=>dropdownvalue(e)} value={defaultOption} placeholder="Select an option" />
                                    <BsChevronDown/>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' options={options2} onChange={(e)=>dropdownvalue2(e)} value={defaultOption2} placeholder="Select an option" />
                                    <BsChevronDown/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
               

                <Row>
                    <Col lg={12}>
                        <div className="fixedheightcareerboxes">
                        {
                           
                            
                            drplocationdesk && drpepdesk?
                            
                            searchdata.map((item,key)=>{
                                if(searchworddesk){
                                    if(drplocationdesk==item.location && drpepdesk==item.department){
                                        let lowerit = item.heading.toLowerCase()
                                        if(lowerit.includes(searchworddesk)){
                                            return(
                                                <div className="careerBox" key={key} data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="careerBoxInnerWrapper">
                                                <div className='careerboxtext' >
                                                    <h4>{item.heading}</h4>
                                                    <p>{item.paragraph}</p>
                                                    <Link to={item.pagelink}>View Details</Link>
                                                </div>
                                                </div>
                                                </div>
                                            )

                                        }
                                    }

                                }
                                else{
                                    if(drplocationdesk==item.location && drpepdesk==item.department){
                                        return(
                                            <div className="careerBox" key={key}  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="careerBoxInnerWrapper">
                                            <div className='careerboxtext' >
                                                <h4>{item.heading}</h4>
                                                <p>{item.paragraph}</p>
                                                <Link to={item.pagelink}>View Details</Link>
                                            </div>
                                            </div>
                                            </div>
                                        )
                                    }
                                }
                                
                            })
                            
                           
                            :
                            drplocationdesk?
                            searchdata.map((item,key)=>{
                                if(drplocationdesk==item.location){
                                    return(
                                        <div className="careerBox" key={key}  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="careerBoxInnerWrapper">
                                        <div className='careerboxtext' >
                                            <h4>{item.heading}</h4>
                                            <p>{item.paragraph}</p>
                                            <Link to={item.pagelink}>View Details</Link>
                                        </div>
                                        </div>
                                        </div>
                                    )
                                }
                            })
                            :
                            drpepdesk?
                            searchdata.map((item,key)=>{
                                if(drpepdesk==item.department){
                                    return(
                                        <div className="careerBox" key={key}  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="careerBoxInnerWrapper">
                                        <div className='careerboxtext' >
                                            <h4>{item.heading}</h4>
                                            <p>{item.paragraph}</p>
                                            <Link to={item.pagelink}>View Details</Link>
                                        </div>
                                        </div>
                                        </div>
                                    )
                                }
                            })
                            :
                            searchworddesk?
                            searchdata.map((item,key)=>{
                                let lowerit = item.heading.toLowerCase()
                                if(lowerit.includes(searchworddesk)){
                                    return(
                                        <div className="careerBox" key={key}  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="careerBoxInnerWrapper">
                                        <div className='careerboxtext' >
                                            <h4>{item.heading}</h4>
                                            <p>{item.paragraph}</p>
                                            <Link to={item.pagelink}>View Details</Link>
                                        </div>
                                        </div>
                                        </div>
                                    )
                                }
                               
                            })
                            :

                            searchdata.map((item,key)=>{
                                if(drplocationdesk=="" && drpepdesk==""){
                                    return(
                                        <div className="careerBox" key={key}  data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="careerBoxInnerWrapper">
                                        <div className='careerboxtext' >
                                            <h4>{item.heading}</h4>
                                            <p>{item.paragraph}</p>
                                            <Link to={item.pagelink}>View Details</Link>
                                        </div>
                                        </div>
                                        </div>
                                    )

                                }
                            })
                        }
                        </div>
                       
                           
                    </Col>
                </Row>
            </div>

        </div>

        {/* {
                    
                    searchworddesk?
                    data.map((item,key)=>{

                    if(searchworddesk==item.name) {
                        return(
                            <div key={key}>
                            <h1>{item.name}</h1>
                            </div>
                        )
                    }
                   
                            
                            }
                          )                     
                        
                        :
                        data.map((item,key)=>{
                            return(
                                <div key={key}>
                                <h1>{item.name}</h1>
                                </div>
                            )
                        })
                      
                } */}
    </>
  )
}

export default SearchpartCareer