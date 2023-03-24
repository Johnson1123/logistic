import React from 'react'
import './PassengerDB.scss'

import { useSelector } from 'react-redux'
import DBNav from '../../component/DBNav/DBNav'
import Tabcontrollers from '../../component/DriverDB/Tabcontrollers/Tabcontrollers'
import MobileControllers from '../../component/MobileControllers/MobileControllers'
import Dashboard from '../../component/PassengerDB/Dashboard/Dashboard'
import Trip from '../../component/PassengerDB/Dashboard/Trip'
import Profile from '../../component/PassengerDB/Profile/Profile'
import ProfileSetting from '../../component/PassengerDB/Profile/ProfileSetting/ProfileSetting'
import PaymentSetting from '../../component/PassengerDB/PaymentSettings/PaymentSettings'
import AddCard from '../../component/PassengerDB/AddCard/AddCard'
import GetHelp from '../../component/PassengerDB/GetHelp/GetHelp'
import AboutXcab from '../../component/PassengerDB/GetHelp/HelpButton/AboutXcab/AboutXcab'
import AppFeatures from '../../component/PassengerDB/GetHelp/HelpButton/AppFeatures/AppFeatures'
import AccountData from '../../component/PassengerDB/GetHelp/HelpButton/AccoutData/AccoutData'
import PaymentPricing from '../../component/PassengerDB/GetHelp/HelpButton/PaymentPricing/PaymentPricing'
import UsingRide from '../../component/PassengerDB/GetHelp/HelpButton/UsingApp/UsingRide'

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
                {/* <Dashboard /> */}
                {/* <Trip /> */}
                {/* <Profile /> */}
                {/* <ProfileSetting /> */}
                {/* <PaymentSetting /> */}
                {/* <AddCard /> */}
                {/* <GetHelp  /> */}
                {/* <AboutXcab /> */}
                {/* <AppFeatures /> */}
                {/* <AccountData /> */}
                {/* <PaymentPricing /> */}
                <UsingRide />
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default PassengerDB