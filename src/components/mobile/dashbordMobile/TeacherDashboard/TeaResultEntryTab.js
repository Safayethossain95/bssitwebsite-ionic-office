import React,{useState} from 'react'
import Dropdown2 from '../../../subComponents/CustomSubComponents/Dropdown2'
import { attendanceApiteacher, periodsubjectdatateacher, salaryInformationteacher,routinetabDatateacher, curriculumtabtabledata, resultTabtabledata, attendanceDatateacher, prevSalarytabledata, profiletabApiteacher } from '../../../../utils/DashboardApi/TeacherDashboardApi'
import { Button } from 'react-bootstrap'
const TeaResultEntryTab = () => {
    const optionme = [
        {
            opt:'First Semester'
        },
        {
            opt:'Second Semester'
        }
    ]
    const optionselectclass = [
        {
            opt:'Class 1'
        },
        {
            opt:'Class 2'
        }
    ]
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                    <h3>Result Entry</h3>
                </div>

                <div className="samebox resultfilterentrybox">
                        <div className="resultfilterfirstrow">
                        <div className="flexwrap">

                        <div className="drpwithtextwrap">
                            <p>Select Class</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionselectclass}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Exam</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        </div>
                        <div className="flexwrap">
                        <div className="drpwithtextwrap">
                            <p>Section</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Shift</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>

                        </div>
                        <div className="flexwrap">

                        <div className="drpwithtextwrap">
                            <p>Subject Select</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        <div className="drpwithtextwrap">
                            <p>Sunject Subgroup</p>
                            <Dropdown2 fontsize="12" fontfamily="'Poppins', sans-serif" options={optionme}/>
                        </div>
                        </div>
                      
                        </div>
                        
                       
                    </div>
                    <div className="samebox resulttabentrybox">
                    <div className="resulttabtable">
                       
                        
                        <div className="resulttabtabletable">
                        <table>
                                <thead>
                                    <tr>
                                        {
                                            
                                            resultTabtabledata.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        resultTabtabledata.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.studentid}</td>
                                                    
                                                    <td>{item.studentname}</td>
                                                    <td>{item.exam}</td>
                                                    
                                                </tr>
                                            )
                                        })
                                      }
                                </tbody>
                            </table>
                        </div>
                            <div className="bottombuttondiv">
                            <Button>Print</Button>
                            <Button>Save</Button>
                        </div>

                    </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default TeaResultEntryTab