import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {Row,Col} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const CareerComponent = () => {
    let [searchword,setSearchword] = useState("")
    const [drplocation,setdrplocation] = useState("")
    const [drpep,setdrpdep]=useState("")
    const handleSearch=(e)=>{
        console.log(e.target.value)
        setSearchword(e.target.value)
      }
      const options = [
        'Dhaka', 'Chattogram', 'Barishal' , 'Khulna' , 'Rajshahi' , 'Rangpur','Mymensingh','Sylhet'
      ];
    const options2 = [
        'Front-end Designer','Back-end Developer','UI/UX Designer'
      ];
      const defaultOption = "All Locations";
      const defaultOption2 = "All Departments";
      const dropdownvalue=(e)=>{
        console.log(e.value)
        setdrplocation(e.value)
      }
      const dropdownvalue2=(e)=>{
        console.log(e.value)
        setdrpdep(e.value)
      }
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
  return (
    <>
        <div className="mobilecontainer">
        <div className="heading">
            <h4>Career</h4>
        </div>
        <div className="middlepart">
            <h5>Build Your Career</h5>
            <p>If you're innovative, qualified, talented, creative and a team worker, BSS is the place for you!
                You have unique experiences, skills and passions—and we believe you can bring them all to BSS for a rich, rewarding career and lifestyle that will surprise you with its breadth and potential. Just imagine the excitement and satisfaction of what you can do, where you can go, and the difference you can make with the resources of BSS behind you.
            </p>
            {/* <div className="jobbox">
                <p>No Jobs Available</p>
            </div> */}

            <Row>
                <Col lg={12}>
                    <div className="searchbar">
                        <input type="text" placeholder='Search...' name="search" onChange={handleSearch} value={searchword}/>
                        <FiSearch/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{paddingRight:"5px"}}>
                    <div className="dropdownwrapper">
                        <Dropdown className='filterdropone' options={options} onChange={(e)=>dropdownvalue(e)} value={defaultOption} placeholder="Select an option" />
                        <BsChevronDown/>
                    </div>
                </Col>
                <Col style={{paddingLeft:"5px"}}>
                    <div className="dropdownwrapper">
                        <Dropdown className='filterdropone' options={options2} onChange={(e)=>dropdownvalue2(e)} value={defaultOption2} placeholder="Select an option" />
                        <BsChevronDown/>
                    </div>
                </Col>
            </Row>
            <div className="fixedheightcareerboxesmobile">
            {
                
                
                
                drplocation && drpep?
                (
                    searchdata.map((item,key)=>{
                        if(drplocation==item.location && drpep==item.department){
                            let lowerit = item.heading.toLowerCase()
                            if(lowerit.includes(searchword)){
                                return(
                                    <div className="careerboxmb" key={key}>
                                        <h3>{item.heading}</h3>
                                        <p>{item.paragraph}<Link to={item.pagelink}>View Details</Link></p>
                                        
                                    </div>
                                )
                            }
                            // else{
                            //     return(
                            //         <div className="careeremptybox">
                            //             <p>No Job Found</p>
                            //         </div>
                            //     )
                            // }
                            
                           
                        }
                        })     
                )                        
                :
                drplocation?
            
                searchdata.map((item,key)=>{
                
                if(drplocation==item.location){
                    return(
                        <div className="careerboxmb" key={key}>
                            <h3>{item.heading}</h3>
                            <p>{item.paragraph}<Link to={item.pagelink}>View Details</Link></p>
                            
                        </div>
                    )
                }
                })
                :
                drpep?
                searchdata.map((item,key)=>{
                
                    
                    if(drpep==item.department){
                        return(
                            <div className="careerboxmb" key={key}>
                                <h3>{item.heading}</h3>
                                <p>{item.paragraph}<Link to={item.pagelink}>View Details</Link></p>
                                
                            </div>
                        )
                    }
                    })
                    :
                    searchword?
                        searchdata.map((item,key)=>{
                            let lowerit = item.heading.toLowerCase()
                            if(lowerit.includes(searchword)){
                            return(
                                <div className={`careerboxmb`}>
                                    <h3>{item.heading}</h3>
                                    <p>{item.paragraph}<Link to={item.pagelink}>View Details</Link></p>
                                    
                                </div>
                            )
                            }
                        })
                :
                searchdata.map((item,key)=>{
                    if(drpep=="" && drplocation==""){
                        
                            return(
                                <div className="careerboxmb" key={key}>
                                    <h3>{item.heading}</h3>
                                    <p>{item.paragraph}<Link to={item.pagelink}>View Details</Link></p>
                                    
                                </div>
                            )
                        
                            }
                        
                        })   
                    }
            </div>
            
            
        </div>
        </div>
    </>
  )
}

export default CareerComponent