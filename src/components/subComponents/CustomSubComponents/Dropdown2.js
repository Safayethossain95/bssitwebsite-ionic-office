import React,{useState} from 'react'
import $ from 'jquery'

const Dropdown2 = (props) => {
    const [show,setShow] = useState(false)
    const [myvariable,setmyvariable] = useState("Select")
    const handleDrp2=()=>{
        console.log("click hoise")
        setShow(!show)
        $('.overlayfordrpdwn').css('display','block');
        $('.overlayfordrpdwn').click(function(){
            setShow(false)
            $('.overlayfordrpdwn').css('display','none');
        })
    }
    const handlevariable=(e)=>{
        setmyvariable(e.target.innerHTML)
        props.func(e.target.innerHTML)
        
        setShow(false)
        $('.overlayfordrpdwn').css('display','none');
    
        
    }
    const handleoverlayhide=()=>{
        setShow(false)
        $('.overlayfordrpdwn').css('display','none');
    }
  return (
    <>
    <div className="wrapperwrap">

    <div className="Dropdown2" onClick={handleDrp2}>
        <p style={{paddingLeft:"10px",lineHeight:"35px",fontSize:`${props.fontsize}`,fontFamily:`${props.fontfamily}`}}>{myvariable}</p>
        <img src="./assets/images/icons/drpdwnicon.png" alt="drpdwnicon" />
    </div>
        <ul onClick={handleoverlayhide} className={show==true?"Dropdown2-menu showme":"Dropdown2-menu"}>
            {
                props.options.map((item,key)=>{
                    return(
                        <li style={{lineHeight:"35px",fontSize:`${props.fontsize}px`,fontFamily:`${props.fontfamily}`}} key={key} onClick={handlevariable}>{item.opt}</li>
                    )
                })
            }
        </ul>
    </div>
    
    </>
  )
}

export default Dropdown2