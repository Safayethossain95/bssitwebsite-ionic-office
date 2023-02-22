import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../../sassFiles/style.scss'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from 'react-bootstrap'
import {HiOutlineBell} from 'react-icons/hi'
import {Row,Col,Nav,Tab,Tabs} from 'react-bootstrap'
import { prevPaymentHistory,attendanceData,paymentHistoryDue,resulttabdata,noticeData,noticeDataGreetings,documentData,attendenceApi,periodsubjectdata,billInfoData,noticeGreetingsdaydate,leavereqstatusData,routinetabData,profiletabApi } from '../../utils/DashboardApi/StudentDashboardApi'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import $ from 'jquery';
import Dropdown2 from '../subComponents/CustomSubComponents/Dropdown2'
import { MdRestaurantMenu } from 'react-icons/md'
import PillSmall from '../subComponents/CustomSubComponents/PillSmall'
import '../../sassFiles/sassPages/dashboards/dashvariables.scss'
import '../../sassFiles/sassPages/dashboards/teacherDashboard.scss'
import { attendanceApiteacher, periodsubjectdatateacher, salaryInformationteacher,routinetabDatateacher, curriculumtabtabledata, resultTabtabledata, attendanceDatateacher, prevSalarytabledata, profiletabApiteacher } from '../../utils/DashboardApi/TeacherDashboardApi'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';


