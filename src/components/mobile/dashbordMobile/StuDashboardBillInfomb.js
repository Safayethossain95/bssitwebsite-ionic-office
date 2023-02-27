import React from 'react'
import { billInfoData } from '../../../utils/DashboardApi/StudentDashboardApi'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const StuDashboardBillInfomb = () => {

    const navigate = useNavigate()

    const handlePaynow=()=>{
        navigate('/studashboard/payment')
    }
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading">
                    <h3>Bill Information</h3>
                </div>
            <div className="billlinfotabmb">
            <div className="duepaymentpart">
                        <div className="headingofduepayment">
                            <h3>Due Payment </h3>
                            <p>&#40;You have total 5 months tuition fee due&#41;</p>
                        </div>
                        <div className="bottombuttondiv">
                            <Button onClick={handlePaynow}>Pay Now</Button>
                        </div>
                        <div className="duepaymenttable">
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            
                                            billInfoData.duepayment.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        billInfoData.duepayment.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.month}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.lastdate}</td>
                                                    <td>{item.dueamount}</td>
                                                </tr>
                                            )
                                        })
                                      }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="paymenthistory">
                        <div className="headingofpaymenthistory">
                            <h3>Previous Payment History</h3>
                        </div>
                        <div className="bottombuttondiv">
                            {/* <Button>Total Amount: {billInfoData.previouspayment.tabledata.map((item,key)=>{
                                var tempprevsum = tempprevsum + item.receivedamount
                                setprevsum(tempprevsum)
                                return(
                                    <>
                                    
                                    </>
                                )
                            })} {prevsum} BDT</Button> */}
                            <Button>Total</Button>
                        </div>
                        <div className="paymenthistorytable">
                        <table>
                                <thead>
                                    <tr>
                                        {
                                            billInfoData.previouspayment.header.map((item,key)=>{
                                                return(
                                                    <th key={key}>{item.headerline}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        billInfoData.previouspayment.tabledata.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.sl}</td>
                                                    <td>{item.billdate}</td>
                                                    <td>{item.periodname}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.payableamount}</td>
                                                    <td>{item.receivedamount}</td>
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

        </div>
    </>
  )
}

export default StuDashboardBillInfomb