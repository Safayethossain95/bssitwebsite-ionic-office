import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {Row,Col} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { searchdata } from '../../../utils/CareerPartApi';
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
                        let trimmedString= item.paragraph.substr(0, 233)
                        if(drplocation==item.location && drpep==item.department){
                            let lowerit = item.heading.toLowerCase()
                            if(lowerit.includes(searchword)){
                                return(
                                    <div className="careerboxmb" key={key}>
                                        <h3>{item.heading}</h3>
                                        <p>{trimmedString}...<Link to={`/career/careerdetails/${item.id}`}>View Details</Link></p>
                                        
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
                    let trimmedString= item.paragraph.substr(0, 233)
                if(drplocation==item.location){
                    return(
                        <div className="careerboxmb" key={key}>
                            <h3>{item.heading}</h3>
                            <p>{trimmedString}...<Link to={`/career/careerdetails/${item.id}`}>View Details</Link></p>
                            
                        </div>
                    )
                }
                })
                :
                drpep?
                searchdata.map((item,key)=>{
                
                    let trimmedString= item.paragraph.substr(0, 233)
                    if(drpep==item.department){
                        return(
                            <div className="careerboxmb" key={key}>
                                <h3>{item.heading}</h3>
                                <p>{trimmedString}...<Link to={`/career/careerdetails/${item.id}`}>View Details</Link></p>                                
                            </div>
                        )
                    }
                    })
                    :
                    searchword?
                        searchdata.map((item,key)=>{
                            let trimmedString= item.paragraph.substr(0, 233)
                            let lowerit = item.heading.toLowerCase()
                            if(lowerit.includes(searchword)){
                            return(
                                <div className={`careerboxmb`} key={key}>
                                    <h3>{item.heading}</h3>
                                    <p>{trimmedString}...<Link to={`/career/careerdetails/${item.id}`}>View Details</Link></p>
                                    
                                </div>
                            )
                            }
                        })
                :
                searchdata.map((item,key)=>{
                    let trimmedString= item.paragraph.substr(0, 233)
                    if(drpep=="" && drplocation==""){
                        
                            return(
                                <div className="careerboxmb" key={key}>
                                    <h3>{item.heading}</h3>
                                    <p>{trimmedString}...<Link to={`/career/careerdetails/${item.id}`}>View Details</Link></p>
                                    
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