import React,{useState} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { resulttabdata } from '../../../utils/DashboardApi/StudentDashboardApi';

const StuDashboardResultmb = () => {
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
  return (
    <>
        <div className="bodycolorbg" style={{marginBottom:"35px",overflow:"visible"}}>
            <div className="mobilecontainer">
                <div className="heading">
                        <h3>Result</h3>
                </div>
                
                <div className="resulttabbox">
                        <Row className="tpwhite">
                            <Col lg={5} style={{margin:"0 auto"}}>
                                <Row>
                                <Col xs={6} className="pdrightcol5 ">
                                    <div className="basicinfopopulate">
                                        <p>
                                            Select Semeseter
                                        </p>
                                        <div className="dropdownwrapper" id="routinedrp">
                                            <Dropdown open={true} className='filterdropone'  options={optionsemsterresulttab} onChange={(e)=>drpdwnsemesterselecthandler(e)} value={defaultOptionsemestertype} placeholder="Select an option" />
                                            <BsChevronDown/>
                                        </div>
                                    </div>
                                
                                </Col>
                                <Col xs={6} className="pdleftcol5 ">
                                    <div className="basicinfopopulate">
                                        <p>
                                            Select Type
                                        </p>
                                        <div className="dropdownwrapper" id="routinedrp">
                                            <Dropdown open={true} className='filterdropone'  options={optiontyperesulttab} onChange={(e)=>drpdwntyperesulttabhandler(e)} value={defaultOptionstyperesulttab} placeholder="Select an option" />
                                            <BsChevronDown/>
                                        </div>
                                    </div>
                                
                                </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                        
                        {
                            typeresulttab=="Assessment"?
                            <div className=" resulttblemb resulttabmbextra">

                            <div className="resulttable resulttableextra">
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                
                                                resulttabdata.firstSemester.dataTable.heading.map((item,key)=>{
                                                    return(
                                                        <th key={key}>{item.headline}</th>
                                                    )
                                                })
                                            }
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            resulttabdata.firstSemester.dataTable.tableData.map((item,key)=>{
                                                return(
                                                    <tr key={key}>
                                                        <td>{item.subject}</td>
                                                        <td>{item.subgroup}</td>
                                                        <td>{item.totaltest}</td>
                                                        <td>{item.bestcount}</td>
                                                        <td style={{width:"60%"}}>
                                                            {/* <table style={{marginTop:"0"}}> */}
                                                                <tr>
                                                                {
                                                                    item.assessment.map((item2,key2)=>{
                                                                        return(
                                                                            <td style={{width:"34px"}} key={key2}>{item2.value==0?"-":item2.value}</td>
                                                                        )
                                                                    })
                                                                }
                                                                </tr>
                                                            {/* </table> */}
                                                        </td>
                                                        <td className='customsumtd'><p>10+20+30</p></td>
                                                        <td><p>46.00</p></td>
                                                        
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            :
                            typeresulttab=="Result"?
                            <>
                            <div className=" resulttblemb resulttabmbextra">

                            <div className="wrapperresulttableextra">
                                <div className="resulttable resulttableextra">
                            <table >
                                <thead>
                                    <tr>
                                        {
                                            resulttabdata.firstSemester.resultTable.heading.map((item,key)=>{
                                                return(
                                                    <th className="text-center" key={key}>{item.head}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         resulttabdata.firstSemester.resultTable.tableData.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.subject}</td>    
                                                    <td>{item.assessment}</td>    
                                                    <td>{item.firstsemesterexdam}</td>    
                                                    <td>{item.totalmarkobtained}</td>    
                                                    <td>{item.percentage}</td>    
                                                    <td>{item.grade}</td>    
                                                </tr>
                                            )
                                         })
                                    }
                                    <tr style={{borderBottom:"0"}}>
                                        <td colSpan={2}>Grand Total: 900.00</td>
                                        <td colSpan={2}>Mark Obtained: 805.50</td>
                                        <td>89.50%</td>
                                        <td>A</td>
                                    </tr>
                                </tbody>
                            </table>

                            </div>
                            </div>
                            </div>
                            <div className=" resulttblemb resulttabmbextra">

                            <div className="stats">
                                <Row>
                                    <Col xs={12}>
                                        <div className="statsboxresulttab">
                                            <h5>Rank</h5>
                                            <div className="centerwrapper">                                          
                                            <p>Total Percentage Obtained = 89.50</p>
                                            <p>Position in section = 14</p>
                                            <p>Position in class = 30</p>                                           
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="statsboxresulttab statsboxresulttab2">
                                        <h5>Result</h5>
                                            <div className="centerwrapper centerwrapperright">                                          
                                            <p>Highest Total Percentage Obtained in Class= 99.50</p>
                                            <p>Highest Total Percentage Obtained in Section = 99.53</p>
                                            <p>2nd Highest Total Percentage Obtained in Class = 98.72</p>                                           
                                            <p>3rd Highest Total Percentage Obtained in Class= 98.71</p>                                           
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="downloadbuttonforresult">
                                    <Button>
                                        Download Result
                                    </Button>
                                </div>
                            </div>
                            </div>
                            </>
                            :
                            <div className=" resulttblemb resulttabmbextra">
                            <div className="resulttable resulttableextra">
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                resulttabdata.firstSemester.dataTable.heading.map((item,key)=>{
                                                    return(
                                                        <th key={key}>{item.headline}</th>
                                                    )
                                                })
                                            }
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            resulttabdata.firstSemester.dataTable.tableData.map((item,key)=>{
                                                return(
                                                    <tr key={key}>
                                                        <td>{item.subject}</td>
                                                        <td>{item.subgroup}</td>
                                                        <td>{item.totaltest}</td>
                                                        <td>{item.bestcount}</td>
                                                        <td style={{width:"60%"}}>
                                                            <table style={{marginTop:"0"}}>
                                                                <tr>
                                                                {
                                                                    item.assessment.map((item2,key2)=>{
                                                                        return(
                                                                            <td style={{width:"34px"}} key={key2}>{item2.value==0?"-":item2.value}</td>
                                                                        )
                                                                    })
                                                                }
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td><p>10+20+30</p></td>
                                                        <td><p>46.00</p></td>
                                                        
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            </div>
                        }
                        
                        
                        
                    </div>

            </div>
        </div>
    </>
  )
}

export default StuDashboardResultmb