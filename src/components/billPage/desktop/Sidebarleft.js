import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Sidebarleft = () => {
  return (
    <>
        <div className="sidebarleftbill">
            <div className="sidebarleftbillbox">
                <div className="logo">
                    <img src="./assets/images/billpage/Logo.png" alt="" />
                </div>
                <div className="menupart">
                  <ul>
                    <li><Link to="/">Bill Entry</Link></li>
                    <li><Link to="/">Option 1</Link></li>
                    <li><Link to="/">Option 2</Link></li>
                    <li><Link to="/">Option 3</Link></li>
                  </ul>
                </div>
                <div className="logout">
                  <Button>Logout</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebarleft