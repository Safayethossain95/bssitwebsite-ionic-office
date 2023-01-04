import React,{useState} from 'react'
import { Nav,Tab,Row,Col,Table } from 'react-bootstrap'
import moment from 'moment';

const StudentAgeComp = () => {
    moment().format();
    const [presentAge,setPresentAge] = useState(0.0)
    const [dobyear,setdobyear] = useState(0)
    const [dobmonth,setdobmonth] = useState(0)
    const [dobday,setdobday] = useState(0)    
    const [eqclass,setEqclass] = useState("")
    const [fulldatedoad,setfulldatedoad] = useState("")
    const [fulldatedobd,setfulldatedobd] = useState("")
    
    
    const handleDateofbirth = (e)=>{

        
        setfulldatedobd(e.target.value)
    }
    const handleDateofadmission=(e)=>{
        setfulldatedoad(e.target.value)
        var admissiondate = e.target.value
        
        var durationinmonths = moment(admissiondate).diff(moment(fulldatedobd), 'months')
        console.log(durationinmonths/12)
        var final_val = durationinmonths/12
        setPresentAge((durationinmonths/12).toFixed(2))
        if(final_val>=2 && final_val<3){
            setEqclass("Starter")
        }
        if(final_val>=3 && final_val<4){
            setEqclass("Play Group")
        }
        if(final_val>=4 && final_val<5){
            setEqclass("Nursery")
        }
        if(final_val>=5 && final_val<6){
            setEqclass("Junior KG")
        }
        if(final_val>=6 && final_val<7){
            setEqclass("Senior KG")
        }
        if(final_val>=7 && final_val<8){
            setEqclass("Class 1")
        }
        if(final_val>=8 && final_val<9){
            setEqclass("Class 2")
        }
        if(final_val>=9 && final_val<10){
            setEqclass("Class 3")
        }
        if(final_val>=10 && final_val<11){
            setEqclass("Class 4")
        }
        if(final_val>=11 && final_val<12){
            setEqclass("Class 5")
        }
        if(final_val>=12 && final_val<13){
            setEqclass("Class 6")
        }
        if(final_val>=13 && final_val<14){
            setEqclass("Class 7")
        }
        if(final_val>=14 && final_val<15){
            setEqclass("Class 8")
        }
        if(final_val>=15 && final_val<16){
            setEqclass("Class 9")
        }
        if(final_val>=16 && final_val<17){
            setEqclass("O Level")
        }
        if(final_val>=17 && final_val<18){
            setEqclass("A Level")
        }
        
        
        
    }
    const handlepresentage=()=>{

    }
    const handleeq =()=>{

    }
  return (
    <>
     <div className="myContainer">

        <Row>
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Date of Birth</p>
                    <input type="date" onChange={handleDateofbirth} />
                </div>
            </Col>
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Date of Admission</p>
                    <input type="date" onChange={handleDateofadmission} />
                </div>
            </Col>
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Present Age</p>
                    <input type="text" value={presentAge==0?"Years":presentAge} onChange={handlepresentage}/>
                </div>
            </Col>
           
            <Col lg={3}>
                <div className="basicinfopopulate">
                    <p>Equivalent to class</p>
                    <input type="text" placeholder='Equivalent class' value={eqclass} onChange={handleeq}/>
                </div>
            </Col>
        </Row>
        <Tab.Container id="student_age_tab" defaultActiveKey="first">
            <div className="tabspillscontainer">
                <Nav variant="pills">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Junior Section</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Middle Section</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Senior Section</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
            <Row>
                <Col lg={12}>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
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
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            <div className="studentagesometext">
                <h4>School Declaration</h4>
                <p>The age limit mentioned above is based on international standard. for any exception,the BSS admission board reserves the right to review the student's eligible class criteria for admission.</p>
            </div>
        </div>
    </>
  )
}

export default StudentAgeComp