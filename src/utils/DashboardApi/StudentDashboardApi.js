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
const noticeDataGreetings = "Notice for Play:Diamond-I,  Nursery:Diamond-I, Ruby-I, & pearl-I\n Respected Guardians,\n You are requested to attend a meeting with the AVP on Sunday, 21 August 2022.\n Agenda: Academic, Rules & regulations\n Time	: 10:00 AM to 11:00 AM. Venue	: Campus 4 [13, Larmini Street Wari]\n Your presence will be highly appreciated.\n Regards,\n BSS"
    


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

const routineTabData = {
    header:[
        {
            headeritem:"Period"
        },
        {
            headeritem:"All Subjects",
            img:"./assets/images/icons/drpdwnicon.png"
        },
        {
            headeritem:"Day"
        },
        {
            headeritem:"Date"
        },
        {
            headeritem:"Time"
        },
        {
            headeritem:"Class No"
        },
        {
            headeritem:"Document"
        },
    ],
    innerTableData : [
        {
            period:"01",
            Allsubjects:"Moral Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"02",
            Allsubjects:"Social Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"03",
            Allsubjects:"Islam",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"04",
            Allsubjects:"Music",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"01",
            Allsubjects:"Moral Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"02",
            Allsubjects:"Social Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"03",
            Allsubjects:"Islam",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"04",
            Allsubjects:"Music",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"01",
            Allsubjects:"Moral Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"02",
            Allsubjects:"Social Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"03",
            Allsubjects:"Islam",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"04",
            Allsubjects:"Music",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"01",
            Allsubjects:"Moral Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"02",
            Allsubjects:"Social Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"03",
            Allsubjects:"Islam",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"04",
            Allsubjects:"Music",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"01",
            Allsubjects:"Moral Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"02",
            Allsubjects:"Social Science",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"03",
            Allsubjects:"Islam",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
        {
            period:"04",
            Allsubjects:"Music",
            day:"Saturday",
            date:"01-01-2023",
            time:"10:00 AM",
            classno:2003,
            document:""
        },
    ]
}

const attendanceData = {
    header:[
        {
            headeritem:"SL"
        },
        {
            headeritem:"Date"
        },
        {
            headeritem:"In Time"
        },
        {
            headeritem:"Out Time"
        },
        {
            headeritem:"Late Time"
        },
        {
            headeritem:"Type"
        },
    ],
    innerTableData: [
        
            {
                SL:"01",
                date:"01-01-2023",
                intime:"09:10 AM",
                outtime:"04:30 PM",
                time:"10:00 AM",
                latetime:"---",
                Type:"absent"
            },
            {
                SL:"02",
                date:"01-01-2023",
                intime:"09:10 AM",
                outtime:"04:30 PM",
                time:"10:00 AM",
                latetime:"---",
                Type:"absent"
            },
            {
                SL:"03",
                date:"01-01-2023",
                intime:"09:10 AM",
                outtime:"04:30 PM",
                time:"10:00 AM",
                latetime:"---",
                Type:"absent"
            },
            {
                SL:"04",
                date:"01-01-2023",
                intime:"09:10 AM",
                outtime:"04:30 PM",
                time:"10:00 AM",
                latetime:"---",
                Type:"absent"
            },
            {
                SL:"05",
                date:"01-01-2023",
                intime:"09:10 AM",
                outtime:"04:30 PM",
                time:"10:00 AM",
                latetime:"---",
                Type:"absent"
            },
        
    ]
}

const StudentDashboardApi = () => {
  return (
    <>

    </>
  )
}
export {prevPaymentHistory,paymentHistoryDue,noticeData,documentData,attendenceApi,periodsubjectdata,noticeDataGreetings,routineTabData,attendanceData}

export default StudentDashboardApi