import React from 'react'

const adf = () => {
  return (
    <>
    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Full Name</p>
                                                <h5>{profiletabApi.localguardianinfo.fullname}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Email</p>
                                                <h5>{profiletabApi.localguardianinfo.email}</h5>
                                            </div>

                                        </Col>                                   
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>National ID</p>
                                                <h5>{profiletabApi.localguardianinfo.nationalid}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Passport</p>
                                                <h5>{profiletabApi.localguardianinfo.passport}</h5>
                                            </div>

                                        </Col>
                                    <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Mobile Number</p>
                                                <h5>{profiletabApi.localguardianinfo.mobilenumber}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="infopopulatebox">
                                                <p>Relation</p>
                                                <h5>{profiletabApi.localguardianinfo.relation}</h5>
                                            </div>

                                        </Col>
    </>
  )
}

export default adf