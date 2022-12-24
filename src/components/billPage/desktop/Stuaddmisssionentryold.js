import React,{useState} from 'react'
import {HiOutlineBell} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import '../../../sassFiles/sassPages/studentaddmissionbilll.scss'
import {Row,Col, Button} from 'react-bootstrap'
import {FiUpload} from 'react-icons/fi'
import {RxReload} from 'react-icons/rx'
import {Tab,Tabs} from 'react-bootstrap';
import {BiSave} from 'react-icons/bi'

const StudentAdmissionEntryComponent = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
      };

      const handleLookupEntry=()=>{

      }
      const handleManageDocument=()=>{

      }
      const handleManageSubject=()=>{

      }
      const handleSave=()=>{

      }
      const handleSearch=()=>{

      }
      const handleReset=()=>{

      }
  return (
    <>
        <div className="headerpartbill">
            
            <div className="leftsidesearch">
                <h3>Student Registration Form</h3>
            </div>
        
            <div className="rightsidestuff">
                <div className="bellicon">
                    <HiOutlineBell/>
                </div>
                <div className="profilesmallinfo">
                    <div className="profilepic">
                        <img src="./assets/images/billpage/headerprofilepic.png" alt="headerprofilepic" />
                    </div>
                    <div className="roleandid">
                        <div className="roleidwrapper">
                            <h5>Admin</h5>
                            <p>ID 1705032108</p>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        <div className="studentbasicinformation">
            <div className="basicinfopopulate">
                <h4>Student Basic Information</h4>
            <Row>
                <Col>
                    <Row>
                        <Col lg={12}>
                            <p>First Name</p>
                            <input type="text" name="" placeholder='-'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Gender</p>
                            <input type="text" name="" placeholder='-'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Res Phone</p>
                            <input type="text" name="" placeholder='-'/>
                        </Col>
                    </Row>
                       
                </Col>
                <Col>
                    <Row>
                    <Col lg={12}>
                        <p>Middle Name</p>
                        <input type="text" name="" placeholder='-'/>
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Date of Birth</p>
                            <input type="text" name="" placeholder='-'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Prox Number</p>
                            <input type="text" name="" placeholder='-'/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                    <Col lg={12}>
                        <p>Last Name</p>
                        <input type="text" name="" placeholder='-'/>
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Email</p>
                            <input type="email" name="" placeholder='-'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="inputwithicononright">
                                <p>Id</p>
                                <input type="text" name="" placeholder='-'/>
                                <Button><RxReload/></Button>
                            </div>
                         
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col lg={12}>
                            <p>Nick Name</p>
                            <input type="text" name="" placeholder='-'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Mobile</p>
                            <input type="email" name="" placeholder='-'/>
                        </Col>
                    </Row>
                   
                </Col>
                <Col>
                    <div className="imguploadbox">
                        <div className="imgupicon">
                            <FiUpload/>
                        </div>
                        <p>Drag Files to Upload <br/>or</p>
                        <Button type="file">Browse</Button>
                        <p>Supported files: JPG, JPEG, PNG</p>
                    </div>
                </Col>
            </Row>

            </div>

        </div>
        <div className="admissionandcurrentinfo">
            
                

                <Row>
                    <Col lg={6}>
                        <div className="admissioninfobox">
                            <div className="basicinfopopulate">
                            <h4>Admission Information</h4>
                            
                            <Row>
                                <Col lg={6}>
                                    <p>Admission Date</p>
                                    <input type="date" name="" placeholder='-'/>
                                </Col>
                                <Col lg={6}>
                                    <p>Session</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Class</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                                <Col lg={4}>
                                    <p>Section</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                                <Col lg={4}>
                                    <p>Shift</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            <div className="checkboxfull">                      
                                <label className='checkcontainer'>
                                Re Admission
                                <input
                                    type="checkbox"
                                    value={isSubscribed}
                                    onChange={handleChange}
                                    id="remember"
                                    name="subscribe"                        
                                />
                                <span className="checkmark"></span>
                                </label>
                                
                                </div>
                        <Row style={{marginTop:"13px"}}>
                                <Col lg={6}>
                                    <p>Re admission Date</p>
                                    <input type="date" name="" placeholder='-'/>
                                </Col>
                                <Col lg={6}>
                                    <p>Session</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="currentinfobox">
                            <div className="basicinfopopulate">
                            <h4>Current Information</h4>
                            <Row>
                                <Col lg={6}>
                                    <p>Admission Date</p>
                                    <input type="date" name="" placeholder='-'/>
                                </Col>
                                <Col lg={6}>
                                    <p>Session</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Class</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                                <Col lg={4}>
                                    <p>Section</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                                <Col lg={4}>
                                    <p>Shift</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Campus</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                                <Col lg={4}>
                                    <p>Status</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                                <Col lg={4}>
                                    <p>End Date</p>
                                    <input type="date" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <p>Remark</p>
                                    <input type="text" name="" placeholder='-'/>
                                </Col>
                            </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            
        </div>

        <div className="studentdetailedinfobox">
            <div className="basicinfopopulate">
                <h4>Student Detailed Information</h4>
                <Tabs
                    defaultActiveKey="home"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="home" title="Address">
                        <Row>
                            <Col lg={6} style={{borderRight:"1px solid rgba(0,0,0,0.1)"}}>
                                {/* <div className="basicinfopopulate"> */}
                                    <h4>Present Address</h4>
                                    <Row>
                                        <Col >
                                            <p>Holding</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Road</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Area</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col >
                                            <p>Post Code</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <p>Thana</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col>
                                            <p>District</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col >
                                            <p>Division</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col >
                                            <p>Country</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                    </Row>
                                {/* </div> */}
                                
                            </Col>
                            <Col lg={6}>
                            <h4>Permanent Address</h4>
                                    <Row>
                                        <Col >
                                            <p>Holding</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Road</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Area</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col >
                                            <p>Post Code</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <p>Thana</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col>
                                            <p>District</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col >
                                            <p>Division</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                        <Col >
                                            <p>Country</p>
                                            <input type="text" name="" placeholder='-'/>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="fathersinfo" title="Father's Info" >                        
                        <Row style={{marginTop:"40px"}}>
                            <Col>
                                <p>First Name</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col>
                                <p>Middle Name</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col >
                                <p>Last Name</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col >
                                <p>Mobile</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col >
                                <p>Phone</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col >
                                <p>National Id</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Education</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col>
                                <p>Education Details</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col >
                                <p>Occupation</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Occupation Details</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Office Address</p>
                                <input type="text" name="" placeholder='-'/>
                            </Col>
                           
                        </Row>
                        
                    </Tab>
                    <Tab eventKey="longer-tab" title="Mother's Info">
                        ffff
                    </Tab>
                    <Tab eventKey="contact" title="Local Guardian">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="contact" title="Other">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="contact" title="Application For Due">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="contact" title="Student Status">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="contact" title="Payment History">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="contact" title="Permissions">
                        dfgdfg
                    </Tab>
                   
                </Tabs>
            </div>
        </div>

        <div className="studentaddmissioninfobuttons">
            <Row>
                <Col style={{flex:"1 1 8%"}}>
                    <Button onClick={handleLookupEntry}>Look Up Entry</Button>
                </Col>
                <Col style={{flex:"1 1 8%"}}>
                    <Button onClick={handleManageDocument}>Manage Document</Button>
                
                </Col>
                <Col style={{flex:"1 1 8%"}}>
                    <Button onClick={handleManageSubject}>Manage Subject</Button>
                
                </Col>
                <Col>
                
                    <Button onClick={handleSave}><span><BiSave/></span>Save</Button>
                </Col>
                <Col>
                    <Button onClick={handleSearch}><span><FiSearch/></span> Search</Button>
                
                </Col>
                <Col>
                    <Button className='rotateicon' onClick={handleReset}><span><RxReload/></span> Reset</Button>
                
                </Col>
            </Row>
        </div>
    </>
  )
}

export default StudentAdmissionEntryComponent