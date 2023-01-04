import React,{useState} from 'react'
import '../../../sassFiles/mobile/sassPages/studentAgePagemb.scss'
import {Row,Col} from 'react-bootstrap'
import moment from 'moment';
const StudentAgePagemb = () => {
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
        <div className="studentagepagemb">
            <div className="mobilecontainer">
                <div className="heading">
                    <h4>
                        Student's Age
                    </h4>
                    <p>
                    Select age for see the equivalent class
                    </p>
                </div>

                <Row>
                    <Col xs={6} style={{padding:"0 5px"}}>
                        <div className="basicinfopopulate">
                        
                            <input type="date" onChange={handleDateofbirth} />
                        </div>
                    </Col>
                    <Col xs={6} style={{padding:"0 5px"}}>
                        <div className="basicinfopopulate">
                        
                            <input type="date" onChange={handleDateofadmission} />
                        </div>
                    </Col>
                </Row>
            <h6>Equivalent to Class</h6>

            <div className="eqboxmb">
                <div className="innerboxmb">
                    <p>Present Age</p>
                    <p>
                        0 Years Old
                    </p>
                </div>
                <div className="innerboxmb innerboxmbred">
                    <p>Equivalent Class</p>
                    <p>
                        0 Years Old
                    </p>
                </div>
            </div>
            </div>

        </div>
    </>
  )
}

export default StudentAgePagemb