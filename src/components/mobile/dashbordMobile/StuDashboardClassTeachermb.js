import React,{useState} from 'react'
import {Row,Col,Tab,Button,Nav} from 'react-bootstrap'
import { prevPaymentHistory,attendanceData,paymentHistoryDue,resulttabdata,noticeData,noticeDataGreetings,documentData,attendenceApi,periodsubjectdata,billInfoData,noticeGreetingsdaydate,leavereqstatusData,routinetabData,profiletabApi,helpandsupporttabs } from '../../../utils/DashboardApi/StudentDashboardApi'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {MdSend} from 'react-icons/md'
const StuDashboardClassTeachermb = () => {
    const navigate=useNavigate()
    const handlegoBack=()=>{
        navigate('/studashboard')
      }
      const [dependentdatashow,setdependentdatashow] = useState("")
    const handleOpenNewTicket=()=>{
        setdependentdatashow("OpenForm")
        console.log("yes man")
    }
  return (
    <div className="bodycolorbg">
        <div className="mobilecontainer">
            <div className="heading">
                <h3>Communicate With Class Teacher</h3>
            </div>
            <div className="wholewrapper">
            <div className="topbar">
                <div className="arrowdiv">
                <AiOutlineArrowLeft onClick={handlegoBack}/>
                </div>
                <div className="propicandname">
                <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/propic.png" alt="" />

                
                </div>
                <div className="proname">
                <h5>Farhana Ahmed</h5>
                </div>
            </div>
            <div className="chatmessagebox">

                                <div className="datepframe">
                                  <div className="onlydate text-center">
                                    <h6>FEB 20 AT 6:53 AM</h6>
                                  </div>
                                  <div className="singlemessagebox">
                                    <div className="img">
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/propic.png" alt="" />
                                    </div>
                                    <div className="textbox">
                                      <p>Good morning, please go ahead. What do you want to discuss?</p>
                                    </div>
                                  </div>
                                  <div className="singlemessagebox flex-row-reverse">
                                    <div className="img" style={{marginLeft:"15px"}}>
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/stupropic.png" alt="" />
                                    </div>
                                    <div className="textbox">
                                      <p> I'm finding it a bit challenging to improve my English language skills. Do you have any suggestions or advice that can help me?</p>
                                    </div>
                                  </div>
                                  <div className="singlemessagebox">
                                    <div className="img">
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/propic.png" alt="" />
                                    </div>
                                    <div className="textbox">
                                      <p>Of course, there are several things that you can do to improve your English language skills. Firstly, make sure that you are practicing your language skills regularly, even outside the classroom.</p>
                                    </div>
                                  </div>
                                  <div className="singlemessagebox flex-row-reverse">
                                    <div className="img" style={{marginLeft:"15px"}}>
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/stupropic.png" alt="" />
                                    </div>
                                    <div className="textbox">
                                      <p>Okay, I will try to do that. What else can I do to improve?</p>
                                    </div>
                                  </div>
                                  <div className="singlemessagebox">
                                    <div className="img">
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/propic.png" alt="" />
                                    </div>
                                    <div className="textbox">
                                      <p>Of course, there are several things that you can do to improve your English language skills. Firstly, make sure that you are practicing your language skills regularly, even outside the classroom.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="textinputbox">

                                
                                  <div className="leftonlytext">
                                    <input type="text" placeholder="Message..."/>
                                    <div className="twoicons">
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/attachmentpic.png" alt="attachmentpic.png" />
                                      <img src="/assets/images/dashboards/studentDashboard/profileTab/classTeacher/pictureicon.png" alt="pictureicon.png" />

                                    </div>
                                  </div>
                                  <div className="buttonbox">
                                    <Button>Send <MdSend/></Button>
                                  </div>

                                    
                                
                              </div>
            </div>
        </div>
    </div>
  )
}

export default StuDashboardClassTeachermb