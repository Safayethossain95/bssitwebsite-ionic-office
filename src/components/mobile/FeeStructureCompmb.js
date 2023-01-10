import React,{useState} from 'react'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import {Row,Col,Form} from 'react-bootstrap'
const FeeStructureCompmb = () => {
    const [contactformdata,setcontactformdata] = useState({
        name:"",
        email:"",
        phone:"",
        info:"",
        subject:"",
        message:"",
        captcha:""
      })
    const typeoptions = [
        'Select Type','New Admission','Enrollment'
      ];
    const classoptionsopt = [
        'Select Class','Starter','Playgroup','Nursery','Junior KG','Senior KG','Class 1','Class 2', 'Class 3','Class 4','Class 5','Class 6','Class 7','O Level',
        'A Level','Pre- O level'
      ];
    const defaultOptiontype = typeoptions[0];
      const defaultOptionclass = classoptionsopt[0];
      const [drptype,setdrptype] = useState("")
      const [classoptions,setclassoptions]=useState("")
      const [admissionfee,setadmissionfee]=useState(0)
      const [billingcharge,setbillingcharge]=useState(0)
      const [sessionfee,setsessionfee]=useState(0)
      const [tuitionfee,settuitionfee]=useState(0)
      const dropdownvalue=(e)=>{
        // console.log(e.value)
        setdrptype(e.value)
      }
      const dropdownvalueclass=(e)=>{
        // console.log(e.value)
        setclassoptions(e.value)
      }

      const handleInput=(e)=>{
        setcontactformdata({...contactformdata,[e.target.name]: e.target.value})
      }
  return (
    <>
        <div className="feestructurecompmb">
            <div className="mobilecontainer">
                <div className="heading">
                    <h4>
                        Fee Structure
                    </h4>
                    <p>
                    Session : [July 2022 - June 2023]
                    </p>
                </div>

                <Row>
                    <Col xs={6}>
                        <div className="dropdownwrapper">
                            <Dropdown className='filterdropone' options={typeoptions} onChange={(e)=>dropdownvalue(e)} value={defaultOptiontype} placeholder="Select an option" />
                            <BsChevronDown/>
                        </div>
                        
                    </Col>
                    <Col xs={6}>
                        <div className="dropdownwrapper">
                            <Dropdown className='filterdropone' options={classoptionsopt} onChange={(e)=>dropdownvalueclass(e)} value={defaultOptionclass} placeholder="Select an option" />
                            <BsChevronDown/>
                        </div>
                    </Col>
                </Row>

                <div className="populatepart">
                    <h5>Total Amount</h5>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default FeeStructureCompmb