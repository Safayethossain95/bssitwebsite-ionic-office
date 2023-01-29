import React from 'react'
import { MdAmpStories } from 'react-icons/md'


const documentData = {
    homework:{
        filetype:"Home Work",
        numberOfFiles:8,
       
    },
    classwork:{
        filetype:"Class Work",
        numberOfFiles:8,
        
    },
    assesment:{
        filetype:"Assesment",
        numberOfFiles:0,
        
    },
    exampaper:{
        filetype:"Exam Paper",
        numberOfFiles:8,
        
    },
    syllabus:{
        filetype:"Syllabus",
        numberOfFiles:8,
        
    },
   

}

const noticeData = [
    {
        noticeheading:"Holiday notice for Durga Puja & Eid-e- Miladunnabi",
        publishDate:"10-11-2022"
    },
    {
        noticeheading:"Holiday notice for Durga Puja & Eid-e- Miladunnabi",
        publishDate:"15-11-2022"
    },
    {
        noticeheading:"Holiday notice for Durga Puja & Eid-e- Miladunnabi",
        publishDate:"12-12-2022"
    },
    

]

const attendenceApi = {
    firstSemester:{
        absent:35.6,
        present:34.1,
        late:30.3
    },
    secondSemester:{
        absent:69.1,
        present:20.4,
        late:10.5
    }
    
}

const periodsubjectdata = {
   
        saturday:[
            {
                periodnumber:"1st",
                subject:"ICT"
            },
            {
                periodnumber:"2nd",
                subject:"MATH"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],
        sunday:[
            {
                periodnumber:"1st",
                subject:"MATH"
            },
            {
                periodnumber:"2nd",
                subject:"ICT"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],
        monday:[
            {
                periodnumber:"1st",
                subject:"MATH"
            },
            {
                periodnumber:"2nd",
                subject:"ICT"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],
        tuesday:[
            {
                periodnumber:"1st",
                subject:"MATH"
            },
            {
                periodnumber:"2nd",
                subject:"ICT"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],
        wednesday:[
            {
                periodnumber:"1st",
                subject:"MATH"
            },
            {
                periodnumber:"2nd",
                subject:"ICT"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],
        thursday:[
            {
                periodnumber:"1st",
                subject:"MATH"
            },
            {
                periodnumber:"2nd",
                subject:"ICT"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],
        friday:[
            {
                periodnumber:"1st",
                subject:"MATH"
            },
            {
                periodnumber:"2nd",
                subject:"ICT"        
            },
            {
                periodnumber:"3rd",
                subject:"ENG LANG"
            },
            {
                periodnumber:"4th",
                subject:"ENG LIT"
            },
            {
                periodnumber:"5th",
                subject:"SCL"
            },
            {
                periodnumber:"6th",
                subject:"ISLAM"
            },
            {
                periodnumber:"7th",
                subject:"BENGALI"
            },
        ],

    

    }

const paymentHistoryDue = {
    dueAmount:61450,
    dueformonths:5

}
const prevPaymentHistory = [
    {
        month:"Dec",
        date:"22/12/2022",
        amount:32080
    },
    {
        month:"Nov",
        date:"22/11/2022",
        amount:32080
    },
    {
        month:"Oct",
        date:"22/10/2022",
        amount:32080
    },
    {
        month:"Oct",
        date:"22/10/2022",
        amount:32080
    },
    {
        month:"Oct",
        date:"22/10/2022",
        amount:32080
    },
    {
        month:"Oct",
        date:"22/10/2022",
        amount:32080
    },
    {
        month:"Oct",
        date:"22/10/2022",
        amount:32080
    },
    
]

const StudentDashboardApi = () => {
  return (
    <>

    </>
  )
}
export {prevPaymentHistory,paymentHistoryDue,noticeData,documentData,attendenceApi,periodsubjectdata}

export default StudentDashboardApi