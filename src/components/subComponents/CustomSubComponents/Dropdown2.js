import React,{useState} from 'react'
import $ from 'jquery'

const Dropdown2 = (props) => {
    const [show,setShow] = useState(false)
    const handleDrp2=()=>{
        console.log("click hoise")
        setShow(!show)
        $('.overlayfordrpdwn').css('display','block');
        $('.overlayfordrpdwn').click(function(){
            setShow(false)
            $('.overlayfordrpdwn').css('display','none');
        })
    }
  return (
    <div className="Dropdown2" onClick={handleDrp2}>
        <p style={{fontSize:`${props.fontsize}`,fontFamily:`${props.fontfamily}`}}>Hello</p>
        <img src="./assets/images/icons/drpdwnicon.png" alt="drpdwnicon" />
        <ul  className={show==true?"Dropdown2-menu showme":"Dropdown2-menu"}>
            {
                props.options.map((item,key)=>{
                    return(
                        <li key={key}>{item.opt}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Dropdown2