import React from 'react'

const adf = () => {
  return (
    <>
   {
                                        drpday=="Saturday"?
                                        periodsubjectdata.saturday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Sunday"?
                                        periodsubjectdata.sunday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        :
                                        
                                        drpday=="Monday"?
                                        periodsubjectdata.monday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        :
                                        drpday=="Tuesday"?
                                        periodsubjectdata.tuesday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Wednesday"?
                                        periodsubjectdata.wednesday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Thursday"?
                                        periodsubjectdata.thursday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        drpday=="Friday"?
                                        periodsubjectdata.friday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        periodsubjectdata.saturday.map((item,key)=>{
                                            return(
                                                <tr>
                                                    <td>{item.periodnumber} Period </td>
                                                    <td>{item.class}</td>
                                                    <td>{item.section}</td>
                                                </tr>
                                            )
                                        })
                                        
                                    }
                                
    </>
  )
}

export default adf