ChartJS.register(ArcElement, Tooltip, Legend);
const TeacherDashboardComp = () => {

  

    const [leavedatefrom, setleavedatefrom] = useState(null);    

    const [leavedateto,setleavedateto] = useState(null)
    
    const [leavetimefrom,setleavetimefrom] = useState(null)
    
    const [leavetimeto,setleavetimeto] = useState(null)
    
    const [reqsubmissiondate,setreqsubmissiondate] = useState(null)

    const [validreason,setvalidreason]= useState(null)

    const [selected, setSelected] = React.useState(Date);

    const [monthdrpdwnval,setmonthdrpdwnval]=useState("")

    const [yeardrpdwnval,setyeardrpdwnval]=useState("")

    const [clsroutineselectvalue,setclsroutineselectvalue]=useState("")

    const clsroutineselectfunc=(myvalue)=>{
        setclsroutineselectvalue(myvalue)
    }
    
    const optionmeleavetype = [
        {
            opt:'Personal'
        },
        {
            opt:'Casual'
        }
    ]

    const handleSubmit=()=>{
        // console.log(typeof(value))
       
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

    function drpfunctionmonth(data){
        setmonthdrpdwnval(data)
    }
    function drpfunctionyear(data){
        setyeardrpdwnval(data)
    }
    
    // const [presentatt2,setpresentatt]=useState(0)
    
    const optionmemonth = [
        {
            opt:'Jan'
        },
        {
            opt:'Feb'
        }
    ]
    const optionmeyear = [
        {
            opt:2023
        },
        {
            opt:2022
        }
    ]
    const optionme = [
        {
            opt:'First Semester'
        },
        {
            opt:'Second Semester'
        }
    ]
    const optionclassroutineselector = [
        {
            opt:'Week'
        },
        {
            opt:'Month'
        },
        {
            opt:'Year'
        },
    ]
    const optionselectclass = [
        {
            opt:'Class 1'
        },
        {
            opt:'Class 2'
        }
    ]
    const [typeofleaverequest,settypeofleaverequest]=useState("")
    const typeleavereq=(myval)=>{
        settypeofleaverequest(myval)
    }

    const handleDocumentDownloadroutine = (file)=>{

    }
    const [prevsum,setprevsum] = useState(0)
    
    $(".dropdownwrapper svg").click(function(){
        $(".Dropdown-root").toggleClass("is-open")

        $(".Dropdown-menu").css("display","block")
        // $(".Dropdown-menu").attr("aria-expanded","true")
      });

      
    const [startDate,setStartDate] = useState("")

      const handleStartDate=(myvalofstartdate)=>{
        
        
        if(myvalofstartdate != null){

            var stdtmonth = myvalofstartdate.$M + 1;
            var stdtfinal = myvalofstartdate.$y + '-'+ stdtmonth +'-'+ myvalofstartdate.$D;
            setStartDate(stdtfinal)
        }
      }
    const [endDate,setEndtDate] = useState("")
      const handleEndDate=(myvalenddate)=>{
        if(myvalenddate != null){

            var stdtmonth = myvalenddate.$M + 1;
            var edtfinal = myvalenddate.$y + '-'+ stdtmonth +'-'+ myvalenddate.$D;
            setEndtDate(edtfinal)
        }
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
    // const chdata = {
    //     labels:["absent","present","late"],
    //     datasets:[{
    //         data:[40,50,10],
    //         backgroundColor:[
    //             chart1color1,
    //             chart1color2,
    //             chart1color3

    //         ],
    //         borderWidth:0,
            
            
    //     }],
    //     options: {
    //         plugins: {
    //           legend: {
    //             display: false
    //           }
    //         }
    //       }
        
    // }
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
   
      const [variableactivekey,setvariableactivekey] = useState("first")
      
      const [dashheaderchange,setdashheaderchange] = useState("Good Morning Farhana")

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

        firstthing.classList.remove("active");
        secondthing.classList.remove("active");
        thirdthing.classList.remove("active");
        fourththing.classList.remove("active");
        fifththing.classList.remove("active");
        sixththing.classList.remove("active");
        sevenththing.classList.remove("active");
        eighththing.classList.remove("active");
      
        element.classList.add("active");
        if(tabvalue=="first"){
            setdashheaderchange(`Good Morning Farhana`)
        }
        else if(tabvalue=="second"){
            setdashheaderchange("Class Routine")
        }
        else if(tabvalue=="third"){
            setdashheaderchange("Curriculum Entry")
        }
        else if(tabvalue=="fourth"){
            setdashheaderchange("Result Entry")
        }
        else if(tabvalue=="fifth"){
            setdashheaderchange("Attendance")
        }
        else if(tabvalue=="sixth"){
            setdashheaderchange("Salary Information")

        }
        else if(tabvalue=="seventh"){
            setdashheaderchange("Leave Form")            
        }
        else if(tabvalue=="eighth"){
            setdashheaderchange("Profile")            
        }
        else{
            setdashheaderchange(`Good Morning Farhana`)
        }
      }
      const [docfile,setdocfile]=useState()
      const docfileuploadhandler = (e)=>{
        
        setdocfile(e.target.files[0]);
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
                    <a id="first" className='active' onClick={()=>handleSelecttab("first")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Dashboard</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="second" onClick={()=>handleSelecttab("second")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Class Routine</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="third" onClick={()=>handleSelecttab("third")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Curriculum Entry</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="fourth" onClick={()=>handleSelecttab("fourth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Result Entry</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="fifth" onClick={()=>handleSelecttab("fifth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Attendance</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="sixth" onClick={()=>handleSelecttab("sixth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Salary Info</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="seventh" onClick={()=>handleSelecttab("seventh")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Leave Form</a>
                    </Nav.Item>
                    <Nav.Item>
                    <a id="eighth" onClick={()=>handleSelecttab("eighth")}><img src="./assets/images/icons/tinysquaresicon.png" alt="" /> Profile</a>
                    </Nav.Item>
                    
                </Nav>
                  
                </div>
                <div className="logout">
                  <Button>Logout</Button>
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
                        <img src="./assets/images/dashboards/teacherDashboard/profile_pic.png" alt="profile_pic.png" />
                    </div>
                    <div className="roleandid">
                        <div className="roleidwrapper">
                            <h5>Farhana Ahmed</h5>
                            <p>ID 1309010495</p>
                        </div>
                    </div>
                </div>
            </div>
       
    
        </div>
        <Tab.Content >
            <Tab.Pane eventKey="first" className="tabPane">
                <div className="tabpaneheightadjust dashboardTab">
                    <Row className="firstRow">
                    <Col lg={4} style={{paddingRight:"15px"}}>
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
                                    <thead>
                                        <tr>
                                            {
                                                periodsubjectdatateacher.heading.map((item,key)=>{
                                                    return(
                                                        <th>{item.head}</th>
                                                    )

                                                })
                                            }
                                        </tr>
                                    </thead>
                                    {
                                        drpday=="Saturday"?
                                        periodsubjectdatateacher.saturday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Sunday"?
                                        periodsubjectdatateacher.sunday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        :
                                        
                                        drpday=="Monday"?
                                        periodsubjectdatateacher.monday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        :
                                        drpday=="Tuesday"?
                                        periodsubjectdatateacher.tuesday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Wednesday"?
                                        periodsubjectdatateacher.wednesday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Thursday"?
                                        periodsubjectdatateacher.thursday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Friday"?
                                        periodsubjectdatateacher.friday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        periodsubjectdatateacher.saturday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
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
                    <Col lg={4} style={{paddingLeft:"0"}}>
                    <div className="samebox">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Attendance</h4>
                                    <p eventKey="second">View all</p>
                                </div>
                            </div>
                            <div className="drpmonthyearwrapper">
                                <div className="leftone">
                                    <Dropdown2 func={drpfunctionmonth} fontsize="12" fontfamily="'Poppins', sans-serif"  options={optionmemonth}/>
                                </div>
                                <div className="rightone">
                                    <Dropdown2 func={drpfunctionyear} fontsize="12" fontfamily="'Poppins', sans-serif"  options={optionmeyear}/>
                                </div>

                            </div>
                            <div className="chartwrapperheight">
                                {
                                    
                                    attendanceApiteacher.map((item,key)=>{
                                        return(
                                            yeardrpdwnval && monthdrpdwnval ?
                                            item.month.map((item2,key2)=>{
                                                if(item.yearnum==yeardrpdwnval && item2.monthname==monthdrpdwnval){
                                                    
                                                    return(
                                                        <>
                                                        
                                                        <Doughnut style={{margin:"0 auto",width:"250px",height:"250px"}} data={
                                                            {
                                                            labels:["absent","present","late"],
                                                            datasets:[{
                                                                data:[item2.data.absent,item2.data.present,item2.data.late],
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
                                                              }}
                                                        }/>
                                                        
                                                        </>
                                                    )
                                                }
                                            })
                                            :
                                            <Doughnut style={{margin:"0 auto",width:"250px",height:"250px"}} data={
                                                {
                                                    labels:["absent","present","late"],
                                                    datasets:[{
                                                        data:[50,10,40],
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
                                                      }}
                                            }/>

                                        )
                                        
                                        
                                    })
                                    
                                }
                            </div>
                                
                        </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                    <div className="samebox semesterprogress">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Semester Progress</h4>
                                    <p>View all</p>
                                </div>
                            </div>
                            <div className="progressboxmini">
                                <div className="progressminileft">
                                <CircularProgressbar
                                    value={91}
                                    text={`91%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                    textColor: "#ED1C24",
                                    pathColor: "#ED1C24",
                                    trailColor: "white"
                                    })}
                                />
                                </div>
                                <div className="progressminiright">
                                    <p>Lesson progress</p>
                                    <h4><span style={{color:"#000"}}>30</span> / 33</h4>
                                </div>
                            </div>
                            <div className="progressboxmini">
                                <div className="progressminileft">
                                <img src="./assets/images/dashboards/teacherDashboard/progress/calendar.png" alt="calendar.png" />
                                </div>
                                <div className="progressminiright">
                                    <p>Semester Exam in</p>
                                    <h4><span style={{color:"#000"}}>7 Days</span></h4>
                                </div>
                            </div>
                    </div>
                    </Col>
                    </Row>
                    <Row className="secondRow"> 
                    <Col lg={4} style={{paddingRight:"15px"}}>
                        <div className="samebox prevhistory">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Salary Information</h4>
                                    <p>View all</p>
                                </div>
                            </div>

                            <div className="smallheading">
                                <h5><span style={{fontWeight:"500"}}>Current Status:</span> {salaryInformationteacher.currentstatus}</h5>
                            </div>
                            <div className="cardbarprevphistory cardbarprevphistoryteacher">
                                <div className="paymenthistoryoverview">
                                    <div className="paymenthistoryovflexwrap">
                                        {
                                        salaryInformationteacher.salaryinfodetails.map((item,key)=>{
                                            return(
                                                <div className="payhpartcardbar">
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

                        </div>
                    </Col>
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                       <div className="samebox">
                        <div className="headerpart" style={{marginBottom:"0"}}>
                            <div className="flexwrap">
                                <div className="flexwrap2">
                                <h4>Notice </h4>
                               
                                </div>
                                <p>View more</p>
                            </div>
                        </div>
                        <div className="contentpart">
                        {
                            noticeData.map((item,key)=>{
                                return(
                                <div className="noticebarmini" key={key}>
                                    <div className="publishdatepart teacherpublishpart">
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
                    <Col lg={4} style={{paddingLeft:"0",paddingRight:"15px"}}>
                        <div className="samebox sameboxcalender">
                        <DayPicker
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
            <div className="tabpaneheightadjust tabpaneroutinetab">
                <div className="bottombuttondiv">
                            <Button><img style={{marginRight:"0px"}} src="./assets/images/dashboards/studentDashboard/routineTab/downloadcoloredbutton.png" alt="" /> Download Routine</Button>
                </div>
                        <Row className='mb-4'>
                            <Col lg={{span: 2 ,offset: 2}} style={{margin:"0 auto"}}>
                            <div className="dropdownwrapper" id="routinedrp">
                            <Dropdown2 func={clsroutineselectfunc} fontsize="12" fontfamily="'Poppins', sans-serif" options={optionclassroutineselector}/>
                                
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
                                                  routinetabDatateacher.classRoutine.heading.map((item,key)=>{
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
                                                routinetabDatateacher.classRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr>
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
                                                                    item.class.map((itemclass,keyclass)=>{
                                                                        return(
                                                                            <tr key={keyclass}>
                                                                                <td>{itemclass.classnam}</td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }

                                                                </table>
                                                            </td>
                                                    
                                                            <td>
                                                                <table style={{marginTop:"0"}}>
                                                                {
                                                                    item.section.map((itemcsection,keycsection)=>{
                                                                        return(
                                                                            <tr key={keycsection}>
                                                                                <td>{itemcsection.sectionname}</td>
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
            <Tab.Pane eventKey="third" className="tabPane">
                <div className="tabpaneheightadjust tabpanerightcurriculumtab">
                    <div className="dropdownwrappercurriculum">
                    <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                    <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                    <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                    </div>
                    <div className="curriculumtabtable">
                    <table>
                        <thead>
                            <tr>
                                {
                                    curriculumtabtabledata.heading.map((item,key)=>{
                                        return(
                                            <th key={key}>{item.head}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                curriculumtabtabledata.tableData.map((item,key)=>{
                                    return(
                                        <tr>
                                            <td key={key}>{item.sl}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" className="tabPane">
               <div className="tabpaneheightadjust resultentrytab">
                    <div className="resultfilterentrybox">
                        <div className="resultfilterfirstrow">
                        <div className="drpwithtextwrap">
                            <p>Select Class</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionselectclass}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Exam</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Section</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Shift</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                      
                        </div>
                        <div className="resultfiltersecondrow" style={{marginTop:"16px"}}>
                        <div className="drpwithtextwrap">
                            <p>Subject Select</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Sunject Subgroup</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        </div>
                    </div>
                    <div className="resulttabentrybox">
                    <div className="resulttabtable">
                       
                        <div className="bottombuttondiv">
                            {/* <Button>Total Amount: {billInfoData.previouspayment.tabledata.map((item,key)=>{
                                var tempprevsum = tempprevsum + item.receivedamount
                                setprevsum(tempprevsum)
                                return(
                                    <>
                                    
                                    </>
                                )
                            })} {prevsum} BDT</Button> */}
                            <Button>Print</Button>
                            <Button>Save</Button>
                        </div>
                        <div className="resulttabtabletable">
                        <table>
                                <thead>
                                    <tr>
                                        {
                                            
                                            resultTabtabledata.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        resultTabtabledata.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.studentid}</td>
                                                    
                                                    <td>{item.studentname}</td>
                                                    <td>{item.exam}</td>
                                                    
                                                </tr>
                                            )
                                        })
                                      }
                                </tbody>
                            </table>
                        </div>

                    </div>
                    </div>
               </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth" className="tabPane">
                <div className="tabpaneheightadjust tabpanerightattandancetab">
                    <div className="atttabbox">
                    <Row>
                        <Col lg={8} className="m-auto">
                        <Row className='firstrow'>
                            
                            <Col  className="d-flex align-items-end">
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={startDate}
                                    
                                    onChange={(newValue) => {
                                        handleStartDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} error={false} />}
                                />
                                </LocalizationProvider>
                           
                            </Col>
                            <Col className="d-flex align-items-end">
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={endDate}
                                    
                                    onChange={(newValue) => {
                                        handleEndDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} error={false} />}
                                />
                                </LocalizationProvider>
                            </Col>
                            <Col className="d-flex align-items-end">
                                <Button className='reqcorrectionbutton' onClick={handleReqCorrection}>Request for correction</Button>
                            </Col>
                        </Row>
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
                                                
                                                attendanceDatateacher.header.map((item,key)=>{
                                                    return (
                                                        <th>
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
                                            attendanceDatateacher.innerTableData.map((item,key)=>{
                                                return (
                                                    <tr>
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
                    
                    <div className="salaryinfotablaebox">
                        <div className="headingofpaymenthistory">
                            <h3>Previous Salary History</h3>
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
                            <Button>Total Amount: 73604.00 BDT</Button>
                        </div>
                        <div className="paymenthistorytable">
                        <table>
                                <thead>
                                    <tr>
                                        {
                                            
                                            prevSalarytabledata.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        prevSalarytabledata.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.month}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.salary}</td>
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
            <div className="tabpaneheightadjust leaveformtab">
                    <div className="leaveformpart">
                        <div className="bottombuttondiv">
                            <Button onClick={handleSubmit}>Submit</Button>
                        </div>
                        <div className="basicinfopopulate">
                        <Row>
                            <Col lg={4}>                            
                                <p>Name</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                            <Col>
                                <p>ID</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                            <Col>
                                <p>Class</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                            <Col>
                                <p>Mobile Number</p>
                                <input type="text" name="name" placeholder='-'/>
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
                                        <p>Leave Time To</p>
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
                                                <tr>
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
            <Tab.Pane eventKey="eighth" className="tabPane">
            <div className="tabpaneheightadjust profiletab">
                    <div className="flexwrapperprofile">
                        <div className="profileleftcolumn">
                            <div className="scrollwrapper">

                            <div className="proleftcoltop">
                                <div className="profileimgbig text-center">
                                <img src="./assets/images/dashboards/teacherDashboard/profile_pic_big.png" alt="profile_pic_big.png" />

                                <h4>Farhana Ahmed</h4>
                                <p>ID 1309010495</p>
                                </div>

                                <div className="profiledetailpoints">
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> DEPARTMENT</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> ACADEMIC</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> DESIGNATION</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> ACADEMIC</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> SECTION</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> JUNIOR</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> OFFICE IN TIME</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> 09:10</p>
                                        </div>
                                        
                                    </div>
                                    <div className="minidivswrapper d-flex">
                                        <div className="minidivleft" style={{width:"95px"}}>
                                            <p> OFFICE OUT TIME</p>
                                        </div>
                                        <span>:</span>
                                        <div className="minidivright">
                                            <p> 14:40</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="proleftcolbottom">
                                    <h3>Support</h3>

                                    <div className="proleftcolbottomflexwrapforbuttonw">
                                        <div className="leftforicon">
                                            <div className="flexwrap">
                                            <img src="./assets/images/dashboards/studentDashboard/profileTab/lowericon1.png" alt="lowericon1.png" />
                                            <h5>Authority</h5>
                                            </div>
                                        </div>
                                        <div className="rightforicon">
                                             <div className="flexwrap">
                                            <img src="./assets/images/dashboards/studentDashboard/profileTab/lowericon2.png" alt="lowericon2.png" />
                                            <h5>Help & Support</h5>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                        <div className="profilerightcolumn">
                            <h3>Profile Settings</h3>
                            <Tabs
                                defaultActiveKey="personaldetails"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                               
                                >
                                <Tab eventKey="personaldetails" title="Personal Details">
                                    <Row>
                                        <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{
                                               
                                                profiletabApiteacher.personaldetails.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.personaldetails.email}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Date of Birth</p>
                                                <h5>{profiletabApiteacher.personaldetails.dateofbirth}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Residential Phone</p>
                                                <h5>{profiletabApiteacher.personaldetails.residentialphone}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={4} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Place of Birth</p>
                                                <h5>{profiletabApiteacher.personaldetails.placeofbirth}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={4} style={{padding:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Country</p>
                                                <h5>{profiletabApiteacher.personaldetails.country}</h5>
                                            </div>

                                        </Col>

                                        <Col lg={4} style={{paddingLeft:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Nationality</p>
                                                <h5>{profiletabApiteacher.personaldetails.nationality}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={4} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Gender</p>
                                                <h5>{profiletabApiteacher.personaldetails.gender}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={4} style={{padding:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Religion</p>
                                                <h5>{profiletabApiteacher.personaldetails.religion}</h5>
                                            </div>

                                        </Col>

                                        <Col lg={4} style={{paddingLeft:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Blood Group</p>
                                                <h5>{profiletabApiteacher.personaldetails.bloodgroup}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Birth Certifiacte</p>
                                                <h5>{profiletabApiteacher.personaldetails.birthcertificate}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.personaldetails.passport}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Medeical History</p>
                                                <h5>{profiletabApiteacher.personaldetails.medicalhistory}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Emergency Medical Action</p>
                                                <h5>{profiletabApiteacher.personaldetails.emergencymedicalaction}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <h5>Address</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={3} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Holding</p>
                                                <h5>{profiletabApiteacher.personaldetails.holding}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={3} style={{padding:"0px",paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Street</p>
                                                <h5>{profiletabApiteacher.personaldetails.street}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={3} style={{padding:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Area</p>
                                                <h5>{profiletabApiteacher.personaldetails.area}</h5>
                                            </div>

                                        </Col>

                                        <Col lg={3} style={{paddingLeft:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Post Code</p>
                                                <h5>{profiletabApiteacher.personaldetails.postcode}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={3} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Police Station</p>
                                                <h5>{profiletabApiteacher.personaldetails.policestation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={3} style={{padding:"0px",paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>City</p>
                                                <h5>{profiletabApiteacher.personaldetails.city}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={3} style={{padding:"0px"}}>
                                            <div className="infopopulatebox">
                                                <p>Division</p>
                                                <h5>{profiletabApiteacher.personaldetails.division}</h5>
                                            </div>

                                        </Col>

                                        <Col lg={3} style={{paddingLeft:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Country</p>
                                                <h5>{profiletabApiteacher.personaldetails.country}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <h5>Siblings</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Name</p>
                                                <h5>{profiletabApiteacher.personaldetails.siblingname}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>ID</p>
                                                <h5>{profiletabApiteacher.personaldetails.siblingID}</h5>
                                            </div>

                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="fatherdetails" title="Father Details">
                                    <Row>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApiteacher.fathersinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.fathersinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApiteacher.fathersinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.fathersinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApiteacher.fathersinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApiteacher.fathersinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Occupation</p>
                                                <h5>{profiletabApiteacher.fathersinfo.occupation}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Designation</p>
                                                <h5>{profiletabApiteacher.fathersinfo.designation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={12}>
                                        <div className="infopopulatebox">
                                                <p>Company Address</p>
                                                <h5>{profiletabApiteacher.fathersinfo.companyaddress}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="motherdetails" title="Mother Details">
                                <Row>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApiteacher.mothersinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.mothersinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApiteacher.mothersinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.mothersinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApiteacher.mothersinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApiteacher.mothersinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Occupation</p>
                                                <h5>{profiletabApiteacher.mothersinfo.occupation}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Designation</p>
                                                <h5>{profiletabApiteacher.mothersinfo.designation}</h5>
                                            </div>

                                        </Col>
                                        <Col lg={12}>
                                        <div className="infopopulatebox">
                                                <p>Company Address</p>
                                                <h5>{profiletabApiteacher.mothersinfo.companyaddress}</h5>
                                            </div>
                                        </Col>
                                </Row>
                                </Tab>
                                <Tab eventKey="localguardian" title="Local Guardian">
                                <Row>
                                <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Relation</p>
                                                <h5>{profiletabApiteacher.localguardianinfo.relation}</h5>
                                            </div>

                                        </Col>
                                </Row>
                                </Tab>
                                </Tabs>
                        </div>

                        
                    </div>
                </div>
            </Tab.Pane>
            
          </Tab.Content>
        
        </div>
        </Tab.Container>
    </>
  )
}

export default TeacherDashboardComp