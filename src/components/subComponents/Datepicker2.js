import React from 'react'
import $ from 'jquery';
import '../../../node_modules/Datepicker.js/dist/datepicker'
import '../../../node_modules/Datepicker.js/dist/css/datepicker.material.css'
const Datepicker2 = () => {

   var hello = new Datepicker('#datepicker');
  return (
    <>
         <input type="text" id="datepicker"/>
    </>
  )
}

export default Datepicker2