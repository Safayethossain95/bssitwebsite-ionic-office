import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import { documentData,noticeData,attendenceApi,paymentHistoryDue,prevPaymentHistory,periodsubjectdata } from '../../../utils/DashboardApi/StudentDashboardApi'
import {Nav,Tab,Tabs,Button} from 'react-bootstrap'
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { DayPicker } from 'react-day-picker';
const StuDashboardmb = () => {
  const [selected, setSelected] = React.useState(Date);

  const handlehomeworkdownload= ()=>{

  }
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
 
    const [variableactivekey,setvariableactivekey] = useState("first")
    
    const [dashheaderchange,setdashheaderchange] = useState("")
  return (
    <>
        <div className="bodycolorbg">
          <div className="mobilecontainer">
            <div className="heading">
              <h3>Good Morning Jisan</h3>
            </div>

            <div className="documentsboxindash">
              <div className="headerpart">
                  <div className="flexwrap">
                      <h4>Documents</h4>
                      <p eventKey="second">View more</p>
                  </div>
              </div>

              <Row>
                <Col xs={6} className="pdrightcol5">
                    <div className="docpill" onClick={()=>handlehomeworkdownload(documentData.homework.fileurl)}>
                       <div className="iconpart">
                          <img src="./assets/images/dashboards/studentDashboard/mobile/doctabicon1.png" alt="doctabicon1.png" />
                       </div>
                       <div className="textpart">
                          <h4>Home Work</h4>
                          <p>{documentData.homework.numberOfFiles==0 ? "No Files Available":documentData.homework.numberOfFiles+ " files available"}</p>
                       </div>
                    </div>
                </Col>              
                <Col xs={6} className="pdleftcol5">
                    
                    <div className="docpill" onClick={()=>handlehomeworkdownload(documentData.classwork.fileurl)}>
                       <div className="iconpart">
                          <img src="./assets/images/dashboards/studentDashboard/mobile/doctabicon2.png" alt="doctabicon1.png" />
                       </div>
                       <div className="textpart">
                          <h4>Class Work</h4>
                          <p>{documentData.classwork.numberOfFiles==0 ? "No Files Available":documentData.homework.numberOfFiles+ " files available"}</p>
                       </div>
                    </div>
                    
                </Col>
                <Col xs={6} className="pdrightcol5">
                    <div className="docpill" onClick={()=>handlehomeworkdownload(documentData.assesment.fileurl)}>
                       <div className="iconpart">
                          <img src="./assets/images/dashboards/studentDashboard/mobile/doctabicon3.png" alt="doctabicon1.png" />
                       </div>
                       <div className="textpart">
                          <h4>Assessment</h4>
                          <p>{documentData.assesment.numberOfFiles==0 ? "No Files Available":documentData.homework.numberOfFiles+ " files available"}</p>
                       </div>
                    </div>
                </Col>   
                <Col xs={6} className="pdleftcol5">
                    
                    <div className="docpill"  onClick={()=>handlehomeworkdownload(documentData.exampaper.fileurl)}>
                       <div className="iconpart">
                          <img src="./assets/images/dashboards/studentDashboard/mobile/doctabicon4.png" alt="doctabicon1.png" />
                       </div>
                       <div className="textpart">
                          <h4>Exam Paper</h4>
                          <p>{documentData.exampaper.numberOfFiles==0 ? "No Files Available":documentData.homework.numberOfFiles+ " files available"}</p>
                       </div>
                    </div>
                    
                </Col>
                <Col xs={6} className="pdrightcol5">
                    <div className="docpill"  onClick={()=>handlehomeworkdownload(documentData.syllabus.fileurl)}>
                       <div className="iconpart">
                          <img src="./assets/images/dashboards/studentDashboard/mobile/doctabicon5.png" alt="doctabicon1.png" />
                       </div>
                       <div className="textpart">
                          <h4>Syllabus</h4>
                          <p>{documentData.syllabus.numberOfFiles==0 ? "No Files Available":documentData.homework.numberOfFiles+ " files available"}</p>
                       </div>
                    </div>
                </Col> 
              </Row>
            </div>

            <div className="noticeboxindash">
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

            <div className="attendenceboxindash">
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
            </div>
            <div className="paymenthistoryboxindash">
            <div className="samebox prevhistory">
                            <div className="headerpart">
                                <div className="flexwrap">
                                    <h4>Payments</h4>
                                    <p>View all</p>
                                </div>
                            </div>

                            <div className="smallheading text-center">
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

                            <Button className="paymentbutton">Pay Now</Button>
                        </div>
            </div>

            <div className="classroutineboxindash">
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
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.subject}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Sunday"?
                                        periodsubjectdata.sunday.map((item,key)=>{
                                            return(
                                                <tr>
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
                                                <tr>
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
                                                <tr>
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
            </div>

            <div className="calendarboxdash">
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
            </div>
          </div>
        </div>
    </>
  )
}

export default StuDashboardmb