import React,{useState} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import { prevSalarytabledata } from '../../../../utils/DashboardApi/TeacherDashboardApi'
const TeaSalaryDashTab = () => {
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading headingofdocumenttab">
                    <h3>Salary Information</h3>
                </div>
                <div className="whiteboxwrapper">
                <div className="samebox salaryinfotablaeboxmb">
                        <div className="headingofpaymenthistory">
                            <h3>Previous Salary History</h3>
                        </div>
                        
                        <div className="paymenthistorytable">
                        <table>
                                <thead>
                                    <tr>
                                        {
                                            
                                            prevSalarytabledata.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        prevSalarytabledata.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.month}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.salary}</td>
                                                    <td>{item.receivedamount}</td>
                                                </tr>
                                            )
                                        })
                                      }
                                </tbody>
                            </table>
                        </div>
                    </div>
                        <div className="bottombuttondiv">
                            <Button>Total Amount: 73604.00 BDT</Button>
                        </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default TeaSalaryDashTab