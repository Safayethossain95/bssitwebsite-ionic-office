import React,{useState} from 'react'
import Dropdown from 'react-dropdown';
import {BsChevronDown} from 'react-icons/bs'
import { Table } from 'react-bootstrap';
import Dropdown2 from './subComponents/CustomSubComponents/Dropdown2';
const SchoolTimingComponentmb = () => {
    const [drpsectionselect,setdrpsection] = useState("")
    const options = [
        'All Sections','Junior Section', 'Middle Section', 'Senior Section'
      ];
    const defaultOption = "All Sections";
      
      const dropdownvalue=(e)=>{
        console.log(e.value)
        setdrpsection(e.value)
      }
      const optionssection = [
        {
            opt:'All Sections'
        },
        {
            opt:'Junior Section'
        },
        {
            opt:'Middle Section'
        },
        {
            opt:'Senior Section'
        },
      ];

      const drpfunctionsection=(mysectionval)=>{
        setdrpsection(mysectionval)
    }
  return (
    <>
        <div className="mobilecontainer">
            <div className="heading">
                    <h4>
                        School Timing
                    </h4>
                    <p>
                        Select section to see school timing
                    </p>
            </div>
            <div className="schooltimingdropdown">
                        <div className="dropdownwrapper">
                        <Dropdown2 func={drpfunctionsection} myplaceholder="Select Section" fontsize="12" fontfamily="'Poppins', sans-serif"  options={optionssection}/>
                        </div>
                </div>

                {
            drpsectionselect=='All Sections'?
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Shift</th>                          
                <th>Time</th>                          
                </tr>
                <tr>
                <td>Starter</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Starter</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Playgroup</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Playgroup</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Nursery</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:45 PM</td>                             
                </tr>
                <tr>
                <td>Nursery</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                             
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                           
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                          
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                           
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                           
                </tr>
                <tr>
                <td>Class 1</td>
                <td>Morning</td>                            
                <td>To</td>                           
                </tr>
                <tr>
                <td>Class 2</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 3</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 4</td>
                <td>Morning</td>                            
                <td>To</td>                           
                </tr>
                <tr>
                <td>Class 5</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 6</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>Class 7</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>O Level</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Pre- O Level</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                
            </tbody>
            </Table>
            :
            drpsectionselect=='Junior Section'?
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Shift</th>                          
                <th>Time</th>                          
                </tr>
                <tr>
                <td>Starter</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Starter</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Playgroup</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Playgroup</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Nursery</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:45 PM</td>                             
                </tr>
                <tr>
                <td>Nursery</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                             
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                           
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                          
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                           
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                           
                </tr>
                
                
            </tbody>
            </Table>
            :
            drpsectionselect=='Middle Section'?
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Shift</th>                          
                <th>Time</th>                          
                </tr>
                
                <tr>
                <td>Class 1</td>
                <td>Morning</td>                            
                <td>To</td>                           
                </tr>
                <tr>
                <td>Class 2</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 3</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 4</td>
                <td>Morning</td>                            
                <td>To</td>                           
                </tr>
                <tr>
                <td>Class 5</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                
                
            </tbody>
            </Table>
            :
            drpsectionselect=='Senior Section'?
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Shift</th>                          
                <th>Time</th>                          
                </tr>
                <tr>
                <td>Class 6</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>Class 7</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>O Level</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Pre- O Level</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                
            </tbody>
            </Table>
            :
            <Table className='juniortable'>
                        
            <tbody>
                <tr>
                <th>Class</th>
                <th>Shift</th>                          
                <th>Time</th>                          
                </tr>
                <tr>
                <td>Starter</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Starter</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Playgroup</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Playgroup</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                            
                </tr>
                <tr>
                <td>Nursery</td>
                <td>Day</td>                            
                <td>8:15 AM to 1:45 PM</td>                             
                </tr>
                <tr>
                <td>Nursery</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                             
                </tr>
                <tr>
                <td>Junior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:40 PM</td>                           
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                          
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                           
                </tr>
                <tr>
                <td>Senior KG</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                           
                </tr>
                <tr>
                <td>Class 1</td>
                <td>Morning</td>                            
                <td>To</td>                           
                </tr>
                <tr>
                <td>Class 2</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 3</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 4</td>
                <td>Morning</td>                            
                <td>To</td>                           
                </tr>
                <tr>
                <td>Class 5</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Class 6</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>Class 7</td>
                <td>Morning</td>                            
                <td>8:15 AM to 1:45 PM</td>                            
                </tr>
                <tr>
                <td>O Level</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                <tr>
                <td>Pre- O Level</td>
                <td>Morning</td>                            
                <td>To</td>                            
                </tr>
                
            </tbody>
            </Table>

        }
        <div className="schooltiminglowerparttext">
            <h5>Attandance Information</h5>
            <ul>
                    <li>
                        <p>
                            Student's Should come to school in time
                        </p>
                    </li>
                    <li>
                        <p>
                        Student's will not be allowed to enter school after 08:30 am [Morning Shift] or 11:30 am [Day Shift]
                        </p>

                    </li>
                    <li>
                        <p>
                        Student's will not be allowed to enter school if He/She is late for the third time in a month
                        </p>
                    </li>
                </ul>
        </div>
        
        </div>
    </>
  )
}

export default SchoolTimingComponentmb