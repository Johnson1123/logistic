import React from 'react'
import './DriverDB.scss'
import DBNav from '../../component/DBNav/DBNav'
import Tabcontrollers from '../../component/DriverDB/Tabcontrollers/Tabcontrollers'
import FirstTab from '../../component/DriverDB/Tabs/FirstTab/FirstTab'
import SecondTab from '../../component/DriverDB/Tabs/SecondTab/SecondTab'
import Myride from '../../component/DriverDB/Tabs/Myride/Myride'
import Mydocument from '../../component/DriverDB/Tabs/Mydocument/Mydocument'
import Vehicle from '../../component/DriverDB/Tabs/Vehicle/Vehicle'
import RiderInvoice from '../../component/DriverDB/Tabs/RiderInvoice/RiderInvoice'
import Invoice from '../../component/DriverDB/Tabs/Invoice/Invoice'
import BalanceReport from '../../component/DriverDB/Tabs/BalanceReport/BalanceReport'
import TaxReport from '../../component/DriverDB/Tabs/TaxReport/TaxReport'
import Payout from '../../component/DriverDB/Tabs/Payout/Payout'
import Setting from '../../component/DriverDB/Tabs/Setting/Setting'
import { useSelector } from 'react-redux'

function DriverDB() {
  const tab = useSelector(state => state.toggleReducer.dashboardToggle);
  console.log(tab);
  return (
    <div className='DriverDB'>
        <div className="DriverDB__wrapper">
            <DBNav />
            <div className="DriverDB__content">
              
             <Tabcontrollers />
             <div className="tab__container">
                {tab === 'Dashboard' && <FirstTab /> }
                {tab === 'Profile' && <SecondTab />}
                {tab === 'FaUserAlt' && <Myride />}
                {tab === 'Messages' && <Mydocument />}
                {tab === '' && <Vehicle />}
                {tab === 'Rider Invoices' && <RiderInvoice />}
                {tab === 'Invoices' && <Invoice />}
                {tab === 'Balance Reports' && <BalanceReport />}
                {tab === 'Tax Reports' && <TaxReport />}
                {tab === 'Payout' && <Payout />}
                {tab === 'Setting' && <Setting />}
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default DriverDB