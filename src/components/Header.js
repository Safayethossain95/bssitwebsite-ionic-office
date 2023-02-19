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
                <h3><Link to="/">British Standard School</Link></h3>
              </div>
            </Col>
            <Col lg={4} >
              <div className="headerinforight">
              <div className="hinfo">
                  <img src="./assets/images/icons/location.png" alt="" /> <a target='_blank' href="https://goo.gl/maps/ouSN4YZCfokuMzAC7">13, Larmini Street Wari, Dhaka</a>                       
                </div> 
                <div className="hinfo">
                  <img src="./assets/images/icons/phone.png" alt="" /> <a href="tel:880247115628">880247115628</a>                   
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