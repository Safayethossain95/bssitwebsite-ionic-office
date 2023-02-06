import React from 'react'

const adf = () => {
  return (
    <>
    <Row>
    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApi.localguardianinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApi.localguardianinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApi.localguardianinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApi.localguardianinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col lg={6} style={{paddingRight:"15px"}}>
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApi.localguardianinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col lg={6} style={{paddingLeft:"0"}}>
                                            <div className="infopopulatebox">
                                                <p>Telephone</p>
                                                <h5>{profiletabApi.localguardianinfo.telephonenumber}</h5>
                                            </div>

                                        </Col>
    </Row>
    </>
  )
}

export default adf