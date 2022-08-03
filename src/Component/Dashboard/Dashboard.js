import React from 'react'
import Header from '../../Header'
import Apr from '../Apr/Apr'
import Data from '../Cros/Data'
import Cros from '../Cros/Cros'
import Aprdata from '../Apr/Aprdata'
import Collateral from '../Collateral/Collateral'
import Data1 from '../Collateral/Data1'
import Footer from '../Footer'

const Dashboard = () => {
  return (
    <>
     <div className="wrap-2">
     <Header/>
     <div className="dashboard">
        <div className="container custom">
            <div className="heading">
            <h1 className='dash-h1'>Welcome to <strong>Cronosis</strong></h1>
            <p className='dash-p'>Fractional-Algorithmic Synthetic Token pegged to the value of 1 FTM on Fantom Opera</p>
            </div>
            <div className="value">
                <p>Total Value Locked <span className='total-value'>$666,666,666</span></p>
            </div>
            <div className="row">
                {
                  Data.map((element) => {
                    return (
                      <div className="col-md-6 width">
                      <Cros Data={element}/>
                      </div>
                    )
                  }) 
                }
            </div>

            <div className="row">
            {
              Aprdata.map((option) => {
                    return (
                      <div className="col-md-3 col-sm-6 width1">
                      <Apr Aprdata={option}/>
                      </div>
                    )
                  }) 
                }
            </div>
            <div className="row">
            {
              Data1.map((option1) => {
                    return (
                      <div className="col-md-6 width">
                      <Collateral Data1={option1}/>
                      </div>
                    )
                  }) 
                }
            </div>
        </div>
     </div>
            <Footer/>
     </div>
    </>
  )
}
export default Dashboard
