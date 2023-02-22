import React,{useState} from 'react'
import { Button,Row,Col } from 'react-bootstrap'
import { leavereqstatusData } from '../../../utils/DashboardApi/StudentDashboardApi'
import PillSmall from '../../subComponents/CustomSubComponents/PillSmall'
import Dropdown2 from '../../subComponents/CustomSubComponents/Dropdown2'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
const StuDashboardLeaveFormmb = () => {
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

    const optionme = [
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
        
        // console.log("hello")
        
      }
      const [typeofleaverequest,settypeofleaverequest]=useState("")
      const typeleavereq=(myval)=>{
        settypeofleaverequest(myval)
    }
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
                                        <Dropdown2 func={typeleavereq} myplaceholder="Select Leave Type" fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} >
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
                                    <Col lg={6} >
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
                                        <input type="file"  onChange={docfileuploadhandler} placeholder=''/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                        <p style={{display:"block"}}>Valid Reason</p>
                                        <textarea className="textbox" value={validreason} onChange={(e)=>setvalidreason(e.target.value)} type="text" name="name" placeholder=''/>
                            </Col>
                        </Row>
                            
                        </div>
                        <div className="bottombuttondiv">
                            <Button onClick={handleSubmit}>Submit</Button>
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

export default StuDashboardLeaveFormmb