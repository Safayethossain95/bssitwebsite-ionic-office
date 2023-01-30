import React,{useState} from 'react'

const Dropdown2 = (props) => {
    const [show,setShow] = useState(false)
    const handleDrp2=()=>{
        console.log("click hoise")
        setShow(!show)
    }
  return (
    <div className="Dropdown2" onClick={handleDrp2}>
        <img src="./assets/images/icons/drpdwnicon.png" alt="drpdwnicon" />
        <ul  className={show==true?"Dropdown2-menu showme":"Dropdown2-menu"}>
            {
                props.options.map((item,key)=>{
                    return(
                        <li>{item.opt}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Dropdown2