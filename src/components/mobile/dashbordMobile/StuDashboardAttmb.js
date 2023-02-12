import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
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
                            <div className="dropdownwrapper w-100" id="routinedrp">
                                <Dropdown open={true} className='filterdropone'  options={Optionroutinetype} onChange={(e)=>dropdownvalueroutinetype(e)} value={defaultOptionroutinetype} placeholder="Select an option" />
                                <BsChevronDown/>
                            </div>
                            </Col>
                            <Col xs={6} className="pdleftcol5">
                            <div className="dropdownwrapper w-100" id="routinedrp">
                                <Dropdown open={true} className='filterdropone'  options={Optionroutinetype} onChange={(e)=>dropdownvalueroutinetype(e)} value={defaultOptionroutinetype} placeholder="Select an option" />
                                <BsChevronDown/>
                            </div>
                            </Col>
                            <Col  xs={6} className="pdrightcol5">
                            
                                <input type="date" placeholder='start date' onChange={(e)=>handleStartDate(e)} />
                           
                            </Col>
                            <Col xs={6} className="pdleftcol5">
                            
                                <input type="date" placeholder='end date' onChange={(e)=>handleEndDate(e)} />
                            </Col>
                        </Row>
            </div>
        </div>
    </div>
  )
}

export default StuDashboardAttmb