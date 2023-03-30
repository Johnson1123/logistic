import React from 'react'
import { drivers } from '../../../content/Fleet'
import Application from './Application/Application'
import Drivers from './Drivers/Drivers'
import './DriversList.scss'
import Fleet from './Fleet/Fleet'

function DriversList() {
  return (
    <div className='DriversList'>
        <div className="driverList__wrapper">
            <p className="title">Drivers</p>
            <p className="p-text">Here you see overview of your drivers.</p>
            <div className="driverList__content">
                <div className="controls__container">
                    {
                        ['Drivers', 'Fleet drivers', 'Applications'].map((item, index) => {
                            return(
                            <button className="control-btn active" key={index}>{item}</button>
                            )
                        })
                    }
                </div>
                {/* <Drivers /> */}
                {/* <Fleet /> */}
                <Application />
            </div>
        </div>
        
    </div>
  )
}

export default DriversList