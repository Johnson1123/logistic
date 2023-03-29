import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


import './DriverDB.scss'
import DBNav from '../../component/DBNav/DBNav'
import DriverController from '../../component/DriverController/DriverController'
import DBMobileControllers from '../../component/MobileControllers/DBMobileControllers'


function DriverDB() {
  const menu = useSelector(state => state.toggleReducer.dashboarMenu);
  return (
    <div className='DriverDB'>
        <div className="DriverDB__wrapper">
            <DBNav />
            {menu && <DBMobileControllers />}
            <div className="DriverDB__content">
             <DriverController />
             <div className="tab__container">
                <Outlet />
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default DriverDB