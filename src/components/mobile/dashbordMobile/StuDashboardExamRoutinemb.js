import React from 'react'
import { routinetabData } from '../../../utils/DashboardApi/StudentDashboardApi'
import { Button } from 'react-bootstrap'
const StuDashboardExamRoutinemb = () => {

    const handleDocumentDownloadroutine=(file)=>{

    }
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                    <h3>Exam Routine</h3>
                </div>
               <div className="bgwhiteborder" style={{marginBottom:"50px"}}>

                <div className="examroutinetable" >
                        <table className='examroutinetablemb'>
                        <thead>
                                    <tr>
                                        {
                                            routinetabData.examRoutine.heading.map((item,key)=>{
                                                return(
                                                    <th className='text-center' key={key}>
                                                        {item.head}
                                                    </th>
                                                )
                                            })
                                        } 
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                    <tr>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.date}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.day}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.starttime}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.endtime}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            {
                                                routinetabData.examRoutine.tableData.map((item,key)=>{
                                                    return(
                                                        <tr key={key}>
                                                            <td>{item.subject}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>

                                    <td rowSpan={6} className='downbtncell'>
                                    <Button onClick={()=>handleDocumentDownloadroutine(routinetabData.examRoutine.downloadlink)}>
                                        <img src="./assets/images/dashboards/studentDashboard/routineTab/download.png" alt="" />
                                    </Button>
                                    </td>
                                    </tr>
                                
                                </tbody>
                        </table>
                    </div>
               </div>

                </div>
           
        </div>
    </>
  )
}

export default StuDashboardExamRoutinemb