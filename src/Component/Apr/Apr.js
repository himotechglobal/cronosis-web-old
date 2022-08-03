import React from 'react'
import icon8 from '../../Images/icon8.png'
import icon9 from '../../Images/icon9.png'
import icon1 from '../../Images/icon1.png'
import icon2 from '../../Images/icon2.png'
import icon10 from '../../Images/icon10.png'

const Apr = (props) => {
  return (
    <>
      <div key={props.Aprdata.id}>
        <div className="apr-wrapper">
        <div className="apr-img">
            {props.Aprdata.imagem &&   <img src={icon8} alt="" />}
            {props.Aprdata.icon9 &&   <img src={icon9} alt="" />}
            {props.Aprdata.icon1 &&   <img src={icon1} alt="" className='ps-3'/>}
            {props.Aprdata.icon2 &&   <img src={icon2} alt="" className='iconleft'/>}
            {props.Aprdata.icon10 &&   <img src={icon10} alt="" className='iconleft'/>}
            
            
        </div>
        <div className="apr-text">
            <h1> {props.Aprdata.title2}</h1>
            <p>{props.Aprdata.descm}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Apr