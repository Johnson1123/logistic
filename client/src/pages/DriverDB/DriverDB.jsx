import React from 'react'
import './DriverDB.scss'
import DBNav from '../../component/DBNav/DBNav'
import Tabcontrollers from '../../component/DriverDB/Tabcontrollers/Tabcontrollers'
import FirstTab from '../../component/DriverDB/Tabs/FirstTab/FirstTab'
import SecondTab from '../../component/DriverDB/Tabs/SecondTab/SecondTab'
import Myride from '../../component/DriverDB/Tabs/Myride/Myride'

function DriverDB() {
  return (
    <div className='DriverDB'>
        <div className="DriverDB__wrapper">
            <DBNav />
            <div className="DriverDB__content">
             <Tabcontrollers />
             {/* <FirstTab /> */}
             {/* <SecondTab /> */}
             <Myride />
            </div>
        </div>
    </div>
  )
}

export default DriverDB