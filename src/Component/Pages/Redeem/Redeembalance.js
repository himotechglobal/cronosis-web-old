import React from 'react'
import arrow from '../../../Images/arrow.png'

const Redeembalance = (props) => {
  return (
    <>
       <div key={props.Redeemdata.id}>
            <div className="row1">
                <div className="balance">
                <p>{props.Redeemdata.desc}</p>
                <p>{props.Redeemdata.balance}</p>
                </div>
                <div className="imgicon">
                <img src={props.Redeemdata.image} alt=""/>
                <span className='count'>{props.Redeemdata.count}</span>
                </div>
            </div>
           <div className="arrow">
           {props.Redeemdata.arrow && <img src={arrow} alt="" />}
           </div>
       </div>
    </>
  )
}

export default Redeembalance
