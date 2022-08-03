import React from 'react'
import icon11 from '../../Images/icon11.png'
import icon12 from '../../Images/icon12.png'
import icon13 from '../../Images/icon13.png'

const Collateral = (props) => {
  return (
    <>
      <div key={props.Data1.id}>
       <div className="collateral-wrapper">
      <div className="collateral-text">
      <div className="collateral-img">
        {props.Data1.icon11 && <img src={icon11} alt="" className='icon11'/>}
        {props.Data1.icon12 && <img src={icon12} alt="" className='icon12'/>}
        {props.Data1.icon13 && <img src={icon13} alt="" className='icon13'/>}
        </div>
        <div className="title">
        <h1>{props.Data1.title}</h1>
        <p>{props.Data1.desc}</p>
        </div>
      </div>
        <div className="percent">
            <p>{props.Data1.percent}</p>
        </div>
       </div>
      </div>
    </>
  )
}

export default Collateral
