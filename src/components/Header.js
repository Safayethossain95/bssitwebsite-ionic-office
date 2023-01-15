import React from 'react'

import { Link } from "react-router-dom";
import {Row,Col} from 'react-bootstrap'
const Header = () => {
  return (
    <>
    <div className="myContainer">
    <div className='myheader'>
        <div className="headerwrapper">
            <Col lg={8} >

              <div className="headerinfoleft">
                <Link to="/"><img src="./assets/images/newlogo.png" alt="" /></Link>
                <h3>British Standard School</h3>
              </div>
              
                     
              
            </Col>
            <Col lg={4} >
              <div className="headerinforight">
              <div className="hinfo">
                  <img src="./assets/images/icons/location.png" alt="" /> <span>13, Larmini Street Wari, Dhaka</span>                        
                </div> 
                <div className="hinfo">
                  <img src="./assets/images/icons/phone.png" alt="" /> <span>880247115628</span>                   
                </div>                 
              </div>
            </Col>
        </div>

        </div>
    </div>
        
          
            
           
    </>
  )
}

export default Header