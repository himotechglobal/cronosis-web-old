import React from 'react'
import Header from '../../../Header'
import Footer from '../../Footer'
import Accordian from './Accordian'


const Farms = () => {
  return (
    <>
     <div className="wrap-2">
        <Header/>
        <div className="container">
            <h5 className='farm_heading'>FARMS</h5>
           <Accordian/>
        </div>
        <Footer/>
     </div> 
    </>
  )
}

export default Farms
