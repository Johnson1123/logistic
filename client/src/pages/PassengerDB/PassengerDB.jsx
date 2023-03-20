import React from 'react'
import { useSelector } from 'react-redux'
import DBNav from '../../component/DBNav/DBNav'
import Tabcontrollers from '../../component/DriverDB/Tabcontrollers/Tabcontrollers'
import FirstTab from '../../component/DriverDB/Tabs/FirstTab/FirstTab'
import MobileControllers from '../../component/MobileControllers/MobileControllers'
import Dashboard from '../../component/PassengerDB/Dashboard/Dashboard'

function PassengerDB() {
  const menu = useSelector(state => state.toggleReducer.dashboarMenu);
  return (
    <div className='PassengerDB'>
        <div className="PassengerDB__wrapper">
            <DBNav />
            { menu && <MobileControllers />}
            <div className="PassengerDB__content">
             <Tabcontrollers />
             <div className="tab__container">
                <Dashboard />
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default PassengerDB