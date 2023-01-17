import React,{useState} from 'react'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import {Row,Col,Form} from 'react-bootstrap'
import {allfeedata,feeinfodata,feenotedata} from '../../utils/FeeStructureApi'
import FeeStructureDynamiccomp from '../subComponents/FeeStructureDynamiccomp';
import CommonButton from '../subComponents/CommonButton';

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
      const handleInput=(e)=>{
        setcontactformdata({...contactformdata,[e.target.name]: e.target.value})
      }
      const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(contactformdata)
      }
    
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
        console.log(e.value)
        setdrptype(e.value)
      }
      const dropdownvalueclass=(e)=>{
        console.log(e.value)
        setclassoptions(e.value)
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

                <Row className="mytwodropdowns">
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
                    

                    {
                        
                        drptype && classoptions?
                        allfeedata.map((item,key)=>{
                            if(drptype=="New Admission" && classoptions=="Starter"){
                            return(
                            
                            <div className="populatesectiondiv" key={key}>
                                
                                <FeeStructureDynamiccomp admissionfeeprop={item.newadmission.starter.admissionfee} billingchargeprop={item.newadmission.starter.billingcharge} sessionfeeprop={item.newadmission.starter.sessionfee} tuitionfeeprop={item.newadmission.starter.tuitionfee}/>
                                
                            </div>
                            )
                            }
                            else if(drptype=="New Admission" && classoptions=="Playgroup"){
                                return(
                                
                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.playgroup.admissionfee} 
                                    billingchargeprop={item.newadmission.playgroup.billingcharge} 
                                    sessionfeeprop={item.newadmission.playgroup.sessionfee} 
                                    tuitionfeeprop={item.newadmission.playgroup.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Nursery"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.nursery.admissionfee} 
                                    billingchargeprop={item.newadmission.nursery.billingcharge} 
                                    sessionfeeprop={item.newadmission.nursery.sessionfee} 
                                    tuitionfeeprop={item.newadmission.nursery.tuitionfee}/>
                                    
                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Junior KG"){
                                return(
                                
                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.juniorkg.admissionfee} 
                                    billingchargeprop={item.newadmission.juniorkg.billingcharge} 
                                    sessionfeeprop={item.newadmission.juniorkg.sessionfee} 
                                    tuitionfeeprop={item.newadmission.juniorkg.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Senior KG"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.seniorkg.admissionfee} 
                                    billingchargeprop={item.newadmission.seniorkg.billingcharge} 
                                    sessionfeeprop={item.newadmission.seniorkg.sessionfee} 
                                    tuitionfeeprop={item.newadmission.seniorkg.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 1"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class1.admissionfee} 
                                    billingchargeprop={item.newadmission.class1.billingcharge} 
                                    sessionfeeprop={item.newadmission.class1.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class1.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 2"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class2.admissionfee} 
                                    billingchargeprop={item.newadmission.class2.billingcharge} 
                                    sessionfeeprop={item.newadmission.class2.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class2.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 3"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class3.admissionfee} 
                                    billingchargeprop={item.newadmission.class3.billingcharge} 
                                    sessionfeeprop={item.newadmission.class3.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class3.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 4"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class4.admissionfee} 
                                    billingchargeprop={item.newadmission.class4.billingcharge} 
                                    sessionfeeprop={item.newadmission.class4.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class4.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 5"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class5.admissionfee} 
                                    billingchargeprop={item.newadmission.class5.billingcharge} 
                                    sessionfeeprop={item.newadmission.class5.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class5.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 6"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class6.admissionfee} 
                                    billingchargeprop={item.newadmission.class6.billingcharge} 
                                    sessionfeeprop={item.newadmission.class6.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class6.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Class 7"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.class7.admissionfee} 
                                    billingchargeprop={item.newadmission.class7.billingcharge} 
                                    sessionfeeprop={item.newadmission.class7.sessionfee} 
                                    tuitionfeeprop={item.newadmission.class7.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="O Level"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.olevel.admissionfee} 
                                    billingchargeprop={item.newadmission.olevel.billingcharge} 
                                    sessionfeeprop={item.newadmission.olevel.sessionfee} 
                                    tuitionfeeprop={item.newadmission.olevel.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="A Level"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.alevel.admissionfee} 
                                    billingchargeprop={item.newadmission.alevel.billingcharge} 
                                    sessionfeeprop={item.newadmission.alevel.sessionfee} 
                                    tuitionfeeprop={item.newadmission.alevel.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="New Admission" && classoptions=="Pre- O level"){
                                return(

                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.newadmission.preolevel.admissionfee} 
                                    billingchargeprop={item.newadmission.preolevel.billingcharge} 
                                    sessionfeeprop={item.newadmission.preolevel.sessionfee} 
                                    tuitionfeeprop={item.newadmission.preolevel.tuitionfee}/>

                                </div>
                                )
                            }
                            else if(drptype=="Enrollment" && classoptions=="Starter"){
                                return(
                                
                                <div className="populatesectiondiv" key={key}>
                                    
                                    <FeeStructureDynamiccomp 
                                    admissionfeeprop={item.enrollment.starter.admissionfee} 
                                    billingchargeprop={item.enrollment.starter.billingcharge} 
                                    sessionfeeprop={item.enrollment.starter.sessionfee} 
                                    tuitionfeeprop={item.enrollment.starter.tuitionfee}/>
                                    
                                </div>
                                )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Playgroup"){
                                    return(
                                    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.playgroup.admissionfee} 
                                        billingchargeprop={item.enrollment.playgroup.billingcharge} 
                                        sessionfeeprop={item.enrollment.playgroup.sessionfee} 
                                        tuitionfeeprop={item.enrollment.playgroup.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Nursery"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.nursery.admissionfee} 
                                        billingchargeprop={item.enrollment.nursery.billingcharge} 
                                        sessionfeeprop={item.enrollment.nursery.sessionfee} 
                                        tuitionfeeprop={item.enrollment.nursery.tuitionfee}/>
                                        
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Junior KG"){
                                    return(
                                    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.juniorkg.admissionfee} 
                                        billingchargeprop={item.enrollment.juniorkg.billingcharge} 
                                        sessionfeeprop={item.enrollment.juniorkg.sessionfee} 
                                        tuitionfeeprop={item.enrollment.juniorkg.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Senior KG"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.seniorkg.admissionfee} 
                                        billingchargeprop={item.enrollment.seniorkg.billingcharge} 
                                        sessionfeeprop={item.enrollment.seniorkg.sessionfee} 
                                        tuitionfeeprop={item.enrollment.seniorkg.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 1"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class1.admissionfee} 
                                        billingchargeprop={item.enrollment.class1.billingcharge} 
                                        sessionfeeprop={item.enrollment.class1.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class1.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 2"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class2.admissionfee} 
                                        billingchargeprop={item.enrollment.class2.billingcharge} 
                                        sessionfeeprop={item.enrollment.class2.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class2.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 3"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class3.admissionfee} 
                                        billingchargeprop={item.enrollment.class3.billingcharge} 
                                        sessionfeeprop={item.enrollment.class3.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class3.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 4"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class4.admissionfee} 
                                        billingchargeprop={item.enrollment.class4.billingcharge} 
                                        sessionfeeprop={item.enrollment.class4.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class4.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 5"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class5.admissionfee} 
                                        billingchargeprop={item.enrollment.class5.billingcharge} 
                                        sessionfeeprop={item.enrollment.class5.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class5.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 6"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class6.admissionfee} 
                                        billingchargeprop={item.enrollment.class6.billingcharge} 
                                        sessionfeeprop={item.enrollment.class6.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class6.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Class 7"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.class7.admissionfee} 
                                        billingchargeprop={item.enrollment.class7.billingcharge} 
                                        sessionfeeprop={item.enrollment.class7.sessionfee} 
                                        tuitionfeeprop={item.enrollment.class7.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="O Level"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.olevel.admissionfee} 
                                        billingchargeprop={item.enrollment.olevel.billingcharge} 
                                        sessionfeeprop={item.enrollment.olevel.sessionfee} 
                                        tuitionfeeprop={item.enrollment.olevel.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="A Level"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.alevel.admissionfee} 
                                        billingchargeprop={item.enrollment.alevel.billingcharge} 
                                        sessionfeeprop={item.enrollment.alevel.sessionfee} 
                                        tuitionfeeprop={item.enrollment.alevel.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                                else if(drptype=="Enrollment" && classoptions=="Pre- O level"){
                                    return(
    
                                    <div className="populatesectiondiv" key={key}>
                                        
                                        <FeeStructureDynamiccomp 
                                        admissionfeeprop={item.enrollment.preolevel.admissionfee} 
                                        billingchargeprop={item.enrollment.preolevel.billingcharge} 
                                        sessionfeeprop={item.enrollment.preolevel.sessionfee} 
                                        tuitionfeeprop={item.enrollment.preolevel.tuitionfee}/>
    
                                    </div>
                                    )
                                }
                            
                            
                            else if(drptype=="Select Type" && classoptions=="Select Class"){
                                return(
                                    <div className="populatesectiondiv" key={key}>
                                <div className="populatebox">
                                    <p>Admission Fee</p>
                                    <p>{admissionfee}/=</p>
                                </div>
                                <div className="populatebox">
                                    <p>Billing Charge</p>
                                    <p>{billingcharge}/=</p>
                                </div>
                                <div className="populatebox">
                                    <p>Session Fee</p>
                                    <p>{sessionfee}/=</p>
                                </div>
                                <div className="populatebox">
                                    <p>Tuition Fee</p>
                                    <p>{tuitionfee}/=</p>
                                </div>
                                <div className="populatebox populateboxtotal">
                                    <p>Total</p>
                                    <p>0/=</p>
                                </div>

                                </div>
                                )
                            }
                            else{
                                return(
                                    <div className="populatesectiondiv" key={key}>
                                <div className="populatebox">
                                    <p>Admission Fee</p>
                                    <p>{admissionfee}/=</p>
                                </div>
                                <div className="populatebox">
                                    <p>Billing Charge</p>
                                    <p>{billingcharge}/=</p>
                                </div>
                                <div className="populatebox">
                                    <p>Session Fee</p>
                                    <p>{sessionfee}/=</p>
                                </div>
                                <div className="populatebox">
                                    <p>Tuition Fee</p>
                                    <p>{tuitionfee}/=</p>
                                </div>
                                <div className="populatebox populateboxtotal">
                                    <p>Total</p>
                                    <p>0/=</p>
                                </div>

                                </div>
                                )
                            }
                            
                        })
                        
                        
                        :
                        
                            <div className="populatesectiondiv">
                        <div className="populatebox">
                            <p>Admission Fee</p>
                            <p>{admissionfee}/=</p>
                        </div>
                        <div className="populatebox">
                            <p>Billing Charge</p>
                            <p>{billingcharge}/=</p>
                        </div>
                        <div className="populatebox">
                            <p>Session Fee</p>
                            <p>{sessionfee}/=</p>
                        </div>
                        <div className="populatebox">
                            <p>Tuition Fee</p>
                            <p>{tuitionfee}/=</p>
                        </div>
                        <div className="populatebox populateboxtotal">
                            <p>Total</p>
                            <p>0/=</p>
                        </div>
                        </div>
                        
                    }
                    
                </div>

                <div className="heading subinfoheading">
                  <h4>Fee Information</h4>
                </div>

                <div className="feeinfolist">
                    <ul>
                        {
                            feeinfodata.map((item,key)=>{
                                return (
                                    <li key={key}>{item.feeinfodata}</li>
                                    )
                                })
                            }
                    </ul>
                </div>

                <div className="heading subinfoheading feenoteheading">
                  <h4>Note</h4>
                </div>

                <div className="feenote">
                    <ul>
                        {
                            feenotedata.map((item,key)=>{
                                return(
                                    <li key={key}>{item.feenotedata}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="heading onlineinquiry">
                <h4>
                    Online Inquiry
                </h4>
                </div>
                  <Form className='onilneinquiryform' onSubmit={handleSubmit}>

                    <Row>
                        <Col lg={12}>
                            <div className="basicinputfield">
                                <input type="text" placeholder='Name' name="name"  onChange={handleInput}/>
                                <input type="emial" placeholder='Email' name="email"  onChange={handleInput}/>
                                <input type="text" placeholder='Phone' name="phone"  onChange={handleInput}/>
                                <input type="text" placeholder='Info' name="info" onChange={handleInput}/>
                                <input type="text" placeholder='Subject' name="subject" onChange={handleInput}/>
                            </div>
                        
                            <div className="basicinputfield contactpagerightsideform">
                                <textarea name="message" placeholder="Message" onChange={handleInput}></textarea>
                                <input type="text" placeholder='Captcha' name="captcha" onChange={handleInput}/>
                            </div>
                        
                        </Col>
                    </Row>
                    <CommonButton buttonTitle="Submit"/>
                    </Form>
                
            </div>
        </div>
    </>
  )
}

export default FeeStructureCompmb