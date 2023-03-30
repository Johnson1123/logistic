import React from 'react'
import Application from './Application/Application'
import Vehicle from './Vehicle/Vehicle'
import './Vehicles.scss'

function Vehicles() {
  return (
    <div className='Vehicles'>
        <div className="Vehicles__wrapper">
            <p className="title">Drivers</p>
            <p className="p-text">Here you see overview of your drivers.</p>
            <div className="Vehicles__content">
                <div className="controls__container">
                    {
                        ['Vehicles', 'Applications'].map((item, index) => {
                            return(
                            <button className="control-btn active" key={index}>{item}</button>
                            )
                        })
                    }
                </div>
                {/* <Vehicle /> */}
                <Application />
            </div>
        </div>
        
    </div>
  )
}

export default Vehicles