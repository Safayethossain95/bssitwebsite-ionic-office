import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiOutlineBell} from 'react-icons/hi'
import {Row,Col, Button} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown,BsCreditCard2Back} from 'react-icons/bs'
import {RiEraserLine} from 'react-icons/ri'
import {BiSave,BiPrinter} from 'react-icons/bi'
const BillEntryComponent = () => {
    const [count, setCount] = useState(0);
    const [school,setschool] = useState("")
    const [billtype,setbilltype] = useState("")
    const [paymenttype,setpaymenttype] = useState("")
    const incrementCount = () => {        
      setCount(count + 1);
    };
    const decrementCount = () => {        
      setCount(count - 1);
    };

    const [billentrydata,setBillentrydata] = useState({
        countnumber:count,
        totalbill:"",
        totalvat:"",
        totaldiscount:"",
        totalcollection:"",
        cashbystudent:"",
        returnamount:"",
        schoolselect:school,
        billtypeselect:billtype,
        paymentmethodselect:paymenttype


    })
    const handleInput=(e)=>{    
        setBillentrydata({...billentrydata,[e.target.name]: e.target.value} )
      }
    const handleSearch=()=>{
        console.log("hello")
    }
    const options = [
        'School','Other','Student Wise'
      ];
      const options2 = [
        'Admission Fee','Tuition Fee','Billing Charge','Annual Development','Admission Form'
      ];
      const options3 = [
        'Cash','Card'
      ];
      const dropdownvalue=(e)=>{
        setschool(e.value)
      }
      const dropdownvalue2=(e)=>{
        setbilltype(e.value)
      }
      const dropdownvalue3=(e)=>{
        setpaymenttype(e.value)
      }
      const defaultOption = "Receive Type";
      const defaultOption2 = "Bill Type";
      const defaultOption3 = "Payment Type";

      const handleSave=()=>{
        console.log(billentrydata)
      }
  return (
    <>
         <div className="headerpartbill">
            
            <div className="leftsidesearch">
                <input type="text" onChange={handleInput} name="searchword"  placeholder='Search Student ID'/>
                <span onClick={handleSearch}><FiSearch/></span>
            </div>
        
            <div className="rightsidestuff">
                <div className="bellicon">
                    <HiOutlineBell/>
                </div>
                <div className="profilesmallinfo">
                    <div className="profilepic">
                        <img src="./assets/images/billpage/headerprofilepic.png" alt="headerprofilepic" />
                    </div>
                    <div className="roleandid">
                        <div className="roleidwrapper">
                            <h5>Admin</h5>
                            <p>ID 1705032108</p>
                        </div>
                    </div>
                </div>
            </div>
       
    
        </div>
        <div className="wrapperforscrollbar2">
        <div className="billentrytop">
                    
                    <div className="billentrytopmenu">
                        <Row style={{width:"100%"}}>
                            <Col style={{flexGrow:"1.5"}}>
                            <Button>Previous Payment History</Button>
                            </Col>
                            <Col>
                            <Button>Collect Previous Due</Button>
                            </Col>
                            <Col>
                            <Button>Package</Button>
                            </Col>
                            <Col>
                            <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' name="schoolselect" options={options} onChange={(e)=>dropdownvalue(e)} value={defaultOption} placeholder="Select an option" />
                                    <BsChevronDown/>
                                </div>
                            </Col>
                            <Col style={{paddingRight:"0"}}>
                            <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' name="billtypeselect" options={options2} onChange={(e)=>dropdownvalue2(e)} value={defaultOption2} placeholder="Select an option" />
                                    <BsChevronDown/>
                                </div>
                            </Col>

                            
                        </Row>
                        </div>
                   
                    

                        <Row className="mx-0">
                            <Col lg={12} >
                                <div className="billentrytoptable">
                                <table>
                            <tbody>
                            <tr>                                
                                <th>Date</th>
                                <th>Bill No.</th>
                                <th>RCV Type</th>
                                <th>Month</th>
                                <th>About</th>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            <tr>
                                <td>15-Oct-22</td>
                                <td>22100000374</td>
                                <td>Tuition Fee</td>
                                <td>Oct-22</td>
                                <td>10791.00</td>
                            </tr>
                            </tbody>
                        </table>
                                </div>
                            </Col>
                        </Row>
                        
                     
        </div>
        </div>
        

        <div className="billentrybottom">
            <div className="billentrybottombox">
                <div className="billentrybottomboxflexwrapper">
                <Row>
                    <Col>
                    <div className="basicinfopopulatebillentry">
                        <p>Total Bill</p>
                        <input type="text" onChange={handleInput} name="totalbill" value={billentrydata.totalbill} placeholder='Muhammad Rafi Rahman'/>

                    </div>
                    </Col>
                    <Col>
                    <div className="basicinfopopulatebillentry">
                        <p>Total VAt</p>
                        <input type="text" onChange={handleInput} name="totalvat" value={billentrydata.totalvat} placeholder='-'/>

                    </div>
                    </Col>
                    <Col>
                    <div className="basicinfopopulatebillentry">
                        <p>Total Discount</p>
                        <input type="text" onChange={handleInput} name="totaldiscount" value={billentrydata.totaldiscount} placeholder='-'/>

                    </div>
                    </Col>
                    <Col>
                    <div className="basicinfopopulatebillentry">
                        <p>Total Collection</p>
                        <input type="text" onChange={handleInput} name="totalcollection"  placeholder='-' value={billentrydata.totalcollection}/>

                    </div>
                    </Col>
                    <Col style={{flexGrow:"0.7"}}>
                    <div className="basicinfopopulatebillentry basicinfopopulatebillentryincdec">
                        <p>Number Of Month</p>
                        <input type="text"  name="countnumber" placeholder={count} value={count} />
                        <div className="plus" onClick={incrementCount}>+</div>
                        <div className="minus" onClick={decrementCount}>-</div>
                    </div>
                    </Col>
                </Row>
                <Row className='paymentmethodinputgap'>
                    <Col style={{flexGrow:"1.5"}}>
                        <div className="basicinfopopulatebillentry">
                            <p>Payment Method</p>
                            <div className="dropdownwrapper">
                                    <Dropdown className='filterdropone' name="paymentmethodselect" options={options3} onChange={(e)=>dropdownvalue3(e)} value={defaultOption3} placeholder="Select an option"/>
                                    <BsChevronDown/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="basicinfopopulatebillentry">
                        <p>Cash By Student</p>
                        <input type="text" onChange={handleInput} name="cashbystudent" value={billentrydata.cashbystudent} placeholder='-'/>

                    </div>
                    </Col>
                    <Col>
                       <div className="basicinfopopulatebillentry">
                        <p>Return Amount</p>
                        <input type="text" onChange={handleInput} name="returnamount" placeholder='-' value={billentrydata.returnamount}/>

                    </div>
                    </Col>
                </Row>

                <div className="bottomboxbuttonwrap">
                    <Button><span><RiEraserLine/></span> Clear</Button>
                    <Button onClick={handleSave}><span><BiSave/></span> Save</Button>
                    <Button><span><BiPrinter/></span> Print</Button>
                    <Button><span><BsCreditCard2Back/></span> My Collection</Button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BillEntryComponent