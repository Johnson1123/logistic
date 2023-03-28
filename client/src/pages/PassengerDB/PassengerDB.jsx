import React from 'react'
import './PassengerDB.scss'

import { useSelector } from 'react-redux'
import DBNav from '../../component/DBNav/DBNav'
import Tabcontrollers from '../../component/DriverDB/Tabcontrollers/Tabcontrollers'
import MobileControllers from '../../component/MobileControllers/MobileControllers'
import { Outlet } from 'react-router-dom'

function PassengerDB() {
  const menu = useSelector(state => state.toggleReducer.dashboarMenu);
  return (
    <div className='PassengerDB'>
        <div className="PassengerDB__wrapper">
            <DBNav />
            { menu && <MobileControllers />}
            <div className="PassengerDB__content flex">
              <Tabcontrollers />
             <div className="tab__container">
                <Outlet />
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default PassengerDB