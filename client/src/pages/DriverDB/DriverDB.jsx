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

function DriverDB() {
  return (
    <div className='DriverDB'>
        <div className="DriverDB__wrapper">
            <DBNav />
            <div className="DriverDB__content">
             <Tabcontrollers />
             {/* <FirstTab /> */}
             {/* <SecondTab /> */}
             {/* <Myride /> */}
             {/* <Mydocument /> */}
             {/* <Vehicle /> */}
             {/* <RiderInvoice /> */}
             {/* <Invoice /> */}
             {/* <BalanceReport /> */}
             {/* <TaxReport /> */}
             {/* <Payout /> */}
             <Setting />
            </div>
        </div>
    </div>
  )
}

export default DriverDB