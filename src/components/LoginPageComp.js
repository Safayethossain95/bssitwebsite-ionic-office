import React,{useState} from 'react'
import {Row,Col, Form} from 'react-bootstrap'
import CommonButton from '../components/subComponents/CommonButton';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
const LoginPageComp = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
 
  const navigate = useNavigate()
  const [formdata,setFormdata] = useState({
    username:"",
    password:""
  })
  
  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
  };

  const headers= {    
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",     
    }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formdata.username,formdata.password)
    // navigate('/aboutus');
    try {
      axios.post('https://localhost:7229/api/Auth', {
        username: formdata.username,
        password: formdata.password
      },headers)
      .then(function (response) {
        console.log(response);
        if(response.ok){
          navigate('/')
        }else{
          navigate('/userpassnotmatched')

        }
      })
    } catch (err) {
      if (err) {
        console.error(err);
      } 
    }
  }
  const handleInput=(e)=>{    
    setFormdata({...formdata,[e.target.name]: e.target.value} )
  }
  return (
    <>
        <div className="myContainer">
          <Row>
            <Col lg={6} className="d-flex align-items-center">
                <div className="loginlogodiv">
                  <img src="./assets/images/bssloginlogo.png" alt="" />
                  </div>
            </Col>
            <Col>
                <div className="loginbox">
                  <div className="loginboxinner">
                  <h4>Login</h4>

                  <div className="fieldboxforlogin">
                    <Form onSubmit={handleSubmit}>
                      <p>User Name</p>
                      <input type="text" name="username" value={formdata.username} onChange={handleInput}/>
                      <p>password</p>
                      <input type="password" name="password" value={formdata.password} onChange={handleInput}/>

                      <div className="checkboxfull">
                      
                      <input
                        type="checkbox"
                        value={isSubscribed}
                        onChange={handleChange}
                        id="remember"
                        name="subscribe"                        
                      />
                      <span>Remember Me</span>
                    
                      
                      </div>

                      <div className="buttonpartlogin">
                        <CommonButton  buttonTitle="Login"/>
                        <Link className="onlytextlink" to="/forgotpassword">Forgot Password?</Link>
                      </div>
                    </Form>
                    
                  </div>
                  </div>
                </div>
            </Col>
          </Row>
        </div>
    </>
  )
}

export default LoginPageComp