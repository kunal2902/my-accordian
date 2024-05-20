import React, { useState } from 'react'
// import './MyAccordian.css'
import './App.css'

const MyAccordian = (props) => {
  const [Btn,setBtn] = useState(false)
  const clickable=()=>{
      setBtn(true)
      setBtn(!Btn)
  }
  return (
    <>
      <div className="content">
        <p className='icon'onClick={clickable}>{Btn? "-":"+" }</p>
        <p className='para'>{props.question}</p>
      </div>
      { Btn ? <p className='answer' style={{fontSize:"15px"}}>{props.answer}</p> : ""}
    </>
  )
}

export default MyAccordian