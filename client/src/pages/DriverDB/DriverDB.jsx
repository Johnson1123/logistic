import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


import './DriverDB.scss'
import DBNav from '../../component/DBNav/DBNav'
import Tabcontrollers from '../../component/DriverDB/Tabcontrollers/Tabcontrollers'
import MobileControllers from '../../component/MobileControllers/MobileControllers'


function DriverDB() {
  const menu = useSelector(state => state.toggleReducer.dashboarMenu);
  return (
    <div className='DriverDB'>
        <div className="DriverDB__wrapper">
            <DBNav />
            {menu && <MobileControllers />}
            <div className="DriverDB__content">
             <Tabcontrollers />
             <div className="tab__container">
                <Outlet />
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default DriverDB