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
        publishDate:"10-11-2022",
        publishDateDayMonth:"16 JUN",
        publishDateYear:"2023"
    },
    {
        noticeheading:"Holiday notice for Durga Puja & Eid-e- Miladunnabi",
        publishDate:"15-11-2022",
        publishDateDayMonth:"16 JUN",
        publishDateYear:"2023"
    },
    {
        noticeheading:"Holiday notice for Durga Puja & Eid-e- Miladunnabi",
        publishDate:"12-12-2022",
        publishDateDayMonth:"16 JUN",
        publishDateYear:"2023"
    },
    

]
const noticeDataGreetings = "Notice for Play:Diamond-I,  Nursery:Diamond-I, Ruby-I, & pearl-I\n Respected Guardians,\n You are requested to attend a meeting with the AVP on Sunday, 21 August 2022.\n Agenda: Academic, Rules & regulations\n Time	: 10:00 AM to 11:00 AM. Venue	: Campus 4 [13, Larmini Street Wari]\n Your presence will be highly appreciated.\n Regards,\n BSS"
const noticeGreetingsdaydate = {
    day:"16 JUN",
    year:"2023"
}


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



const attendanceData = {
    header:[
        {
            headeritem:"SL"
        },
        {
            headeritem:"Date"
        },
        {
            headeritem:"School Time"
        },
        {
            headeritem:"In Time"
        },
        {
            headeritem:"Out Time"
        },
        {
            headeritem:"Type"
        },
    ],
    innerTableData: [
        
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Early Leave"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Present"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Late"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Early Leave"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Present"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Late"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Early Leave"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Present"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Late"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Early Leave"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Present"
            },
            {
                SL:"01",
                date:"01-01-2023",
                schooltime:"09:10 AM",
                intime:"09:10 AM",
                outtime:"04:30 PM",                                
                type:"Late"
            },
            
           
        
    ]
}

const billInfoData = {
    duepayment:{
        header:[
            {
                headerline:"SL"
            },
            {
                headerline:"Month"
            },
            {
                headerline:"Type"
            },
            {
                headerline:"Last Date"
            },
            {
                headerline:"Due Amount"
            },
        ],
        tabledata:[
            {
                sl:"01",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"02",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"03",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"04",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"05",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"05",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"05",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
            {
                sl:"05",
                month:"DEC-22",
                type:"Tuition Fee",
                lastdate:"Sat, 31 Dec, 2022",
                dueamount:10307.00
            },
        ]
    },
    previouspayment:{
        header:[
            {
                headerline:"SL"
            },
            {
                headerline:"Bill Date"
            },
            {
                headerline:"Period Name"
            },
            {
                headerline:"Type"
            },
            {
                headerline:"Payable Amount"
            },
            {
                headerline:"Received Amount"
            },
        ],
        tabledata:[
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
            {
                sl:"01",
                billdate:"DEC-22",
                periodname:"Tuition Fee",
                type:"Sat, 31 Dec, 2022",
                payableamount:10307.00,
                receivedamount:10307.00
            },
           
        ],

    }
}

const leavereqstatusData = {
    heading:[
        {
            headline:"Type"
        },
        {
            headline:"reason"
        },
        {
            headline:"From"
        },
        {
            headline:"To"
        },
        {
            headline:"Duration"
        },
        {
            headline:"Status"
        },
    ],
    innnerData: [
        {
            type:"Early",
            reason:"Fever and Flu",
            from:"01-01-2023 (07:00 PM)",
            to:"01-01-2023 (07:00 PM)",
            duration:"7 Days 12 Hours",
            status:"Accepted"
        },
        {
            type:"Early",
            reason:"Fever and Flu",
            from:"01-01-2023 (07:00 PM)",
            to:"01-01-2023 (07:00 PM)",
            duration:"7 Days 12 Hours",
            status:"Pending"
        },
    ]
}

const routinetabData = {
    classRoutine:{
        heading:[
            {
                headline:"Day"
            },
            {
                headline:"Period"
            },
            {
                headline:"Subjects"
            },
            {
                headline:"Time"
            },
            {
                headline:"Download"
            }
        ],
        tableData:[
            {
                day:"Saturday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
            {
                day:"Sunday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
            {
                day:"Monday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
            {
                day:"Tuesday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
            {
                day:"Wednesday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
            {
                day:"Thursday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
            {
                day:"Friday",
                period:[
                    {
                        perioditem:"1st"
                    },
                    {
                        perioditem:"2nd"
                    },
                    {
                        perioditem:"3rd"
                    },
                    {
                        perioditem:"4th"
                    },
                    {
                        perioditem:"5th"
                    },
                    {
                        perioditem:"6th"
                    },
                    {
                        perioditem:"7th"
                    },
                ],
                subjects:[
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                    {
                        subjectname:"Moral Science"
                    },
                ],
                time:[
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                    {
                        timename:"08:30 AM - 09:10 AM"
                    },
                ],
                download:""
            },
        ]
    }
}


const StudentDashboardApi = () => {
  return (
    <>

    </>
  )
}
export {prevPaymentHistory,leavereqstatusData,billInfoData,paymentHistoryDue,noticeData,documentData,attendenceApi,periodsubjectdata,noticeGreetingsdaydate,noticeDataGreetings,routinetabData,attendanceData}

export default StudentDashboardApi