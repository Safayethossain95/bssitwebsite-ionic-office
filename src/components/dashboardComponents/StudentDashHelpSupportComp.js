import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../../sassFiles/style.scss'
import { Button } from 'react-bootstrap'
import {HiOutlineBell} from 'react-icons/hi'
import {Row,Col,Nav,Tab,Tabs} from 'react-bootstrap'
import { prevPaymentHistory,attendanceData,paymentHistoryDue,resulttabdata,noticeData,noticeDataGreetings,documentData,attendenceApi,periodsubjectdata,billInfoData,noticeGreetingsdaydate,leavereqstatusData,routinetabData,profiletabApi,helpandsupporttabs } from '../../utils/DashboardApi/StudentDashboardApi'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import $ from 'jquery';
import Dropdown2 from '../subComponents/CustomSubComponents/Dropdown2'
import PillSmall from '../subComponents/CustomSubComponents/PillSmall'
import '../../sassFiles/sassPages/dashboards/dashvariables.scss'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useNavigate } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {MdSend} from 'react-icons/md'
ChartJS.register(ArcElement, Tooltip, Legend);
const StudentDashHelpSupportComp = () => {
    let navigate = useNavigate()
    
    const handlegoBack=()=>{
      navigate('/studashboard')
    }
    
    const handlelogout=()=>{
        navigate('/')
    }
    const [dependentdatashow,setdependentdatashow] = useState("")
    const handleOpenNewTicket=()=>{
        setdependentdatashow("OpenForm")
        console.log("yes man")
    }

    const [typeofleaverequest,settypeofleaverequest]=useState("")

    const typeleavereq=(myval)=>{
        settypeofleaverequest(myval)
    }
    const [leavedatefrom, setleavedatefrom] = useState(null);    

    const [leavedateto,setleavedateto] = useState(null)
    
    const [leavetimefrom,setleavetimefrom] = useState(null)
    
    const [leavetimeto,setleavetimeto] = useState(null)
    
    const [reqsubmissiondate,setreqsubmissiondate] = useState(null)

    const [validreason,setvalidreason]= useState(null)

    const [docfile,setdocfile]=useState()

    const docfileuploadhandler = (e)=>{
        
        setdocfile(e.target.files[0]);
    }

    
    
    
    

      const handleSubmit=()=>{
       
        console.log(docfile)
        console.log(typeofleaverequest)
        console.log(validreason)
        if(leavedateto != null){

            var lvdtmonth = leavedateto.$M + 1;
            var leavedatetost = leavedateto.$y + '-'+ lvdtmonth +'-'+ leavedateto.$D;
             console.log(leavedatetost)
        }
       
        if(leavedatefrom != null){
            var lvdfrmonth = leavedatefrom.$M + 1;
            var leavedatefrst = leavedatefrom.$y + '-'+ lvdfrmonth +'-'+leavedatefrom.$D ;
            
            console.log(leavedatefrst)
            

        }
        if(reqsubmissiondate != null){
            var reqsubmonth = reqsubmissiondate.$M + 1;
            var reqsubdaatefinal = reqsubmissiondate.$y + '-'+ reqsubmonth +'-'+reqsubmissiondate.$D ;
            
            console.log(reqsubdaatefinal)
            

        }
        if(leavetimefrom != null){
            var leavetimefromtmp = leavetimefrom.$H + ':' + leavetimefrom.$m
            console.log('leave time from ' +leavetimefromtmp)

        }
        if(leavetimeto != null){
            var leavetimetotmp = leavetimeto.$H + ':' + leavetimeto.$m
            console.log('leave time to ' +leavetimetotmp)

        }
           
        
        const leaveformdataall={
            typeofleavereq:typeofleaverequest,
            leavedateto:leavedatetost,
            leavedatefrom:leavedatefrst,
            leavetimefrom:leavetimefromtmp,
            leavetimeto:leavetimetotmp,
            reqsubmissiondate:reqsubdaatefinal,
            validreason:validreason,
            documentfile:docfile,
            
        }

        console.dir(leaveformdataall)
        
      }

    const [selected, setSelected] = React.useState(Date);
    
    const optionme = [
        {
            opt:'Select Section'
        },
        {
            opt:'First Semester'
        }
    ]
    const optionmeleavetype = [
        {
            opt:'Personal'
        },
        {
            opt:'Casual'
        }
    ]

    const handleDocumentDownloadroutine = (file)=>{

    }
    const [prevsum,setprevsum] = useState(0)
    
    $(".dropdownwrapper svg").click(function(){
        $(".Dropdown-root").toggleClass("is-open")

        $(".Dropdown-menu").css("display","block")
        // $(".Dropdown-menu").attr("aria-expanded","true")
      });

      
    const [startDate,setStartDate] = useState("")
      const handleStartDate=(e)=>{
        setStartDate(e.target.value)
        console.log(startDate)
      }
    const [endDate,setEndtDate] = useState("")
      const handleEndDate=(e)=>{
        setEndtDate(e.target.value)
        console.log(endDate)
      }
   
    function replaceWithBr() {
        return noticeDataGreetings.replace(/\n/g, "<br />")
        }

    const handleDocumentDownload=(documenttoDownload)=>{

    }
    const handleReqCorrection=()=>{

    }
    const handleExamRoutineDownload=()=>{

    }

    // const chart1color1 = "rgb(249, 57, 161)";
    // const chart1color2 = "rgb(64, 223, 205)";
    // const chart1color3 = "rgb(251, 213, 64)";
   
    const chart1color1 = "rgba(245, 141, 145, 1)";
    const chart1color2 = "rgba(127, 228, 169, 1)";
    const chart1color3 = "rgba(177, 206, 255, 1)";
    const chdata = {
        labels:["absent","present","late"],
        datasets:[{
            data:[attendenceApi.firstSemester.absent,attendenceApi.firstSemester.present,attendenceApi.firstSemester.late],
            backgroundColor:[
                chart1color1,
                chart1color2,
                chart1color3

            ],
            borderWidth:0,
            
            
        }],
        options: {
            plugins: {
              legend: {
                display: false
              }
            }
          }
        
    }
    const chdata2 = {
        labels:["absent","present","late"],
        datasets:[{
            data:[attendenceApi.secondSemester.absent,attendenceApi.secondSemester.present,attendenceApi.secondSemester.late],
            backgroundColor:[
                chart1color1,
                chart1color2,
                chart1color3

            ],
            borderWidth:0,
            
            
        }],
        
    }
    const [drpday,setDrpday] = useState("")
    
    const dropdownvalue=(e)=>{
        // console.log(e.value)
        setDrpday(e.value)
        console.log(drpday)
      }
      const dayoptions = [
        'Select Day','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Frriday'
      ];
      const defaultOptiontype = dayoptions[0];

      const [drproutinetype,setdrproutinetype] = useState("")
    
    const dropdownvalueroutinetype=(e)=>{
        // console.log(e.value)
        setdrproutinetype(e.value)
        console.log(drpday)
      }
      const Optionroutinetype = [
        'week','Month','Year'
      ];
      const defaultOptionroutinetype = Optionroutinetype[0];
      
      const [doctypeprevdoc,setdoctypeprevdoc] = useState("")
    
    const dropdownvaluedovtypeprevdoc=(e)=>{
        // console.log(e.value)
        setdoctypeprevdoc(e.value)
        console.log(drpday)
      }
      const optionsemsterresulttab = [
        'First Semester','Second Semester'
      ];
      const defaultOptionsemestertype = optionsemsterresulttab[0];
      const [semesterselectresult,setsemesterselectresult] = useState("")
    
    const drpdwnsemesterselecthandler=(e)=>{        
        setsemesterselectresult(e.value)
        
      }
      const optiontyperesulttab = [
        'Assessment','Result'
      ];
      const defaultOptionstyperesulttab = optiontyperesulttab[0];
      const [typeresulttab,settyperesulttab] = useState("")
    
    const drpdwntyperesulttabhandler=(e)=>{        
        settyperesulttab(e.value)
        
      }
      const Optiondoctypeprevdoc = [
        'All','Home Work','Class Work','Exam Paper','Assessment','Syllabus'
      ];
      const defaultOptiondoctypeprevdoc = Optiondoctypeprevdoc[0];

      const [drpsection,setdrpsection] = useState("")
   
      const [variableactivekey,setvariableactivekey] = useState("ninth")
      
      const [dashheaderchange,setdashheaderchange] = useState("Help & Support")

      const handleSelecttab = (tabvalue)=>{
        setvariableactivekey(tabvalue)
        var element = document.getElementById(tabvalue);
        var firstthing = document.getElementById("first");
        var secondthing = document.getElementById("second");
        var thirdthing = document.getElementById("third");
        var fourththing = document.getElementById("fourth");
        var fifththing = document.getElementById("fifth");
        var sixththing = document.getElementById("sixth");
        var sevenththing = document.getElementById("seventh");
        var eighththing = document.getElementById("eighth");
        var ninththing = document.getElementById("ninth");
        var tenththing = document.getElementById("tenth");
        firstthing.classList.remove("active");
        secondthing.classList.remove("active");
        thirdthing.classList.remove("active");
        fourththing.classList.remove("active");
        fifththing.classList.remove("active");
        sixththing.classList.remove("active");
        sevenththing.classList.remove("active");
        eighththing.classList.remove("active");
        ninththing.classList.remove("active");
        tenththing.classList.remove("active");
        element.classList.add("active");
        if(tabvalue=="first"){
            setdashheaderchange("Good Morning Jisan")
        }
        else if(tabvalue=="second"){
            setdashheaderchange("Document")
        }
        else if(tabvalue=="third"){
            setdashheaderchange("Notice")
        }
        else if(tabvalue=="fourth"){
            setdashheaderchange("Class Routine")
        }
        else if(tabvalue=="fifth"){
            setdashheaderchange("Attendance")
        }
        else if(tabvalue=="sixth"){
            setdashheaderchange("Bill Informatioin")

        }
        else if(tabvalue=="seventh"){
            setdashheaderchange("Result")            
        }
        else if(tabvalue=="eighth"){
            setdashheaderchange("Leave Form")            
        }
        else if(tabvalue=="ninth"){
            setdashheaderchange("Help & Support")            
            
        }
        else if(tabvalue=="tenth"){
            setdashheaderchange("Exam Routine")
        }
        else{
            setdashheaderchange("Help & Support")
        }
      }
  return (
    <>
        <Tab.Container id="left-tabs-example" activeKey={variableactivekey}>
        <div className="sidebarleftbill">
            <div className="sidebarleftbillbox">
                <div className="logo">
                    <img src="./assets/images/logo/bsslogostudashboard.png" alt="" />
                </div>
                <div className="menupart">
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <a id="first" onClick={()=>handleSelecttab("first")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Dashboard</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="second" onClick={()=>handleSelecttab("second")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Document</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="third" onClick={()=>handleSelecttab("third")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Notice</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="fourth" onClick={()=>handleSelecttab("fourth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Class Routine</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="fifth" onClick={()=>handleSelecttab("fifth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Attendence</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="sixth" onClick={()=>handleSelecttab("sixth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Bill Info</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="seventh" onClick={()=>handleSelecttab("seventh")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Result</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="eighth" onClick={()=>handleSelecttab("eighth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Leave Form</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="ninth"  className='active' onClick={()=>handleSelecttab("ninth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Profile</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="tenth" onClick={()=>handleSelecttab("tenth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Exam Routine</a>
                    </Nav.Item>
                </Nav>
                  
                </div>
                <div className="logout">
                  <Button onClick={handlelogout}>Logout</Button>
                </div>
            </div>
        </div>
        <div className="rightpartcontentwrap">
        <div className="headerpartbill">
            
            <div className="leftsidecontent">
               <h3>{dashheaderchange}</h3>
            </div>
        
            <div className="rightsidestuff">
                <div className="bellicon">
                    <HiOutlineBell/>
                </div>
                <div className="profilesmallinfo">
                    <div className="profilepic">
                        <img src="./assets/images/dashboards/studentDashboard/profilepic.png" alt="headerprofilepic" />
                    </div>
                    <div className="roleandid">
                        <div className="roleidwrapper">
                            <h5>Md Jisan Khan</h5>
                            <p>ID 1705032108</p>
                        </div>
                    </div>
                </div>
            </div>
       
    
        </div>
        <Tab.Content >
            <Tab.Pane eventKey="first" className="tabPane">
                <div className="tabpaneheightadjust">
                    <Row style={{flex:"1 1 50%"}}>
                    <Col lg={4} style={{paddingRight:"15px"}}>
                        <div className="samebox">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Documnets</h4>
                                        <p onClick={()=>handleSelecttab("second")} >View more</p>
                                </div>
                            </div>
                            <div className="contentpart" >
                            
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon1.png" alt="smallbaricon1.png" />
                                                
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.homework.filetype}</h5>
                                                    <p>{documentData.homework.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon2.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.classwork.filetype}</h5>
                                                    <p>{documentData.classwork.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon3.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.assesment.filetype}</h5>
                                                    <p>{documentData.assesment.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon4.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.exampaper.filetype}</h5>
                                                    <p>{documentData.exampaper.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                            <div className="smallbarcard" >
                                                <img src="./assets/images/dashboards/studentDashboard/smallbaricon5.png" alt="smallbaricon1.png" />
                                                <div className="textssmallbar">
                                                    <div className="flexwrap">
                                                    <h5>{documentData.syllabus.filetype}</h5>
                                                    <p>{documentData.syllabus.numberOfFiles==0 ? "No File Available For Download":documentData.homework.numberOfFiles+ " files available for download"} </p>
                                                    </div>
                                                </div>
                                                <div className="downloadbutton">
                                                    <img src="./assets/images/dashboards/studentDashboard/downloadimg.png" alt="downloadimg.png" />
                                                </div>
                                            </div>
                                
                            
                            </div>
                        </div>
                        
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                    <div className="samebox">
                        <div className="headerpart">
                            <div className="flexwrap">
                                <div className="flexwrap2">
                                <h4>Notice </h4>
                                {/* <div><span>18</span></div> */}
                                </div>
                                <p>View more</p>
                            </div>
                        </div>
                        <div className="contentpart">
                        {
                            noticeData.map((item,key)=>{
                                return(
                                <div className="noticebarmini" key={key}>
                                    <div className="publishdatepart">
                                        <p>{item.publishDateDayMonth}</p>
                                        <p>{item.publishDateYear}</p>
                                    </div>
                                    <div className="noticeboxtextbox">
                                    <h5> {item.heading}</h5>                    
                                    <p>{item.noticeheading}</p>
                                    </div>                                    
                                </div>
                                )
                            })
                        }

                        </div>
                        
                    </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0"}}>
                    <div className="samebox">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Attendence</h4>
                                    <p eventKey="second">View all</p>
                                </div>
                            </div>
                            <div className="chartidtabd">
                            <Tab.Container id="chartidtabs" defaultActiveKey="first-chart">
                                <Nav variant="pills" className="flex-row">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first-chart">First Semester</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second-chart">Second Semester</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first-chart">
                                        <div className="presenttext">
                                        <p>{attendenceApi.firstSemester.present}%</p>
                                        <p>present</p>
                                        </div>
                                        <div className="latetext">
                                        <p>{attendenceApi.firstSemester.late}%</p>
                                        <p>late</p>
                                        </div>
                                        <div className="absenttext">
                                        <p >{attendenceApi.firstSemester.absent}%</p>
                                        <p>absent</p>
                                        </div>
                                        <div className="chartwrapperheight">
                                            <Doughnut style={{margin:"0 auto",width:"250px",height:"250px"}} data={chdata}/>

                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second-chart">
                                        <div className="presenttext">
                                        <p>{attendenceApi.secondSemester.present}%</p>
                                        <p>present</p>
                                        </div>
                                        <div className="latetext">
                                        <p>{attendenceApi.secondSemester.late}%</p>
                                        <p>late</p>
                                        </div>
                                        <div className="absenttext">
                                        <p >{attendenceApi.secondSemester.absent}%</p>
                                        <p>absent</p>
                                        </div>
                                        <div className="chartwrapperheight">

                                        <Doughnut style={{margin:"0 auto",width:"50%!important",height:"50%!important"}} data={chdata2}/>
                                        </div>
                                        
                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    <Row className="secondRow" style={{flex:"1 1 50%"}}> 
                    <Col lg={4} style={{paddingRight:"15px"}}>
                        <div className="samebox prevhistory">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Payment History</h4>
                                    <p>View all</p>
                                </div>
                            </div>

                            <div className="smallheading">
                                <h5>{paymentHistoryDue.dueformonths==1?`You have total ${paymentHistoryDue.dueformonths} month tuition fee due`:paymentHistoryDue.dueformonths>1?`You have total ${paymentHistoryDue.dueformonths} months tuition fee due`:"You have no tution fee due"}</h5>
                            </div>
                            <div className="cardbarprevphistory">
                                <div className="duepartcardbar">
                                    <h3>Due Amount</h3>
                                    <div className="rightsidflexpart">
                                        <div className="pillright">
                                            <h6>Not Paid</h6>
                                        </div>
                                        <div className="amount">
                                            <p>৳ {paymentHistoryDue.dueAmount}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="paymenthistoryoverview">
                                    <div className="paymenthistoryovflexwrap">
                                        {
                                        prevPaymentHistory.map((item,key)=>{
                                            return(
                                                <div key={key} className="payhpartcardbar">
                                                    <div className="monthdatewrapper">
                                                    <h3>{item.month}</h3>
                                                    <p>Date: {item.date}</p>
                                                    </div>
                                                    <div className="rightsidflexpart">
                                                        <div className="pillright">
                                                            <h6>Paid</h6>
                                                        </div>
                                                        <div className="amount">
                                                            <p>৳ {item.amount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <Button className="paymentbutton">Pay Now</Button>
                        </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                        <div className="samebox sameboxroutine">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Class Routine</h4>
                                    <div className="dropdownwrapper">
                                        <Dropdown className='filterdropone' options={dayoptions} onChange={(e)=>dropdownvalue(e)} value={defaultOptiontype}  />
                                        <BsChevronDown/>
                                    </div>
                                </div>
                            </div>
                            <div className="routinetable">
                                <table>
                                    {
                                        drpday=="Saturday"?
                                        periodsubjectdata.saturday.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Sunday"?
                                        periodsubjectdata.sunday.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        :
                                        
                                        drpday=="Monday"?
                                        periodsubjectdata.monday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        :
                                        drpday=="Tuesday"?
                                        periodsubjectdata.tuesday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Wednesday"?
                                        periodsubjectdata.wednesday.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Thursday"?
                                        periodsubjectdata.thursday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Friday"?
                                        periodsubjectdata.friday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        periodsubjectdata.saturday.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        
                                    }
                                
                                </table>
                            </div>
                            <div className="extraclassbox">
                                <p>No Extra Class</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                        <div className="samebox sameboxcalender">
                        <DayPicker
                            captionLayout="dropdown"
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            showOutsideDays
                            />

                            <div className="eventbox">
                                <p>No Event</p>
                            </div>
                            
                        </div>
                    </Col>
                    </Row>

                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="tabPane">
            <div className="tabpaneheightadjust tabpanedocument">
                <div className="todaydocuments">
                    <h4>Today Documents</h4>
                    <Row>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/1.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Home Work</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} style={{paddingLeft:"0"}}>
                            <div className="documenttabsignlebar">
                                    <img src="./assets/images/dashboards/studentDashboard/documentTab/2.png" alt="" />
                                    <div className="documenttabtexts">
                                        <h6>Class Work</h6>
                                        <p>8 files available to download</p>
                                    </div>
                                    <div className="downloadbuttondoctab">
                                        <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"15px"}}>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/3.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Exam Paper</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} style={{paddingLeft:"0"}}>
                            <div className="documenttabsignlebar">
                                    <img src="./assets/images/dashboards/studentDashboard/documentTab/4.png" alt="" />
                                    <div className="documenttabtexts">
                                        <h6>Assessment</h6>
                                        <p>8 files available to download</p>
                                    </div>
                                    <div className="downloadbuttondoctab">
                                        <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"15px"}}>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/5.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Syllabus</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="preveousdocumnets">
                    <h4>Previous Documents</h4>
                    <div className="docselects">
                        <div className="dropdownwrapper docseletssingle">
                            <Dropdown className='filterdropone' options={Optiondoctypeprevdoc} onChange={(e)=>dropdownvaluedovtypeprevdoc(e)} value={defaultOptiondoctypeprevdoc} />
                            <BsChevronDown/>
                        </div>
                        <input type="date" />
                        <input type="date" />
                    </div>
                    <Row>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/1.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Home Work</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} style={{paddingLeft:"0"}}>
                            <div className="documenttabsignlebar">
                                    <img src="./assets/images/dashboards/studentDashboard/documentTab/2.png" alt="" />
                                    <div className="documenttabtexts">
                                        <h6>Class Work</h6>
                                        <p>8 files available to download</p>
                                    </div>
                                    <div className="downloadbuttondoctab">
                                        <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"15px"}}>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/3.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Exam Paper</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} style={{paddingLeft:"0"}}>
                            <div className="documenttabsignlebar">
                                    <img src="./assets/images/dashboards/studentDashboard/documentTab/4.png" alt="" />
                                    <div className="documenttabtexts">
                                        <h6>Assessment</h6>
                                        <p>8 files available to download</p>
                                    </div>
                                    <div className="downloadbuttondoctab">
                                        <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"15px"}}>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/5.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Syllabus</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /> Download</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="tabPane">
                <div className="tabpaneheightadjust">
            <Row>
                <Col lg={12}>
               
                    <div className="noticetabbox">
                        <div className="noticetabboxbarbig">
                            <div className="dateofnoticebox">
                                <h5>{noticeGreetingsdaydate.day}<br/>{noticeGreetingsdaydate.year}</h5>
                            </div>
                            <h3 dangerouslySetInnerHTML={{__html: replaceWithBr()}} ></h3>
                        </div>
                    {
                        noticeData.map((item,key)=>{
                            return(
                                    <div key={key} className="noticetabboxbar">
                                        <div className="dateofnoticebox">
                                            <h5>{item.publishDateDayMonth}<br/>{item.publishDateYear}</h5>
                                        </div>
                                        <h3>{item.noticeheading} - <span>Published : {item.publishDate}</span></h3>
                                    </div>

                            )
                        })
                    }
                    </div>
                </Col>
            
            </Row>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" className="tabPane">
                <div className="tabpaneheightadjust tabpaneroutinetab">
                <div className="bottombuttondiv">
                            <Button><img style={{marginRight:"0px"}} src="./assets/images/dashboards/studentDashboard/routineTab/downloadcoloredbutton.png" alt="" /> Download Routine</Button>
                </div>
                        <Row className='mb-4'>
                            <Col lg={{span: 2 ,offset: 2}} style={{margin:"0 auto"}}>
                            <div className="dropdownwrapper" id="routinedrp">
                                <Dropdown open={true} className='filterdropone'  options={Optionroutinetype} onChange={(e)=>dropdownvalueroutinetype(e)} value={defaultOptionroutinetype} placeholder="Select an option" />
                                <BsChevronDown/>
                            </div>
                            </Col>
                            
                        </Row>
                    <div className="rotuinetabbox">
                        <Row>
                            <Col lg={12}>
                                <div className="routineclassTable">
                                    <table>
                                        <thead>
                                            <tr>
                                                {
                                                  routinetabData.classRoutine.heading.map((item,key)=>{
                                                    return(
                                                        <th key={key}>
                                                            {item.headline}
                                                        </th>
                                                    )
                                                  })  
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                routinetabData.classRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>
                                                                {item.day}
                                                            </td>
                                                            <td>
                                                                <table style={{marginTop:"0"}}>
                                                                {
                                                                    item.period.map((item2,key2)=>{
                                                                        return(
                                                                            <tr key={key2}>
                                                                                <td style={{borderBottom:"1px dashed rgba(0, 0, 0, 0.1)",borderRight:"0"}}>{item2.perioditem}</td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                                </table>
                                                            </td>
                                                            <td>
                                                                <table style={{marginTop:"0"}}>
                                                                {
                                                                    item.subjects.map((item3,key3)=>{
                                                                        return(
                                                                            <tr key={key3}>
                                                                                <td style={{borderBottom:"1px dashed rgba(0, 0, 0, 0.1)",borderRight:"0"}}>{item3.subjectname}</td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }

                                                                </table>
                                                            </td>
                                                            <td>
                                                                <table style={{marginTop:"0"}}>
                                                                {
                                                                    item.time.map((item4,key4)=>{
                                                                        return(
                                                                            <tr key={key4}>
                                                                                <td>{item4.timename}</td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }

                                                                </table>
                                                            </td>
                                                            <td className='downbtncell'>
                                                                <Button onClick={()=>handleDocumentDownloadroutine(item.download)}>
                                                                    <img src="./assets/images/dashboards/studentDashboard/routineTab/download.png" alt="" />
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth" className="tabPane">
                <div className="tabpaneheightadjust tabpanerightattandancetab">
                    <div className="atttabbox">
                    <Row className='firstrow'>
                            <Col className="d-flex align-items-end">
                            <div className="dropdownwrapper w-100" id="routinedrp">
                                <Dropdown open={true} className='filterdropone'  options={Optionroutinetype} onChange={(e)=>dropdownvalueroutinetype(e)} value={defaultOptionroutinetype} placeholder="Select an option" />
                                <BsChevronDown/>
                            </div>
                            </Col>
                            <Col className="d-flex align-items-end">
                                {/* <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' options={optionsemester} onChange={(e)=>dropdownvaluesection(e)} value={defaultOptionsemester} placeholder="Select an option" />
                                    <BsChevronDown/>
                                </div>                             */}
                               <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                            </Col>
                            <Col  className="d-flex align-items-end">
                            
                                <input type="date" placeholder='start date' onChange={(e)=>handleStartDate(e)} />
                           
                            </Col>
                            <Col className="d-flex align-items-end">
                            
                                <input type="date" placeholder='end date' onChange={(e)=>handleEndDate(e)} />
                            </Col>
                            <Col className="d-flex align-items-end">
                                <Button className='reqcorrectionbutton' onClick={handleReqCorrection}>Request for correction</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="buttonview">
                                    <div className="flexwrap">
                                        <div className="totalpresentpill">
                                            <p>Total Present : 00</p>
                                        </div>
                                        <div className="totalpresentpill totalabsentpill">
                                            <p>Total Absent : 00</p>
                                        </div>
                                        <div className="totalpresentpill totallatepill">
                                            <p>Total Late : 00</p>
                                        </div>
                                        <div className="totalpresentpill totalearlyleave">
                                            <p>Total Present this : 00</p>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                attendanceData.header.map((item,key)=>{
                                                    return (
                                                        <th key={key}>
                                                            {item.headeritem}
                                                            {
                                                                item.img?
                                                                <img src={item.img} alt="" />
                                                                
                                                                :
                                                                ""
                                                            }
                                                        </th>
                                                    )
                                                })
                                            }                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            attendanceData.innerTableData.map((item,key)=>{
                                                return (
                                                    <tr key={key}>
                                                        <td>
                                                            {item.SL}
                                                        </td>
                                                        <td>
                                                            {item.date}
                                                        </td>
                                                        <td>
                                                            {item.schooltime}
                                                        </td>
                                                        <td>
                                                            {item.intime}
                                                        </td>
                                                        <td>
                                                            {item.outtime}
                                                        </td>
                                                        
                                                        
                                                        <td>
                                                            
                                                            {
                                                            item.type=="Present"?
                                                            <PillSmall class={item.type} fontsize="12px" text={item.type} bg="rgba(0, 202, 85, 0.05)" textcolor="rgba(0,202,85, 1)" />
                                                            :
                                                            
                                                            item.type=="Late"?
                                                            <PillSmall class={item.type} fontsize="12px" text={item.type} bg=" rgba(255, 173, 0, 0.05)" textcolor="rgba(255, 173, 0, 1)" />
                                                            :
                                                            item.type=="Early Leave"?
                                                            <PillSmall class="Earlyleave" fontsize="12px" text={item.type} bg="rgba(100, 158, 255, 0.05)" textcolor="rgba(100, 158, 255, 1)" />
                                                            :
                                                            ""    
                                                        }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth" className="tabPane">
                <div className="tabpaneheightadjust tabpanebillinfo">
                    <div className="duepaymentpart">
                        <div className="headingofduepayment">
                            <h3>Due Payment <span>&#40;You have total 5 months tuition fee due&#41;</span></h3>
                        </div>
                        <div className="bottombuttondiv">
                            <Button>Pay Now</Button>
                        </div>
                        <div className="duepaymenttable">
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            billInfoData.duepayment.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        billInfoData.duepayment.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.month}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.lastdate}</td>
                                                    <td>{item.dueamount}</td>
                                                </tr>
                                            )
                                        })
                                      }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="paymenthistory">
                        <div className="headingofpaymenthistory">
                            <h3>Previous Payment History</h3>
                        </div>
                        <div className="bottombuttondiv">
                            {/* <Button>Total Amount: {billInfoData.previouspayment.tabledata.map((item,key)=>{
                                var tempprevsum = tempprevsum + item.receivedamount
                                setprevsum(tempprevsum)
                                return(
                                    <>
                                    
                                    </>
                                )
                            })} {prevsum} BDT</Button> */}
                            <Button>Total</Button>
                        </div>
                        <div className="paymenthistorytable">
                        <table>
                                <thead>
                                    <tr>
                                        {
                                            billInfoData.previouspayment.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        billInfoData.previouspayment.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.billdate}</td>
                                                    <td>{item.periodname}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.payableamount}</td>
                                                    <td>{item.receivedamount}</td>
                                                </tr>
                                            )
                                        })
                                      }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="seventh" className="tabPane">
                <div className="tabpaneheightadjust resulttab">
                    <div className="resulttabbox">
                        <Row>
                            <Col lg={5} style={{margin:"0 auto"}}>
                                <Row>
                                <Col lg={6}>
                                    <div className="basicinfopopulate">
                                        <p>
                                            Select Semeseter
                                        </p>
                                        <div className="dropdownwrapper" id="routinedrp">
                                            <Dropdown open={true} className='filterdropone'  options={optionsemsterresulttab} onChange={(e)=>drpdwnsemesterselecthandler(e)} value={defaultOptionsemestertype} placeholder="Select an option" />
                                            <BsChevronDown/>
                                        </div>
                                    </div>
                                
                                </Col>
                                <Col lg={6}>
                                    <div className="basicinfopopulate">
                                        <p>
                                            Select Type
                                        </p>
                                        <div className="dropdownwrapper" id="routinedrp">
                                            <Dropdown open={true} className='filterdropone'  options={optiontyperesulttab} onChange={(e)=>drpdwntyperesulttabhandler(e)} value={defaultOptionstyperesulttab} placeholder="Select an option" />
                                            <BsChevronDown/>
                                        </div>
                                    </div>
                                
                                </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                        {
                            typeresulttab=="Assessment"?
                            <div className="resulttable">
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                resulttabdata.firstSemester.dataTable.heading.map((item,key)=>{
                                                    return(
                                                        <th key={key}>{item.headline}</th>
                                                    )
                                                })
                                            }
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            resulttabdata.firstSemester.dataTable.tableData.map((item,key)=>{
                                                return(
                                                    <tr key={key}>
                                                        <td>{item.subject}</td>
                                                        <td>{item.subgroup}</td>
                                                        <td>{item.totaltest}</td>
                                                        <td>{item.bestcount}</td>
                                                        <td style={{width:"60%"}}>
                                                            {/* <table style={{marginTop:"0"}}> */}
                                                                <tr>
                                                                {
                                                                    item.assessment.map((item2,key2)=>{
                                                                        return(
                                                                            <td style={{width:"34px"}} key={key2}>{item2.value==0?"-":item2.value}</td>
                                                                        )
                                                                    })
                                                                }
                                                                </tr>
                                                            {/* </table> */}
                                                        </td>
                                                        <td className='customsumtd'><p>10+20+30</p></td>
                                                        <td><p>46.00</p></td>
                                                        
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            typeresulttab=="Result"?
                            <div className="resulttable resultresulttable">
                            <table >
                                <thead>
                                    <tr>
                                        {
                                            resulttabdata.firstSemester.resultTable.heading.map((item,key)=>{
                                                return(
                                                    <th className="text-center" key={key}>{item.head}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         resulttabdata.firstSemester.resultTable.tableData.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.subject}</td>    
                                                    <td>{item.assessment}</td>    
                                                    <td>{item.firstsemesterexdam}</td>    
                                                    <td>{item.totalmarkobtained}</td>    
                                                    <td>{item.percentage}</td>    
                                                    <td>{item.grade}</td>    
                                                </tr>
                                            )
                                         })
                                    }
                                    <tr style={{borderBottom:"0"}}>
                                        <td colSpan={2}>Grand Total: 900.00</td>
                                        <td colSpan={2}>Mark Obtained: 805.50</td>
                                        <td>89.50%</td>
                                        <td>A</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="stats">
                                <Row>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                        <div className="statsboxresulttab">
                                            <h5>Rank</h5>
                                            <div className="centerwrapper">                                          
                                            <p>Total Percentage Obtained = 89.50</p>
                                            <p>Position in section = 14</p>
                                            <p>Position in class = 30</p>                                           
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} style={{paddingLeft:"0"}}>
                                        <div className="statsboxresulttab">
                                        <h5>Rank</h5>
                                            <div className="centerwrapper centerwrapperright">                                          
                                            <p>Highest Total Percentage Obtained in Class= 99.50</p>
                                            <p>Highest Total Percentage Obtained in Section = 99.53</p>
                                            <p>2nd Highest Total Percentage Obtained in Class = 98.72</p>                                           
                                            <p>3rd Highest Total Percentage Obtained in Class= 98.71</p>                                           
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="downloadbuttonforresult">
                                    <Button>
                                        Download Now
                                    </Button>
                                </div>
                            </div>
                            </div>
                            :
                            <div className="resulttable">
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                resulttabdata.firstSemester.dataTable.heading.map((item,key)=>{
                                                    return(
                                                        <th key={key}>{item.headline}</th>
                                                    )
                                                })
                                            }
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            resulttabdata.firstSemester.dataTable.tableData.map((item,key)=>{
                                                return(
                                                    <tr key={key}>
                                                        <td>{item.subject}</td>
                                                        <td>{item.subgroup}</td>
                                                        <td>{item.totaltest}</td>
                                                        <td>{item.bestcount}</td>
                                                        <td style={{width:"60%"}}>
                                                            <table style={{marginTop:"0"}}>
                                                                <tr>
                                                                {
                                                                    item.assessment.map((item2,key2)=>{
                                                                        return(
                                                                            <td style={{width:"34px"}} key={key2}>{item2.value==0?"-":item2.value}</td>
                                                                        )
                                                                    })
                                                                }
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td><p>10+20+30</p></td>
                                                        <td><p>46.00</p></td>
                                                        
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                        
                    </div>
                </div>          
            </Tab.Pane>
            <Tab.Pane eventKey="eighth" className="tabPane">
                <div className="tabpaneheightadjust leaveformtab">
                    <div className="leaveformpart">
                        <div className="bottombuttondiv">
                            <Button onClick={handleSubmit}>Submit</Button>
                        </div>
                        <div className="basicinfopopulate">
                        <Row>
                            <Col lg={4}>                            
                                <p>Name</p>
                                <input type="text" name="name" placeholder='MD Jisan Kahn'/>
                            </Col>
                            <Col>
                                <p>ID</p>
                                <input type="text" name="name" placeholder='1705032108'/>
                            </Col>
                            <Col>
                                <p>Class</p>
                                <input type="text" name="name" placeholder='Class 2'/>
                            </Col>
                            <Col>
                                <p>Mobile Number</p>
                                <input type="text" name="name" placeholder='01922330077'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <p>Type of leave request</p>
                                        <Dropdown2 func={typeleavereq} myplaceholder="Select Leave Type" fontsize="12" fontfamily="'Poppins', sans-serif" options={optionmeleavetype}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Leave Date From</p>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    value={leavedatefrom}
                                                    onChange={(newValue) => {
                                                        setleavedatefrom(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                </LocalizationProvider>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Leave Time From</p>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimePicker
                                            
                                            value={leavetimefrom}
                                            onChange={(newValue) => {
                                                setleavetimefrom(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                        </LocalizationProvider>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Leave Date To</p>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    value={leavedateto}
                                                    onChange={(newValue) => {
                                                        setleavedateto(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                </LocalizationProvider>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Leave Time To </p>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimePicker
                                            
                                            value={leavetimeto}
                                            onChange={(newValue) => {
                                                setleavetimeto(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                        </LocalizationProvider>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Request Submission date</p>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    value={reqsubmissiondate}
                                                    onChange={(newValue) => {
                                                        setreqsubmissiondate(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                </LocalizationProvider>
                                       
                                    </Col>
                                    <Col lg={6}>
                                        <p>Documents &#40;if any&#41;</p>
                                        <input style={{paddingTop:"4px"}} type="file" onChange={docfileuploadhandler} placeholder=''/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                        <p>Valid Reason</p>
                                        <textarea className="textbox" type="text" name="validreason" value={validreason} onChange={(e)=>setvalidreason(e.target.value)} placeholder=''/>
                            </Col>
                        </Row>
                            
                        </div>
                    </div>
                    <div className="leaverequeststatus">
                        <div className="headingofleaverea">
                            <h4>Leave Request Status</h4>
                        </div>
                        <div className="levereqstatustablt d-flex align-items-center" style={{height:"calc(100% - 120px)"}} >
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            leavereqstatusData.heading.map((item,key)=>{
                                                return(
                                                    <th key={key}>
                                                        {item.headline}
                                                    </th>
                                                )
                                            })
                                        } 
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        leavereqstatusData.innnerData.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.type}</td>
                                                    <td>{item.reason}</td>
                                                    <td>{item.from}</td>
                                                    <td>{item.to}</td>
                                                    <td>{item.duration}</td>
                                                    <td>{item.status=="Accepted"?
                                                    <PillSmall class="Accepted" fontsize="12px" text={item.status} bg="rgba(0, 202, 85, 0.05)" textcolor="rgba(0,202,85, 1)" />
                                                    :
                                                    <PillSmall class={item.status} fontsize="12px" text={item.status} bg=" rgba(255, 173, 0, 0.05)" textcolor="rgba(255, 173, 0, 1)" />
                                                    }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="ninth" className="tabPane">
                
                   
                <div className="tabpaneheightadjust tabpanerightattandancetab studenthelpsupport">
                    <div className="topbar">
                        <div className="arrowdiv">
                            <AiOutlineArrowLeft onClick={handlegoBack}/>
                        </div>
                        <div className="searchbox">
                            <input type="text" placeholder="Search Ticket"/>
                            <img src="./assets/images/dashboards/studentDashboard/profileTab/helpSupport/searchicon.png" alt="searchicon.png" />
                        </div>
                    </div>

                    <div className="bottompartbox">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={12}>
                            <Nav variant="pills" className="flex-row floatingtabs">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Open Tickets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">resolved</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    
                                    {
                                      
                                        dependentdatashow==""?

                                                <div className="tabpaneboxopenticket">

                                                    <img src="./assets/images/dashboards/studentDashboard/profileTab/helpSupport/heroticket.png" alt="heroticket.png" />
                                                    <p style={{marginTop:"-15px"}}>There are no tickets to</p>
                                                    <p>display in this tab</p>
                                                    <Button onClick={handleOpenNewTicket}>Open a new Ticket</Button>
                                                </div>
                                            
                                       :
                                       <div className="tabpaneboxopenticket">
                                            <div className="formbox">
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="basicinputfield">
                                                            <p>Name*</p>
                                                            <input type="text" placeholder="Md Jisan Khan"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="basicinputfield">
                                                            <p>ID*</p>
                                                            <input type="text" placeholder="1705032108"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="basicinputfield">
                                                            <p>Subject*</p>
                                                            <input type="text" placeholder="Subject"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="basicinputfield">
                                                            <p>Message*</p>
                                                            <textarea className="mytextarea" placeholder="Message"></textarea>
                                                        </div>
                                                    </Col>
                                                    <Col lg={5} className="m-auto d-flex justify-between basicinputfield">
                                                        <Button>Submit</Button>
                                                        <Button>Reset</Button>
                                                    </Col>
                                                </Row>
                                                
                                            </div>

                                       </div>
                                    }
                                    
                                  
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="resolvedtablediv">
                                    <table>
                                        <thead>
                                            <tr>
                                                {
                                                    helpandsupporttabs.header.map((item,key)=>{
                                                        return(
                                                            <th key={key}>
                                                                {item.head}
                                                            </th>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                helpandsupporttabs.tableData.map((item,key)=>{
                                                    return(
                                                        <tr>
                                                            <td>{item.reference}</td>
                                                            <td>{item.subject}</td>
                                                            <td>{item.datecreated}</td>
                                                            <td>{item.lastaction}</td>
                                                            <td>{item.resolvedby}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <Button>Open a new Ticket</Button>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                        </Tab.Container>  
                        
                    
                    
                
                </div>
                </div>
                
            </Tab.Pane>
            <Tab.Pane eventKey="tenth" className="tabPane">
                <div className="tabpaneheightadjust examRoutineTab">
                    <div className="examroutinetable">
                        <table>
                        <thead>
                                    <tr>
                                        {
                                            routinetabData.examRoutine.heading.map((item,key)=>{
                                                return(
                                                    <th className='text-center' key={key}>
                                                        {item.head}
                                                    </th>
                                                )
                                            })
                                        } 
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                    <tr>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.date}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.day}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.starttime}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.endtime}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.subject}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>

                                    <td rowSpan={6} className='downbtncell'>
                                    <Button onClick={()=>handleDocumentDownloadroutine(routinetabData.examRoutine.downloadlink)}>
                                        <img src="./assets/images/dashboards/studentDashboard/routineTab/download.png" alt="" />
                                    </Button>
                                    </td>
                                    </tr>
                                
                                </tbody>
                        </table>
                    </div>
                        <div className="bottombuttondiv">
                            <Button onClick={handleExamRoutineDownload}><img style={{marginRight:"0px"}} src="./assets/images/dashboards/studentDashboard/routineTab/downloadcoloredbutton.png" alt="" /> Download Routine</Button>
                        </div>
                </div>
            </Tab.Pane>
          </Tab.Content>
        
        </div>
        </Tab.Container>
    </>
  )
}

export default StudentDashHelpSupportComp