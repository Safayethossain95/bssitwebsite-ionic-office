import React,{useState} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'

const StuDashboardDocumenttab = () => {
    const Optiondoctypeprevdoc = [
        'All','Home Work','Class Work','Exam Paper','Assessment','Syllabus'
      ];
      const Optionroutinetype = [
        'week','Month','Year'
      ];
      const defaultOptiondoctypeprevdoc = Optiondoctypeprevdoc[0];
      const defaultOptionroutinetype = Optionroutinetype[0];
      
      const [doctypeprevdoc,setdoctypeprevdoc] = useState("")
    
    const dropdownvaluedovtypeprevdoc=(e)=>{
        // console.log(e.value)
        setdoctypeprevdoc(e.value)
        console.log(drpday)
      }
      const [drpday,setDrpday] = useState("")
    
    const dropdownvalue=(e)=>{
        // console.log(e.value)
        setDrpday(e.value)
        console.log(drpday)
      }
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
          <div className="preveousdocumnets">
                    <h4>Previous Documents</h4>
                    <div className="docselects">
                        <Row>
                            <Col xs={12}>
                                <div className="dropdownwrapper docseletssingle">
                                <Dropdown className='filterdropone' options={Optiondoctypeprevdoc} onChange={(e)=>dropdownvaluedovtypeprevdoc(e)} value={defaultOptiondoctypeprevdoc} />
                                <BsChevronDown/>
                                </div>
                            </Col>
                            <Col xs={6} className="pdrightcol5">
                            <input type="date" />
                            </Col>
                            <Col xs={6} className="pdleftcol5">
                            <input type="date" />
                            </Col>
                        </Row>
                        
                        
                    </div>
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