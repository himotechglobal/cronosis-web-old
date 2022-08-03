import React from 'react'
import arrow from '../../Images/arrow.png'

const Modalbalance = (props) => {
  return (
    <>
       <div key={props.Modaldata.id}>
            <div className="row1 row2">
                <div className="balance">
                <p>{props.Modaldata.desc}</p>
                <p>{props.Modaldata.balance}</p>
                </div>
                <div className="imgicon">
                <img src={props.Modaldata.image} alt=""/>
                <span className='count'>{props.Modaldata.count}</span>
                </div>
            </div>
           <div className="arrow">
           {props.Modaldata.arrow && <img src={arrow} alt="" />}
           </div>
       </div>
    </>
  )
}
export default Modalbalance