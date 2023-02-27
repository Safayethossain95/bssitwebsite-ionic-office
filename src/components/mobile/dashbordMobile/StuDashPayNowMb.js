import React,{useState} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import { billInfoData } from '../../../utils/DashboardApi/StudentDashboardApi';
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { attendanceData } from '../../../utils/DashboardApi/StudentDashboardApi'
import PillSmall from '../../subComponents/CustomSubComponents/PillSmall'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const StuDashPayNowMb = () => {
    const navigate=useNavigate()
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
      const [isCheckedterms,setisCheckedterms]=useState(false)
      const [termschecked,settermschecked]=useState("")
      const handleChangeterms = event => {
          if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            settermschecked("termsagree")
            
          } else {
              console.log('⛔️ Checkbox is NOT checked');
              settermschecked("")
          }
          setisCheckedterms(current => !current);
        };
        const handerfau =()=>{
          
        }
        const [count, setCount] = useState(0);
        const incrementCount = () => {        
            setCount(count + 1);
          };
          const decrementCount = () => {  
            if(count==0){
                setCount(0)
            } 
            else{
    
                setCount(count - 1);
            }     
          };

          const handlegoBack = ()=>{
            navigate('/studashboard/seventh')
          }

  return (
    <div className="bodycolorbg">
        <div className="mobilecontainer">
            <div className="heading headingofdocumenttab">
                <h3>Payment</h3>
            </div>
            <div className="billlinfotabmb">
            <div className="duepaymentpart duepaymentpartinner">
                         <div className="arrowdiv">
                            <AiOutlineArrowLeft onClick={handlegoBack}/>
                        </div>
                        <div className="headingofduepayment">
                            <h3>Due Payment </h3>
                            <p>&#40;You have total 5 months tuition fee due&#41;</p>
                        </div>
                        <div className="bottombuttondiv">
                            <Button>Pay Now</Button>
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
                        
                    <div className="basicinfopopulatebillentry basicinfopopulatebillentryincdec">
                        <p>Add or Remove Months</p>
                        <input type="text"  name="countnumber" placeholder={count} value={count} onChange={handerfau}/>
                        <div className="plus" onClick={incrementCount}>+</div>
                        <div className="minus" onClick={decrementCount}>-</div>
                    </div>
                        <div className="checkboxfull">                      
                            <label className='checkcontainer'>
                            I Agree to the<span>Terms and Conditions Agreement</span>
                            <input
                                type="checkbox"
                                value={isCheckedterms}
                                onChange={handleChangeterms}
                                id="remember"
                                name="subscribe"                        
                            />
                            <span className="checkmark"></span>
                            </label>
                            
                        </div>
                    </div>
                    </div>
        </div>
    </div>
  )
}

export default StuDashPayNowMb