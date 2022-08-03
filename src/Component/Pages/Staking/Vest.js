import React from 'react'
import iconbtn from '../../../Images/iconbtn.png'
const Vest = () => {
  return (
    <>
       <div className="staking2">
        <div className="vest">
            <h2>CROS Vests</h2>
            <p>Total:  -  CROS</p>
        </div>
        <div className="found">
            <img src={iconbtn} alt=""/>
            <p>No Vesting Found</p>
        </div>
       </div>
    </>
  )
}

export default Vest