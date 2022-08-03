import React from 'react'
import arrow from '../../../Images/arrow.png'

const Mintbalance = (props) => {
  return (
    <>
       <div key={props.Mintdata.id}>
            <div className="row1">
                <div className="balance">
                <p>{props.Mintdata.desc}</p>
                <p>{props.Mintdata.balance}</p>
                </div>
                <div className="imgicon">
                <img src={props.Mintdata.image} alt=""/>
                <span className='count'>{props.Mintdata.count}</span>
                </div>
            </div>
           <div className="arrow">
           {props.Mintdata.arrow && <img src={arrow} alt="" />}
           </div>
       </div>
    </>
  )
}
export default Mintbalance