import React,{useState} from 'react'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { Doughnut } from "react-chartjs-2";
import Dropdown2 from '../../../subComponents/CustomSubComponents/Dropdown2'
import { DayPicker } from 'react-day-picker';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import { prevPaymentHistory,attendanceData,paymentHistoryDue,resulttabdata,noticeData,noticeDataGreetings,documentData,attendenceApi,periodsubjectdata,billInfoData,noticeGreetingsdaydate,leavereqstatusData,routinetabData,profiletabApi } from '../../../../utils/DashboardApi/StudentDashboardApi'
import { attendanceApiteacher, periodsubjectdatateacher, salaryInformationteacher,routinetabDatateacher, curriculumtabtabledata, resultTabtabledata, attendanceDatateacher, prevSalarytabledata, profiletabApiteacher } from '../../../../utils/DashboardApi/TeacherDashboardApi'
import $ from 'jquery'
const TeaDashmb = () => {
    const [selected, setSelected] = React.useState(Date);

    const [monthdrpdwnval,setmonthdrpdwnval]=useState("")
    const [yeardrpdwnval,setyeardrpdwnval]=useState("")

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
    const optionselectclass = [
        {
            opt:'Class 1'
        },
        {
            opt:'Class 2'
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

  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                    <h3>Good Morning Farhana</h3>
                </div>
                <div className="samebox sameboxclassroutine">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Class Routine</h4>
                                    <div className="dropdownwrapper">
                                        <Dropdown className='filterdropone' options={dayoptions} onChange={(e)=>dropdownvalue(e)} value={defaultOptiontype}  />
                                        <BsChevronDown/>
                                    </div>
                                </div>
                            </div>
                            <div className="classroutinetable">
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

                <div className="samebox sameboxattmb">
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

                <div className="samebox salaryinfobox">
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

                <div className="samebox noticeinfobox">
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

                <div className="samebox sameboxcalendar">
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
            </div>
        </div>
    </>
  )
}

export default TeaDashmb