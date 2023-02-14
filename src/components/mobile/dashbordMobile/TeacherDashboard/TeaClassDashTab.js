import React,{useState} from 'react'
import { attendanceApiteacher, periodsubjectdatateacher, salaryInformationteacher,routinetabDatateacher, curriculumtabtabledata, resultTabtabledata, attendanceDatateacher, prevSalarytabledata, profiletabApiteacher } from '../../../../utils/DashboardApi/TeacherDashboardApi'
import {Button,Row,Col} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
const TeaClassDashTab = () => {
    const [drpday,setDrpday] = useState("")
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
      const handleDocumentDownloadroutine = (file)=>{

      }
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                    <h3>Class Routine</h3>
                </div>
                <div className="samebox sameboxclassroutinetab">
                <div className="bottombuttondiv">
                            <Button><img style={{marginRight:"0px"}} src="./assets/images/dashboards/studentDashboard/routineTab/downloadcoloredbutton.png" alt="" /> Download Routine</Button>
                </div>
                        <Row className='mb-4'>
                            <Col xs={{span: 5}} style={{margin:"0 auto"}}>
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
            </div>
        </div>
    </>
  )
}

export default TeaClassDashTab