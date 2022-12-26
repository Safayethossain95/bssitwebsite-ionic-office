import React,{useEffect, useState} from 'react'
import {HiOutlineBell} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import '../../../sassFiles/sassPages/studentaddmissionbilll.scss'
import {Row,Col, Button} from 'react-bootstrap'
import {FiUpload} from 'react-icons/fi'
import {RxReload} from 'react-icons/rx'
import {Tab,Tabs,Modal} from 'react-bootstrap';
import {BiSave} from 'react-icons/bi';
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
const StudentAdmissionEntryComponent = () => {
    const [alertpopup,setalertpopup] = useState(false)
    const [alertpopup2,setalertpopup2] = useState(false)
    const [genderselect,setGenderselect] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isCheckedmath, setisCheckedmath] = useState(false);
    const [isCheckedartandcraft, setisCheckedartandcraft] = useState(false);
    const [isCheckedenglit, setisCheckedenglit] = useState(false);
    const [isCheckedartenglang, setisCheckedartenglang] = useState(false);
    const [isCheckedbengali, setisCheckedbengali] = useState(false);
    const [isCheckedsci, setisCheckedsci] = useState(false);
    const [isCheckedict, setisCheckedict] = useState(false);
    const [postcodeerrorborder,setPostcodeerrorboreder] = useState(false)
    const [showmanageDocument, setshowmanageDocument] = useState(false);
    const [showmanageSubject, setshowmanageSubject] = useState(false);
    const [selectDocumentcategoryinmodal, setSelectDocumentcategoryinmodal]=useState("")
    var managedocumentsfilesarray = useState([])
    const handleCloseManageDocumentClose = () => setshowmanageDocument(false);
    const handleCloseManageSubjectClose = () => setshowmanageSubject(false);
    const handleManageDocumentShow = () => setshowmanageDocument(true);
    const handleManageSubjectShow = () => setshowmanageSubject(true);
    const [managedocumentsfilesarraystate,setmanagedocumentsfilesarraystate] = useState([])
    const [studentadmissiondata,setStudentadmissiondata] = useState({
        firstname_student:"",
        gender_student:genderselect,
        resphone_student:"",
        middlename_student:"",
        dateofbirth_student:"",
        proxnumber_student:"",
        lastname_student:"",
        email_student:"",
        id_student:"",
        nickname_student:"",
        mobile_student:"",
        admissiondate_student:"",
        session_student:"",
        class_student:"",
        section_student:"",
        shift_student:"",
        readmissiondate_student:"",
        readmissionSession_student:"",
        admissiondate_student_current:"",
        session_student_current:"",
        class_student_current:"",
        section_student_current:"",
        shift_student_current:"",
        campus_student_current:"",
        status_student_current:"",
        enddate_student_current:"",
        remark_student_current:"",
        holding_student_detailed_present:"",
        road_student_detailed_present:"",
        area_student_detailed_present:"",
        postcode_student_detailed_present:"",
        thana_student_detailed_present:"",
        district_student_detailed_present:"",
        division_student_detailed_present:"",
        country_student_detailed_present:"",
        holding_student_detailed_permanent:"",
        road_student_detailed_permanent:"",
        area_student_detailed_permanent:"",
        postcode_student_detailed_permanent:"",
        thana_student_detailed_permanent:"",
        district_student_detailed_permanent:"",
        division_student_detailed_permanent:"",
        country_student_detailed_permanent:"",
        firstname_fathers:"",
        middlename_fathers:"",
        lastname_fathers:"",
        mobile_fathers:"",
        phone_fathers:"",
        nationalid_fathers:"",
        education_fathers:"",
        education_details_fathers:"",
        occupation_fathers:"",
        occupation_details_fathers:"",
        officeAddress_fathers:"",
        firstname_mothers:"",
        middlename_mothers:"",
        lastname_mothers:"",
        mobile_mothers:"",
        phone_mothers:"",
        nationalid_mothers:"",
        education_mothers:"",
        education_details_mothers:"",
        occupation_mothers:"",
        occupation_details_mothers:"",
        officeAddress_mothers:"",
        firstname_local_guaridan:"",
        middlename_local_guardian:"",
        lastname_local_guardian:"",
        nationalid_local_guardian:"",
        passport_local_guardian:"",
        mobile_local_guardian:"",
        address_local_guardian:"",
        religion_local_guardian:""

    })

    const [managesubject,setmanagesubject] = useState({
        isCheckedmathvalue:'',
        isCheckedartandcraftvalue:'',
        isCheckedenglitvalue:'',
        isCheckedartenglangvalue:'',
        isCheckedbengalivalue:'',
        isCheckedscivalue:'',
        isCheckedictvalue:''

    })

    

    const optionsgender = [
        'Male','Female','Other'
      ];
    const optionsdropdownmodaldocumentcategory = [
        'Certificate','National ID','Other'
      ];
      const defaultOptionGender = " ";
      const dropdowngendervalue=(e)=>{
        setGenderselect(e.value)
      }
      const defaultoptiondropdownmodaldocumentcategory = " ";
      const dropdownmodaldocumentcategory = (e) =>{
        setSelectDocumentcategoryinmodal(e.value)
      }
    function allnumeric(inputtxt)
        {
            var numbers = /^[0-9]+$/;
            if(inputtxt.match(numbers))
            {
            return true;
            }
            else
            {
            return false;
            }
        } 
       
       const handleuploadimg=(imginfo)=>{
        console.log(imginfo)
       }
       const handlemanagedocupload=(file)=>{
            managedocumentsfilesarray.push({...managedocumentsfilesarray,file})   
            var myvalarr = managedocumentsfilesarray.slice(2)      
            setmanagedocumentsfilesarraystate(arr => [...arr,myvalarr])
        }
       
    
    const onlynumberinput=(event)=>{
       
        const result = event.target.value;
    
        if(allnumeric(result)){
            console.log("number")
            setStudentadmissiondata({...studentadmissiondata,[event.target.name]:result});
        }else{
            console.log("not number")
            setStudentadmissiondata({...studentadmissiondata,[event.target.name]:''});
        }
            
        
    }
    const handleInput=(e)=>{    
        setStudentadmissiondata({...studentadmissiondata,[e.target.name]: e.target.value} )
      }
    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
      };
    const handleChangeMathematics = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked math');
          setmanagesubject({...managesubject,[managesubject.isCheckedmathvalue]:"mathematics"})
          console.log(managesubject.isCheckedmathvalue)
        } else {
          console.log('⛔️ Checkbox is NOT checked math');
        }
        setisCheckedmath(!isCheckedmath);
      };
    const handleChangeartandcraft = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked art');
        } else {
          console.log('⛔️ Checkbox is NOT checked art');
        }
        setisCheckedartandcraft(current => !current);
      };
    const handleChangeenglit = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked eng lit');
        } else {
          console.log('⛔️ Checkbox is NOT checked eng lit');
        }
        setisCheckedenglit(current => !current);
      };
    const handleChangeenglang = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked eng lang');
        } else {
          console.log('⛔️ Checkbox is NOT checked eng lang');
        }
        setisCheckedartenglang(current => !current);
      };
    const handleChangebengali = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked bengali');
        } else {
          console.log('⛔️ Checkbox is NOT checked bengali');
        }
        setisCheckedbengali(current => !current);
      };
    const handleChangesci = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked sci');
        } else {
          console.log('⛔️ Checkbox is NOT checked sci');
        }
        setisCheckedsci(current => !current);
      };
    const handleChangeict = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked ict');
        } else {
          console.log('⛔️ Checkbox is NOT checked ict');
        }
        setisCheckedict(current => !current);
      };

     
      const handleManageDocument=()=>{

      }
      const handleManageSubject=()=>{

      }
      const handleSave=(e)=>{
            if(alertpopup){
                alert("postcode should be number only")
            }
            if(alertpopup2){
                alert("postcode in permanent should be number only")
            }
            console.log(studentadmissiondata.gender_student)
            
        
        
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
                            <p>First Name <span>*</span></p>
                            <input type="text" name="firstname_student" placeholder='' value={studentadmissiondata.firstname_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Gender</p>
                            {/* <input type="text" name="gender_student" placeholder='' value={studentadmissiondata.gender_student} onChange={handleInput}/> */}
                            <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' name="genderselect" options={optionsgender} onChange={(e)=>dropdowngendervalue(e)} value={defaultOptionGender} placeholder=""/>
                                    <BsChevronDown/>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Res Phone</p>
                            <input type="text" name="resphone_student" placeholder='' value={studentadmissiondata.resphone_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                       
                </Col>
                <Col>
                    <Row>
                    <Col lg={12}>
                        <p>Middle Name</p>
                        <input type="text" name="middlename_student" placeholder='' value={studentadmissiondata.middlename_student} onChange={handleInput}/>
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Date of Birth</p>
                            <input type="text" name="dateofbirth_student" placeholder='' value={studentadmissiondata.dateofbirth_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Prox Number</p>
                            <input type="text" name="proxnumber_student" placeholder='' value={studentadmissiondata.proxnumber_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                    <Col lg={12}>
                        <p>Last Name</p>
                        <input type="text" name="lastname_student" placeholder='' value={studentadmissiondata.lastname_student} onChange={handleInput}/> 
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Email</p>
                            <input type="email" name="email_student" placeholder='' value={studentadmissiondata.email_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="inputwithicononright">
                                <p>Id</p>
                                <input type="text" name="id_student" placeholder='' value={studentadmissiondata.id_student} onChange={handleInput}/>
                                <Button><RxReload/></Button>
                            </div>
                         
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col lg={12}>
                            <p>Nick Name</p>
                            <input type="text" name="nickname_student" placeholder='' value={studentadmissiondata.nickname_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p>Mobile</p>
                            <input type="text" name="mobile_student" placeholder='' value={studentadmissiondata.mobile_student} onChange={handleInput}/>
                        </Col>
                    </Row>
                   
                </Col>
                <Col>
                    <div className="imguploadbox">
                        <div className="imgupicon">
                            <FiUpload/>
                        </div>
                        <p>Drag Files to Upload <br/>or</p>
                       
                            <input
                                type="file"
                                id="fileElem"
                                multiple
                                accept="image/*"
                                className="visually-hidden"
                                onChange={(e)=>{handleuploadimg(Array.from(e.target.files))}}
                                />
                                <label htmlFor="fileElem">Browse</label>

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
                                    <input type="date" name="admissiondate_student" placeholder='' value={studentadmissiondata.admissiondate_student} onChange={handleInput}/>
                                </Col>
                                <Col lg={6}>
                                    <p>Session</p>
                                    <input type="text" name="session_student" placeholder='' value={studentadmissiondata.session_student} onChange={handleInput}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Class</p>
                                    <input type="text" name="class_student" placeholder='' value={studentadmissiondata.class_student} onChange={handleInput}/>
                                </Col>
                                <Col lg={4}>
                                    <p>Section</p>
                                    <input type="text" name="section_student" placeholder='' value={studentadmissiondata.section_student} onChange={handleInput}/>
                                </Col>
                                <Col lg={4}>
                                    <p>Shift</p>
                                    <input type="text" name="shift_student" placeholder='' value={studentadmissiondata.shift_student} onChange={handleInput}/>
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
                                    <input type="date" name="readmissiondate_student" placeholder='' value={studentadmissiondata.readmissiondate_student} onChange={handleInput}/> 
                                </Col>
                                <Col lg={6}>
                                    <p>Session</p>
                                    <input type="text" name="readmissionSession_student" placeholder='' value={studentadmissiondata.readmissionSession_student} onChange={handleInput}/>
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
                                    <input type="date" name="admissiondate_student_current" placeholder='' value={studentadmissiondata.admissiondate_student_current} onChange={handleInput}/>
                                </Col>
                                <Col lg={6}>
                                    <p>Session</p>
                                    <input type="text" name="session_student_current" placeholder='' value={studentadmissiondata.session_student_current} onChange={handleInput}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Class</p>
                                    <input type="text" name="class_student_current" placeholder='' value={studentadmissiondata.class_student_current} onChange={handleInput}/>
                                </Col>
                                <Col lg={4}>
                                    <p>Section</p>
                                    <input type="text" name="section_student_current" placeholder='' value={studentadmissiondata.section_student_current} onChange={handleInput}/>
                                </Col>
                                <Col lg={4}>
                                    <p>Shift</p>
                                    <input type="text" name="shift_student_current" placeholder='' value={studentadmissiondata.shift_student_current} onChange={handleInput}/>
                                    </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Campus</p>
                                    <input type="text" name="campus_student_current" placeholder='' value={studentadmissiondata.campus_student_current} onChange={handleInput}/>
                                </Col>
                                <Col lg={4}>
                                    <p>Status</p>
                                    <input type="text" name="status_student_current" placeholder='' value={studentadmissiondata.status_student_current} onChange={handleInput}/>
                                </Col>
                                <Col lg={4}>
                                    <p>End Date</p>
                                    <input type="date" name="enddate_student_current" value={studentadmissiondata.enddate_student_current} onChange={handleInput} placeholder=''/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <p>Remark</p>
                                    <input type="text" name="remark_student_current" placeholder='' value={studentadmissiondata.remark_student_current} onChange={handleInput}/>
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
                    id="filltabexample"
                    className="mb3"
                    fill
                    >
                    <Tab eventKey="home" title="Address">
                        <Row style={{paddingTop:"23px"}}>
                            <Col lg={6} style={{borderRight:"1px solid rgba(0,0,0,0.1)"}}>
                                {/* <div className="basicinfopopulate"> */}
                                    <h4>Present Address</h4>
                                    <Row>
                                        <Col >
                                            <p>Holding</p>
                                            <input type="text" name="holding_student_detailed_present" placeholder='' value={studentadmissiondata.holding_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Road</p>
                                            <input type="text" name="road_student_detailed_present" placeholder='' value={studentadmissiondata.road_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Area</p>
                                            <input type="text" name="area_student_detailed_present" placeholder='' value={studentadmissiondata.area_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                        <Col >
                                            <p>Post Code</p>
                                            <input maxLength={4} id="postcodeid" className={studentadmissiondata?"errorborder":""} type="text" name="postcode_student_detailed_present"  placeholder='' value={studentadmissiondata.postcode_student_detailed_present} onChange={onlynumberinput}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <p>Thana</p>
                                            <input type="text" name="thana_student_detailed_present" placeholder='' value={studentadmissiondata.thana_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                        <Col>
                                            <p>District</p>
                                            <input type="text" name="district_student_detailed_present" placeholder='' value={studentadmissiondata.district_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                        <Col >
                                            <p>Division</p>
                                            <input type="text" name="division_student_detailed_present" placeholder='' value={studentadmissiondata.division_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                        <Col >
                                            <p>Country</p>
                                            <input type="text" name="country_student_detailed_present" placeholder='' value={studentadmissiondata.country_student_detailed_present} onChange={handleInput}/>
                                        </Col>
                                    </Row>
                                {/* </div> */}
                                
                            </Col>
                            <Col lg={6}>
                            <h4>Permanent Address</h4>
                                    <Row>
                                        <Col >
                                            <p>Holding</p>
                                            <input type="text" name="holding_student_detailed_permanent" placeholder='' value={studentadmissiondata.holding_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Road</p>
                                            <input type="text" name="road_student_detailed_permanent" placeholder='' value={studentadmissiondata.road_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                        <Col style={{flex:"1 1 15%"}}>
                                            <p>Area</p>
                                            <input type="text" name="area_student_detailed_permanent" placeholder='' value={studentadmissiondata.area_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                        <Col >
                                            <p>Post Code</p>
                                            <input  maxLength={4} type="text" id="postcodeid2" name="postcode_student_detailed_permanent" placeholder='' value={studentadmissiondata.postcode_student_detailed_permanent} onChange={onlynumberinput}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <p>Thana</p>
                                            <input type="text" name="thana_student_detailed_permanent" placeholder='' value={studentadmissiondata.thana_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                        <Col>
                                            <p>District</p>
                                            <input type="text" name="district_student_detailed_permanent" placeholder='' value={studentadmissiondata.district_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                        <Col >
                                            <p>Division</p>
                                            <input type="text" name="division_student_detailed_permanent" placeholder='' value={studentadmissiondata.division_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                        <Col >
                                            <p>Country</p>
                                            <input type="text" name="country_student_detailed_permanent" placeholder='' value={studentadmissiondata.country_student_detailed_permanent} onChange={handleInput}/>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="fathersinfo" title="Father's Info" >                        
                        <Row style={{marginTop:"40px"}}>
                            <Col>
                                <p>First Name</p>
                                <input type="text" name="firstname_fathers" placeholder='' value={studentadmissiondata.firstname_fathers} onChange={handleInput}/>
                            </Col>
                            <Col>
                                <p>Middle Name</p>
                                <input type="text" name="middlename_fathers" placeholder='' value={studentadmissiondata.middlename_fathers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Last Name</p>
                                <input type="text" name="lastname_fathers" placeholder='' value={studentadmissiondata.lastname_fathers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Mobile</p>
                                <input type="text" name="mobile_fathers" placeholder='' value={studentadmissiondata.mobile_fathers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Phone</p>
                                <input type="text" name="phone_fathers" placeholder='' value={studentadmissiondata.phone_fathers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>National Id</p>
                                <input type="text" name="nationalid_fathers" placeholder='' value={studentadmissiondata.nationalid_fathers} onChange={handleInput}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Education</p>
                                <input type="text" name="education_fathers" placeholder='' value={studentadmissiondata.education_fathers} onChange={handleInput}/>
                            </Col>
                            <Col>
                                <p>Education Details</p>
                                <input type="text" name="education_details_fathers" placeholder='' value={studentadmissiondata.education_details_fathers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Occupation</p>
                                <input type="text" name="occupation_fathers" placeholder='' value={studentadmissiondata.occupation_fathers} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Occupation Details</p>
                                <input type="text" name="occupation_details_fathers" placeholder='' value={studentadmissiondata.occupation_details_fathers} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Office Address</p>
                                <input type="text" name="officeAddress_fathers" placeholder='' value={studentadmissiondata.officeAddress_fathers} onChange={handleInput}/>
                            </Col>
                           
                        </Row>
                        
                    </Tab>
                    <Tab eventKey="mothersinfo" title="Mother's Info">
                    <Row style={{marginTop:"40px"}}>
                            <Col>
                                <p>First Name</p>
                                <input type="text" name="firstname_mothers" placeholder='' value={studentadmissiondata.firstname_mothers} onChange={handleInput}/>
                            </Col>
                            <Col>
                                <p>Middle Name</p>
                                <input type="text" name="middlename_mothers" placeholder='' value={studentadmissiondata.middlename_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Last Name</p>
                                <input type="text" name="lastname_mothers" placeholder='' value={studentadmissiondata.lastname_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Mobile</p>
                                <input type="text" name="mobile_mothers" placeholder='' value={studentadmissiondata.mobile_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Phone</p>
                                <input type="text" name="phone_mothers" placeholder='' value={studentadmissiondata.phone_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>National Id</p>
                                <input type="text" name="nationalid_mothers" placeholder='' value={studentadmissiondata.nationalid_mothers} onChange={handleInput}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Education</p>
                                <input type="text" name="education_mothers" placeholder='' value={studentadmissiondata.education_mothers} onChange={handleInput}/>
                            </Col>
                            <Col>
                                <p>Education Details</p>
                                <input type="text" name="education_details_mothers" placeholder='' value={studentadmissiondata.education_details_mothers} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Occupation</p>
                                <input type="text" name="occupation_mothers" placeholder='' value={studentadmissiondata.occupation_mothers} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Occupation Details</p>
                                <input type="text" name="occupation_details_mothers" placeholder='' value={studentadmissiondata.occupation_details_mothers} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Office Address</p>
                                <input type="text" name="officeAddress_mothers" placeholder='' value={studentadmissiondata.officeAddress_mothers} onChange={handleInput}/>
                            </Col>
                           
                        </Row>
                    </Tab>
                    <Tab eventKey="local guardian" title="Local Guardian">
                    <Row style={{marginTop:"40px"}}>
                            <Col>
                                <p>First Name</p>
                                <input type="text" name="firstname_local_guaridan" placeholder='' value={studentadmissiondata.firstname_local_guaridan} onChange={handleInput} />
                            </Col>
                            <Col>
                                <p>Middle Name</p>
                                <input type="text" name="middlename_local_guardian" placeholder='' value={studentadmissiondata.middlename_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Last Name</p>
                                <input type="text" name="lastname_local_guardians" placeholder='' value={studentadmissiondata.lastname_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>National ID</p>
                                <input type="text" name="nationalid_local_guardian" placeholder='' value={studentadmissiondata.nationalid_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Passport</p>
                                <input type="text" name="passport_local_guardian" placeholder='' value={studentadmissiondata.passport_local_guardian} onChange={handleInput}/>
                            </Col>
                           
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <p>Mobile</p>
                                <input type="text" name="mobile_local_guardian" placeholder='' value={studentadmissiondata.mobile_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col lg={6}>
                                <p>Address</p>
                                <input type="text" name="address_local_guardian" placeholder='' value={studentadmissiondata.address_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col lg={3}>
                                <p>Religion</p>
                                <input type="text" name="religion_local_guardian" placeholder='' value={studentadmissiondata.religion_local_guardian} onChange={handleInput}/>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="other" title="Other">
                    <Row style={{marginTop:"40px"}}>
                            <Col>
                                <p>Blood Group</p>
                                <input type="text" name="firstname_local_guaridan" placeholder='' value={studentadmissiondata.firstname_local_guaridan} onChange={handleInput} />
                            </Col>
                            <Col>
                                <p>Religion</p>
                                <input type="text" name="middlename_local_guardian" placeholder='' value={studentadmissiondata.middlename_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col >
                                <p>Nationality</p>
                                <input type="text" name="lastname_local_guardians" placeholder='' value={studentadmissiondata.lastname_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Passport</p>
                                <input type="text" name="nationalid_local_guardian" placeholder='' value={studentadmissiondata.nationalid_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col style={{flex:"1 1 15%"}}>
                                <p>Birth Certificate No</p>
                                <input type="text" name="passport_local_guardian" placeholder='' value={studentadmissiondata.passport_local_guardian} onChange={handleInput}/>
                            </Col>
                           
                        </Row>
                    <Row >
                            <Col lg={5}>
                                <p>Blood Group</p>
                                <input type="text" name="firstname_local_guaridan" placeholder='' value={studentadmissiondata.firstname_local_guaridan} onChange={handleInput} />
                            </Col>
                            <Col lg={5}>
                                <p>Religion</p>
                                <input type="text" name="middlename_local_guardian" placeholder='' value={studentadmissiondata.middlename_local_guardian} onChange={handleInput}/>
                            </Col>
                            <Col lg={2}>
                                <p>Nationality</p>
                                <input type="text" name="lastname_local_guardians" placeholder='' value={studentadmissiondata.lastname_local_guardian} onChange={handleInput}/>
                            </Col>
                           
                           
                        </Row>
                    </Tab>
                    <Tab eventKey="afd" title="Application For Due">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="stuentstatus" title="Student Status">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="paymenthistory" title="Payment History">
                        dfgdfg
                    </Tab>
                    <Tab eventKey="permissions" title="Permissions">
                        dfgdfg
                    </Tab>
                   
                </Tabs>
            </div>
        </div>

        <div className="studentaddmissioninfobuttons">
            <Row>
               
                <Col style={{flex:"1 1 8%"}}>
                    <Button onClick={handleManageDocumentShow}>Manage Document</Button>
                    <Modal className='managedocumentmodal' show={showmanageDocument} onHide={handleCloseManageDocumentClose}>
                        <Modal.Header >
                        <h4>Manage Document</h4>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="basicinfopopulate">
                                <Row>
                                    <Col lg={8}>
                                        <Row>
                                            <Col lg={8}>
                                                <p>ID</p>
                                                <input type="text" name="passport_local_guardian" placeholder='' value={studentadmissiondata.passport_local_guardian} onChange={handleInput}/>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="dropdownwrapper">
                                                    <Dropdown className='filterdropone' name="genderselect" options={optionsdropdownmodaldocumentcategory} onChange={(e)=>dropdownmodaldocumentcategory(e)} value={defaultoptiondropdownmodaldocumentcategory} placeholder=""/>
                                                    <BsChevronDown/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                               
                                                <table>
                                                        {
                                                            
                                                            managedocumentsfilesarraystate.map((item,key)=>{
                                                                return(
                                                                    
                                                                            <tbody key={key}>
                                                                                <tr>
                                                                                <td>
                                                                                <div className="tabledatawrapperflex">
                                                                                <div className="left">
                                                                                    <h5>{selectDocumentcategoryinmodal}</h5>
                                                                                </div>
                                                                                <div className="right">
                                                                                <div className="redpill">
                                                                                    <p>Remove -</p>
                                                                                </div>
                                                                                </div>
                                                                            </div>
                                                                            </td>
                                                                            </tr>
                                                                        </tbody>
                                                                )  
                                                            }
                                                            )
                                                        }
                                                        </table>  
                                                        
                                                       
                                               
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="imguploadboxmanagedocument">
                                            <div className="imgupicon">
                                                <FiUpload/>
                                            </div>
                                            <p>Drag Files to Upload <br/>or</p>
                                        
                                                <input
                                                    type="file"
                                                    id="fileElem2"
                                                    multiple
                                                    accept="image/*,.pdf"
                                                    className="visually-hidden"                                                    
                                                    onChange={(e)=>{handlemanagedocupload(Array.from(e.target.files)[0])}}
                                                    />
                                                    <label htmlFor="fileElem2">Browse</label>

                                            <p>Click file for see preview</p>
                                            {/* {console.log( managedocumentsfilesarray.slice(2))} */}
                                        </div>
                                    </Col>
                                </Row>
                               
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="managedocumentbuttons">
                                <Button>Update</Button>
                                <Button>Reset</Button>
                            </div>
                        
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col style={{flex:"1 1 8%"}}>
                    <Button onClick={handleManageSubjectShow}>Manage Subject</Button>
                    <Modal className='managedocumentmodal managesubjectmodal' show={showmanageSubject} onHide={handleCloseManageSubjectClose}>
                        <Modal.Header >
                        <h4>Manage Subject</h4>
                        </Modal.Header>
                        <Modal.Body style={{display:"flex",alignItems:"center"}}>
                            <div className="basicinfopopulate">
                                <Row>
                                    <Col lg={6} className="d-flex align-items-center">
                                        <Row>
                                            <Col lg={6} style={{margin:"0 auto"}}>
                                                <p>Name</p>
                                                <input type="text" name=""  placeholder={studentadmissiondata.firstname_student+" "+studentadmissiondata.middlename_student+" "+studentadmissiondata.lastname_student} disabled/>
                                                <p>ID</p>
                                                <input type="text" name=""  placeholder={studentadmissiondata.id_student} disabled/>
                                                <p>Class</p>
                                                <input type="text" name=""  placeholder={studentadmissiondata.class_student} disabled/>
                                            </Col>
                                           
                                        </Row>
                                    </Col>
                                    <Col lg={4}>
                                    <Row>
                                            <Col lg={12}>
                                               
                                                <table className="managesubjecttable">
                                                       
                                                                    
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            Active
                                                        </th>
                                                        <th>
                                                            Subject Name
                                                        </th>
                                                    </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedmath}
                                                                    onChange={handleChangeMathematics}
                                                                    id="remember2"
                                                                    name="isCheckedmath"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Mathematics
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedartandcraft}
                                                                    onChange={handleChangeartandcraft}
                                                                    id="remember2"
                                                                    name="subscribe3"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Art & Craft
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedenglit}
                                                                    onChange={handleChangeenglit}
                                                                    id="remember2"
                                                                    name="subscribe3"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                English Literature
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedartenglang}
                                                                    onChange={handleChangeenglang}
                                                                    id="remember2"
                                                                    name="subscribe3"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                English Language
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedbengali}
                                                                    onChange={handleChangebengali}
                                                                    id="remember2"
                                                                    name="subscribe3"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Bengali
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedsci}
                                                                    onChange={handleChangesci}
                                                                    id="remember2"
                                                                    name="subscribe3"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Science
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="checkboxfull">                      
                                                                <label className='checkcontainer'>
                                                                
                                                                <input
                                                                    type="checkbox"
                                                                    value={isCheckedict}
                                                                    onChange={handleChangeict}
                                                                    id="remember2"
                                                                    name="subscribe3"                        
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                                
                                                                </div>
                                                            </td>
                                                            <td>
                                                                ICT
                                                            </td>
                                                        </tr>
                                                </tbody>
                                                               
                                                </table>  
                                                        
                                                       
                                               
                                            </Col>
                                        </Row>
                                    
                                    </Col>
                                </Row>
                               
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="managedocumentbuttons">
                                <Button>Save</Button>
                                
                            </div>
                        
                        </Modal.Footer>
                    </Modal>
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