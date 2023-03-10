import React from 'react'

import { Link } from "react-router-dom";
import {Row,Col} from 'react-bootstrap'
const Header = () => {
  return (
    <>
        <div className='myheader'>
        <div className="headerwrapper">
            <Col lg={6} sm={6} md={7}>
              <div className="headerinfoleft">
                <div className="hinfo">
                  <img src="./assets/images/icons/phone.png" alt="" /> <span>880247115628</span>                   
                </div>
                <div className="hinfo">
                  <img src="./assets/images/icons/location.png" alt="" /> <span>13, Larmini Street Wari, Dhaka</span>                        
                </div>       
              </div>
            </Col>
            <Col lg={6} sm={6} md={5}>
              <div className="headerinforight">
                  <span><Link to="/login">Login</Link> |</span> <Link to="/">Bill Pay</Link>
              </div>
            </Col>
        </div>

        </div>
          
            
           
    </>
  )
}

export default Header