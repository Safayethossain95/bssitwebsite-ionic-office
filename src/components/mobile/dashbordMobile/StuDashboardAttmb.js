import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { attendanceData } from '../../../utils/DashboardApi/StudentDashboardApi'
import PillSmall from '../../subComponents/CustomSubComponents/PillSmall'
const StuDashboardAttmb = () => {
    const [drproutinetype,setdrproutinetype] = useState("")
    const Optionroutinetype = [
        'week','Month','Year'
      ];
      const [drpday,setDrpday] = useState("")
    
      const defaultOptionroutinetype = Optionroutinetype[0];
      const dropdownvalueroutinetype=(e)=>{
        // console.log(e.value)
        setdrproutinetype(e.value)
        console.log(drpday)
      }
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
  return (
    <div className="bodycolorbg">
        <div className="mobilecontainer">
            <div className="heading headingofdocumenttab">
                <h3>Attendance</h3>
            </div>
            <div className="firstboxofattTabmb">
                <Row className='firstrow'>
                            <Col xs={6} className="pdrightcol5">
                              <p>All Semester</p>
                            <div className="dropdownwrapper w-100" id="routinedrp">
                                <Dropdown open={true} className='filterdropone'  options={Optionroutinetype} onChange={(e)=>dropdownvalueroutinetype(e)} value={defaultOptionroutinetype} placeholder="Select an option" />
                                <BsChevronDown/>
                            </div>
                            </Col>
                            <Col xs={6} className="pdleftcol5">
                              <p>Select Type</p>
                            <div className="dropdownwrapper w-100" id="routinedrp">
                                <Dropdown open={true} className='filterdropone'  options={Optionroutinetype} onChange={(e)=>dropdownvalueroutinetype(e)} value={defaultOptionroutinetype} placeholder="Select an option" />
                                <BsChevronDown/>
                            </div>
                            </Col>
                            <Col  xs={6} className="pdrightcol5" style={{margin:"0 0 10px 0"}}>
                            
                                <input type="date" placeholder='start date' onChange={(e)=>handleStartDate(e)} />
                           
                            </Col>
                            <Col xs={6} className="pdleftcol5" style={{margin:"0 0 10px 0"}}>
                            
                                <input type="date" placeholder='end date' onChange={(e)=>handleEndDate(e)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="buttonview" style={{margin:"20px 0"}}>
                                    <div className="flexwrap">
                                      <Row>
                                        <Col xs={6} className="pdrightcol5">
                                        <div className="totalpresentpill">
                                            <p>Total Present : 00</p>
                                        </div>
                                        </Col>
                                        <Col xs={6} className="pdleftcol5">
                                        <div className="totalpresentpill totalabsentpill">
                                            <p>Total Absent : 00</p>
                                        </div>
                                        </Col>
                                        <Col xs={6} className="pdrightcol5 ps-2" style={{width:"45%",margin:"10px 0"}}>
                                        <div className="totalpresentpill totallatepill">
                                            <p>Total Late : 00</p>
                                        </div>
                                        </Col>
                                        <Col xs={6} className="pdleftcol5 pe-2" style={{width:"55%",margin:"10px 0"}}>
                                        <div className="totalpresentpill totalearlyleave">
                                            <p>Total Early Leave : 00</p>
                                        </div>
                                        </Col>
                                      </Row>
                                        
                                        
                                       
                                        

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
            </div>
            <div className="roundwhitewrapper">

            <div className="secondboxofAttmb">
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
        </div>
    </div>
  )
}

export default StuDashboardAttmb