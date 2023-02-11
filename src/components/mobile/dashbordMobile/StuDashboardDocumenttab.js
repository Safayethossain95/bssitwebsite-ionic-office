import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'
const StuDashboardDocumenttab = () => {
  return (
    <>
        <div className="bodycolorbg">
          <div className="mobilecontainer ">
          <div className="heading headingofdocumenttab">
              <h3>Document</h3>
            </div>
          <div className="todaydocuments">
                    <h4>Today Documents</h4>
                    <Row>
                        <Col lg={6}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/1.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Home Work</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /></Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="documenttabsignlebar">
                                    <img src="./assets/images/dashboards/studentDashboard/documentTab/2.png" alt="" />
                                    <div className="documenttabtexts">
                                        <h6>Class Work</h6>
                                        <p>8 files available to download</p>
                                    </div>
                                    <div className="downloadbuttondoctab">
                                        <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /></Button>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/3.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Exam Paper</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /></Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="documenttabsignlebar">
                                    <img src="./assets/images/dashboards/studentDashboard/documentTab/4.png" alt="" />
                                    <div className="documenttabtexts">
                                        <h6>Assessment</h6>
                                        <p>8 files available to download</p>
                                    </div>
                                    <div className="downloadbuttondoctab">
                                        <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /></Button>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} style={{paddingRight:"15px"}}>
                            <div className="documenttabsignlebar">
                                <img src="./assets/images/dashboards/studentDashboard/documentTab/5.png" alt="" />
                                <div className="documenttabtexts">
                                    <h6>Syllabus</h6>
                                    <p>8 files available to download</p>
                                </div>
                                <div className="downloadbuttondoctab">
                                    <Button><img src="./assets/images/dashboards/studentDashboard/documentTab/downloadbtn.png" alt="" /></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
          </div>
          
          </div>
        </div>
    </>
  )
}

export default StuDashboardDocumenttab