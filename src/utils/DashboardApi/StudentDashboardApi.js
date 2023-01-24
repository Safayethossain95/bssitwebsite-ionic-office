import React from 'react'


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
        noticeheading:"Holiday notice for Eid ul Fitr (I-VIII)",
        publishDate:"15-11-2022"
    },
    {
        noticeheading:"Holiday notice for Maghi Purnima (V-VII)",
        publishDate:"12-12-2022"
    },
    {
        noticeheading:"Holiday notice for Eid ul Ajha (X-XII)",
        publishDate:"13-07-2022"
    },
    {
        noticeheading:"Holiday notice for Eid ul Ajha (X-XII)",
        publishDate:"23-07-2022"
    },

]

const attendenceApi = {
    firstSemester:{
        present:64.4,
        absent:35.6
    },
    secondSemester:{
        present:30.9,
        absent:69.1
    }
    
}

const periodsubjectdata = [
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

]

const StudentDashboardApi = () => {
  return (
    <>

    </>
  )
}
export {noticeData,documentData,attendenceApi,periodsubjectdata}

export default StudentDashboardApi