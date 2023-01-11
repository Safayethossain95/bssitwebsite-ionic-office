import React,{useState} from 'react'
import {Row,Col, Form} from 'react-bootstrap'
import CommonButton from '../../subComponents/CommonButton'
import {Link} from 'react-router-dom'
const ForgotPassCompmb = () => {
    const [forgotpassworddata,setForgotpassworddata] = useState({
        studentid:"",
        mobilenumber:""
      })
      const handleInput2=(e)=>{
        setForgotpassworddata({...forgotpassworddata,[e.target.name]: e.target.value})
    
      }
      
      const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(JSON.stringify(forgotpassworddata))
      }
  return (
    <>
        <div className="fotgotpasscompmb">
            <div className="mobilecontainer">
                <div className="heading">
                    <h4>Forget Password</h4>
                </div>

                  <div className="fieldboxforlogin">
                    <Form onSubmit={handleSubmit}>
                    <p>Student id</p>
                    <input type="text" name="studentid" value={forgotpassworddata.studentid} onChange={handleInput2}/>
                    <p>Mobile Number</p>
                    <input type="text" name="mobilenumber" value={forgotpassworddata.mobilenumber} onChange={handleInput2}/>

                    <ul style={{listStyleType:"disc"}}>
                        <li><p>1. An auto-generated password will send to your mobile number.</p></li>
                        <li><p>2. You can change this auto-generated password by login to your panel and set a new password.</p></li>
                        <li><p>3. You can get this auto-generated password once in a month.</p></li>
                        <li><p>4. If your mobile number is missing, please contact the office for new password.</p></li>

                    </ul>
                    
                    <div className="buttonpartlogin2 text-center">
                      <CommonButton buttonTitle="Get Password"/>
                      <Link className="onlytextlink" to="/login">Login</Link>
                    </div>

                    </Form>
                  </div>
                  
                
            </div>
        </div>
    </>
  )
}

export default ForgotPassCompmb