import React from 'react'
import Dropdown2 from '../../subComponents/CustomSubComponents/Dropdown2'
import {Row,Col} from 'react-bootstrap'
import { attendanceApiteacher, periodsubjectdatateacher, salaryInformationteacher,routinetabDatateacher, curriculumtabtabledata, resultTabtabledata, attendanceDatateacher, prevSalarytabledata, profiletabApiteacher } from '../../../utils/DashboardApi/TeacherDashboardApi'
const TeaCurriculumTab = () => {
    const optionme = [
        {
            opt:'First Semester'
        },
        {
            opt:'Second Semester'
        }
    ]
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                    <h3>Curriculum Entry</h3>
                </div>
                <div className="samebox sameboxcurr">
                <div className="dropdownwrappercurriculum">
                    <Row>
                        <Col xs={6} className="pdrightcol5">
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>

                        </Col>
                        <Col xs={6} className="pdleftcol5">
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>

                        </Col>
                        <Col xs={12} className="mb-4 mt-2">
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        
                        </Col>
                    </Row>
                    
                    </div>
                    <div className="curriculumtabtable">
                    <table>
                        <thead>
                            <tr>
                                {
                                    curriculumtabtabledata.heading.map((item,key)=>{
                                        return(
                                            <th key={key}>{item.head}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                curriculumtabtabledata.tableData.map((item,key)=>{
                                    return(
                                        <tr>
                                            <td key={key}>{item.sl}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
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

export default TeaCurriculumTab