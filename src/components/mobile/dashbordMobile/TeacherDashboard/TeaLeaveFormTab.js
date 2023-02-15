import React from 'react'
import { Button,Row,Col } from 'react-bootstrap'
import { leavereqstatusData } from '../../../../utils/DashboardApi/TeacherDashboardApi'
import PillSmall from '../../../subComponents/CustomSubComponents/PillSmall'
import Dropdown2 from '../../../subComponents/CustomSubComponents/Dropdown2'

const TeaLeaveFormTab = () => {
    const optionme = [
        {
            opt:'Personal'
        },
        {
            opt:'Casual'
        }
    ]
  return (
    <>
        <div className="bodycolorbg">
        <div className="mobilecontainer">
                <div className="heading">
                    <h3>Leave Form</h3>
                </div>
                <div className="samebox leaveformpart leaveformpartteachermb">
                        
                        <div className="basicinfopopulate">
                        <Row>
                            <Col lg={4}>                            
                                <p>Name</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                            <Col xs={6} className="pdrightcol5">
                                <p>ID</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                            <Col xs={6} className="pdleftcol5">
                                <p>Class</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                            <Col xs={12}>
                                <p>Mobile Number</p>
                                <input type="text" name="name" placeholder='-'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <p>Type of leave request</p>
                                        <Dropdown2 myplaceholder="Select Leave Type" fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} >
                                        <p>Leave Date From</p>
                                        <input type="text" name="name" placeholder=''/>
                                    </Col>
                                    <Col lg={6} >
                                        <p>Leave Time From</p>
                                        <input type="text" name="name" placeholder=''/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Leave Date To</p>
                                        <input type="text" name="name" placeholder=''/>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Leave Time To</p>
                                        <input type="text" name="name" placeholder=''/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Request Submission date</p>
                                        <input type="text" name="name" placeholder=''/>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Documents &#40;if any&#41;</p>
                                        <input type="text" name="name" placeholder=''/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                        <p style={{display:"block"}}>Valid Reason</p>
                                        <textarea className="textbox" type="text" name="name" placeholder=''/>
                            </Col>
                        </Row>
                            
                        </div>
                        <div className="bottombuttondiv">
                            <Button>Submit</Button>
                        </div>
                    </div>
                    <div className="samebox leaverequeststatustmb">
                        <div className="headingofleaverea">
                            <h4>Leave Request Status</h4>
                        </div>
                        <div className="levereqstatustablt " >
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
        </div>
    </>
  )
}

export default TeaLeaveFormTab