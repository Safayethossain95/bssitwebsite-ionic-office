import React,{useEffect, useState,useRef} from 'react'
import { Nav,Tab,Row,Col,Table } from 'react-bootstrap'
import moment from 'moment';
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import Dropdown2 from './subComponents/CustomSubComponents/Dropdown2';

    
const StudentAgeComp = () => {
    const [dateofadmissionnew,setdateofadmissionnew] = useState("")
    const [dateofbirthnew,setdateofbirthnew] = useState("")
    moment().format();
    const [presentAge,setPresentAge] = useState(0.0)
    const [dobyear,setdobyear] = useState(0)
    const [dobmonth,setdobmonth] = useState(0)
    const [dobday,setdobday] = useState(0)    
    const [eqclass,setEqclass] = useState("")
    const [fulldatedoad,setfulldatedoad] = useState("")
    const [fulldatedobd,setfulldatedobd] = useState("")
    let menuRef = useRef()

    const drpfunctionsection=(mysectionval)=>{
        setdrpsection(mysectionval)
    }
    useEffect(()=>{
        
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                var cot = document.getElementsByClassName("filterdropone");
                cot.classList.remove("is-open")
                console.log("hello man")
            }
        }

        document.addEventListener("mousedown",handler)

        return () => {
            document.removeEventListener("mousedown",handler)
        }
    })

    const handleDateofbirth = (newvaldob)=>{

        if(newvaldob != null){

            var dtofbrth = newvaldob.$M + 1;
            var dtdobfinalc = newvaldob.$y + '-'+ dtofbrth +'-'+ newvaldob.$D;
            setdateofbirthnew(dtdobfinalc)
        }
        
        
    }
    const handleDateofadmission=(newval)=>{
        // setfulldatedoad(e.target.value)
        setdateofadmissionnew(newval)
        if(newval != null){

            var dtofad = newval.$M + 1;
            var dtadmifinalc = newval.$y + '-'+ dtofad +'-'+ newval.$D;
             console.log(dtadmifinalc)

             
        }
        var admissiondate = dtadmifinalc
        
        console.log('finaldateof birth'+dateofbirthnew)
        console.log("admission date"+ admissiondate)
        var durationinmonths = moment(admissiondate).diff(moment(dateofbirthnew), 'months')
        // console.log(durationinmonths/12)
        var final_val = durationinmonths/12
        setPresentAge((durationinmonths/12).toFixed(2))
        if(final_val>=2 && final_val<3){
            setEqclass("Starter")
        }
        else if(final_val>=3 && final_val<4){
            setEqclass("Play Group")
        }
        else if(final_val>=4 && final_val<5){
            setEqclass("Nursery")
        }
        else if(final_val>=5 && final_val<6){
            setEqclass("Junior KG")
        }
        else if(final_val>=6 && final_val<7){
            setEqclass("Senior KG")
        }
        else if(final_val>=7 && final_val<8){
            setEqclass("Class 1")
        }
        else if(final_val>=8 && final_val<9){
            setEqclass("Class 2")
        }
        else if(final_val>=9 && final_val<10){
            setEqclass("Class 3")
        }
        else if(final_val>=10 && final_val<11){
            setEqclass("Class 4")
        }
        else  if(final_val>=11 && final_val<12){
            setEqclass("Class 5")
        }
        else if(final_val>=12 && final_val<13){
            setEqclass("Class 6")
        }
        else if(final_val>=13 && final_val<14){
            setEqclass("Class 7")
        }
        else if(final_val>=14 && final_val<15){
            setEqclass("Class 8")
        }
        else if(final_val>=15 && final_val<16){
            setEqclass("Class 9")
        }
        else if(final_val>=16 && final_val<17){
            setEqclass("O Level")
        }
        else if(final_val>=17 && final_val<18){
            setEqclass("A Level")
        }
        
        else{
            setEqclass("-")
        }
        // console.log(final_val)
        
    }
    const handlepresentage=()=>{

    }
    const handleeq =()=>{

    }

    const [drpsectionselect,setdrpsection] = useState("")
    const optionssection = [
        {
            opt:'All Sections'
        },
        {
            opt:'Junior Section'
        },
        {
            opt:'Middle Section'
        },
        {
            opt:'Senior Section'
        },
      ];
    const defaultOption = "All Sections";
      
     
  return (
    <>
     <div className="myContainer">

        <Row>
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Date of Birth</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        
                        value={dateofbirthnew}
                        onChange={(newvaldob)=>handleDateofbirth(newvaldob)}
                        renderInput={(params) => <TextField {...params} error={false} />}
                    />
                    </LocalizationProvider>
                </div>
            </Col>
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Date of Admission</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        
                        value={dateofadmissionnew}
                        onChange={(newval)=>handleDateofadmission(newval)}
                        renderInput={(params) => <TextField {...params} error={false}/>}
                    />
                    </LocalizationProvider>
                </div>
            </Col>
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Present Age</p>
                    <input type="text" value={presentAge=="NaN"?"0":presentAge} onChange={handlepresentage}/>
                </div>
            </Col>
           
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Equivalent to class</p>
                    <input type="text" placeholder='Equivalent class' value={eqclass} onChange={handleeq}/>
                </div>
            </Col>
        </Row>
        <div className="stuentagecompropdown">
                <div className="dropdownwrapper">
                <Dropdown2 func={drpfunctionsection} myplaceholder="Select Section" fontsize="12" fontfamily="'Poppins', sans-serif"  options={optionssection}/>
                </div>
        </div>
        {
            drpsectionselect=='All Sections'?
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Age Limit</th>                          
                </tr>
                <tr>
                <td>Starter</td>
                <td>2 to 3 years</td>                            
                </tr>
                <tr>
                <td>Play Group</td>
                <td>3 to 4 years</td>                            
                </tr>
                <tr>
                <td>Nursery</td>
                <td>4 to 5 years</td>                            
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>5 to 6 years</td>                            
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>6 to 7 years</td>                            
                </tr>
                <tr>
                <td>Class 1</td>
                <td>7 to 8 years</td>                            
                </tr>
                <tr>
                <td>Class 2</td>
                <td>8 to 9 years</td>                            
                </tr>
                <tr>
                <td>Class 3</td>
                <td>9 to 10 years</td>                            
                </tr>
                <tr>
                <td>Class 4</td>
                <td>10 to 11 years</td>                            
                </tr>
                <tr>
                <td>Class 5</td>
                <td>11 to 12 years</td>                            
                </tr>
                <tr>
                <td>Class 6</td>
                <td>12 to 13 years</td>                            
                </tr>
                <tr>
                <td>Class 7</td>
                <td>13 to 14 years</td>                            
                </tr>
                <tr>
                <td>Class 8</td>
                <td>14 to 15 years</td>                            
                </tr>
                <tr>
                <td>Class 9</td>
                <td>15 to 16 years</td>                            
                </tr>
                <tr>
                <td>O Lavel</td>
                <td>16 to 17 years</td>                            
                </tr>
                <tr>
                <td>A Lavel</td>
                <td>17 to 18 years</td>                            
                </tr>
                <tr>
                <td>Pre - O Lavel</td>
                <td>17 to 18 years</td>                            
                </tr>
            </tbody>
            </Table>
            :
            drpsectionselect=='Junior Section'?
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Age Limit</th>                          
                </tr>
                <tr>
                <td>Starter</td>
                <td>2 to 3 years</td>                            
                </tr>
                <tr>
                <td>Play Group</td>
                <td>3 to 4 years</td>                            
                </tr>
                <tr>
                <td>Nursery</td>
                <td>4 to 5 years</td>                            
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>5 to 6 years</td>                            
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>6 to 7 years</td>                            
                </tr>
                
            </tbody>
            </Table>
            :
            drpsectionselect=='Middle Section'?
            <Table className='juniortable'>
                        
                            
                        
                        <tbody>
                            <tr>
                            <th>Class</th>
                            <th>Age Limit</th>                          
                            </tr>
                            <tr>
                            <td>Class 1</td>
                            <td>7 to 8 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 2</td>
                            <td>8 to 9 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 3</td>
                            <td>9 to 10 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 4</td>
                            <td>10 to 11 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 5</td>
                            <td>11 to 12 years</td>                            
                            </tr>
                            
                        </tbody>
                        </Table>
            :
            drpsectionselect=='Senior Section'?
            <Table className='juniortable'>
                        
                            
                        
                        <tbody>
                            <tr>
                            <th>Class</th>
                            <th>Age Limit</th>                          
                            </tr>
                            <tr>
                            <td>Class 6</td>
                            <td>12 to 13 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 7</td>
                            <td>13 to 14 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 8</td>
                            <td>14 to 15 years</td>                            
                            </tr>
                            <tr>
                            <td>Class 9</td>
                            <td>15 to 16 years</td>                            
                            </tr>
                            <tr>
                            <td>O Lavel</td>
                            <td>16 to 17 years</td>                            
                            </tr>
                            <tr>
                            <td>A Lavel</td>
                            <td>17 to 18 years</td>                            
                            </tr>
                            <tr>
                            <td>Pre - O Lavel</td>
                            <td>17 to 18 years</td>                            
                            </tr>
                            
                        </tbody>
                        </Table>
            :
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Age Limit</th>                          
                </tr>
                <tr>
                <td>Starter</td>
                <td>2 to 3 years</td>                            
                </tr>
                <tr>
                <td>Play Group</td>
                <td>3 to 4 years</td>                            
                </tr>
                <tr>
                <td>Nursery</td>
                <td>4 to 5 years</td>                            
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>5 to 6 years</td>                            
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>6 to 7 years</td>                            
                </tr>
                <tr>
                <td>Class 1</td>
                <td>7 to 8 years</td>                            
                </tr>
                <tr>
                <td>Class 2</td>
                <td>8 to 9 years</td>                            
                </tr>
                <tr>
                <td>Class 3</td>
                <td>9 to 10 years</td>                            
                </tr>
                <tr>
                <td>Class 4</td>
                <td>10 to 11 years</td>                            
                </tr>
                <tr>
                <td>Class 5</td>
                <td>11 to 12 years</td>                            
                </tr>
                <tr>
                <td>Class 6</td>
                <td>12 to 13 years</td>                            
                </tr>
                <tr>
                <td>Class 7</td>
                <td>13 to 14 years</td>                            
                </tr>
                <tr>
                <td>Class 8</td>
                <td>14 to 15 years</td>                            
                </tr>
                <tr>
                <td>Class 9</td>
                <td>15 to 16 years</td>                            
                </tr>
                <tr>
                <td>O Lavel</td>
                <td>16 to 17 years</td>                            
                </tr>
                <tr>
                <td>A Lavel</td>
                <td>17 to 18 years</td>                            
                </tr>
                <tr>
                <td>Pre - O Lavel</td>
                <td>17 to 18 years</td>                            
                </tr>
            </tbody>
            </Table>

        }
       
            <div className="studentagesometext">
                <h4>School Declaration</h4>
                <p>The age limit mentioned above is based on international standard. for any exception,the BSS admission board reserves the right to review the student's eligible class criteria for admission.</p>
            </div>
        </div>
    </>
  )
}

export default StudentAgeComp