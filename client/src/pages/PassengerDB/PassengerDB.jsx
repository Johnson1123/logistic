import React from 'react'
import './PassengerDB.scss'

import { useSelector } from 'react-redux'
import DBNav from '../../component/DBNav/DBNav'
import { Outlet } from 'react-router-dom'
import PassengerController from '../../component/DriverDB/PassengerController/PassengerController'
import PMobileControllers from '../../component/MobileControllers/PMobileControllers'
import UserInfo from '../../component/UserInfo/UserInfo'

function PassengerDB() {
  const menu = useSelector(state => state.toggleReducer.dashboarMenu);
  const user = useSelector(state => state.toggleReducer.user)

  return (
    <div className='PassengerDB'>
        <div className="PassengerDB__wrapper">
            <DBNav />
            { menu && <PMobileControllers />}
            <div className="PassengerDB__content flex">
              <PassengerController />
              <div className="tab__container">
                 <Outlet />
              </div>
            </div>
            {user && <UserInfo />}
        </div>
    </div>
  )
}

export default PassengerDB