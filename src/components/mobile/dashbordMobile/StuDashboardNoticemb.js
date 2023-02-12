import React from 'react'
import { noticeData,noticeGreetingsdaydate,noticeDataGreetings } from '../../../utils/DashboardApi/StudentDashboardApi'
const StuDashboardNoticemb = () => {
    function replaceWithBr() {
        return noticeDataGreetings.replace(/\n/g, "<br />")
        }
  return (
    <>
        <div className="bodycolorbg">
            <div className="mobilecontainer">
                <div className="heading headingofdocumenttab">
                <h3>Notice</h3>
                </div>

                <div className="noticetabbox">
                        <div className="noticetabboxbarbig ">
                            <div className="dateofnoticebox">
                                <h5 className="d-none">{noticeGreetingsdaydate.day}<br/>{noticeGreetingsdaydate.year}</h5>
                            </div>
                            <h3 dangerouslySetInnerHTML={{__html: replaceWithBr()}} ></h3>
                        </div>
                    {
                        noticeData.map((item,key)=>{
                            return(
                                    <div key={key} className="noticetabboxbar">
                                        <div className="dateofnoticebox">
                                            <h5 className="d-none">{item.publishDateDayMonth}<br/>{item.publishDateYear}</h5>
                                        </div>
                                        <h3>{item.noticeheading} - Published : <span> {item.publishDate}</span></h3>
                                    </div>

                            )
                        })
                    }
                    </div>
            </div>
        </div>
    </>
  )
}

export default StuDashboardNoticemb