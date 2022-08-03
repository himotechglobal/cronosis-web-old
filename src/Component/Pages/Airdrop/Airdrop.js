import React from 'react'
import Header from '../../../Header'
import Footer from '../../Footer'
import airdropicon from '../../../Images/airdropicon.png'
import { Link } from 'react-router-dom'

const Airdrop = () => {
  return (
    <>
      <div className="wrap-2">
        <Header/>
        <div className="airdrop">
          <div className="airdrop-icon">
            <img src={airdropicon} alt="" />
          </div>
          <h1>
          Please connect your wallet
          </h1>
          <p>To see your balance & airdrop, you need to connect your wallet</p>
          <Link to={'/'}>
          <button className='airdrop-btn'>Connect Wallet</button>
          </Link>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Airdrop
