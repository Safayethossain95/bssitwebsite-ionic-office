import React,{useState} from 'react'
import {Row,Col,Tab,Button,Nav} from 'react-bootstrap'
import { prevPaymentHistory,attendanceData,paymentHistoryDue,resulttabdata,noticeData,noticeDataGreetings,documentData,attendenceApi,periodsubjectdata,billInfoData,noticeGreetingsdaydate,leavereqstatusData,routinetabData,profiletabApi,helpandsupporttabs } from '../../../utils/DashboardApi/StudentDashboardApi'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const StuDashboardHelpSupportmb = () => {
    const navigate=useNavigate()
    const handlegoBack=()=>{
        navigate('/studashboard/tenth')
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
                <h3>Help & Support</h3>
            </div>
            <div className="topbar">
                        
                        <div className="searchbox">
                            <input type="text" placeholder="Search Ticket"/>
                            <img src="./assets/images/dashboards/studentDashboard/profileTab/helpSupport/searchicon.png" alt="searchicon.png" />
                        </div>
                    </div>
                    <div className="wholewrapper">
                        <div className="arrowdiv">
                            <AiOutlineArrowLeft onClick={handlegoBack}/>
                        </div>
                        <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
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
                                            <Tab.Pane eventKey="first" className="tabpanefirst">
                                                
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
                                                <div className="onlytablewrapper">

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
                                                </div>

                                                <Button>Open a new Ticket</Button>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                        </Tab.Container>  
                    </div>
        </div>
    </div>
  )
}

export default StuDashboardHelpSupportmb