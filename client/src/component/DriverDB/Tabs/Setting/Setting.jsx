import React, { useState } from 'react'
import Billing from '../Billing/Billing'
import IssuerInvoice from '../IssuerInvoice/IssuerInvoice'
import PaymentInfo from '../PaymentInfo/PaymentInfo'
import PersonalForm from '../PersonalForm/PersonalForm'
import VehicleDetails from '../VehicleDetails/VehicleDetails'
import './Setting.scss'

function Setting() {
    const [tab, setTab] = useState('Personal')
    const handleTab = (n) => {
        console.log(n)
      return (
            setTab(n)
      )
    }
  return (
    <div className='Setting dbTab'>
        <div className="setting__wrapper">
            <p className="title">Settings</p>
            <div className="tabs__con flex">
                {
                    ['Personal', 'Vehicle details', 'Billing', 'Invoice', 'Payment info'].map((tab, index) => {
                        return (
                            <button className="tab-btn" key={index} onClick={() => handleTab(tab)}>{tab}</button>
                        )
                    })
                }
                
            </div>
            <div className="tbas__container">
                {tab === 'Personal' && <PersonalForm />}
                {tab === 'Vehicle details' && <VehicleDetails />}
                {tab === 'Billing' && <Billing />}
                {tab === 'Invoice' && <IssuerInvoice />}
                {tab === 'Payment info' && <PaymentInfo />}
            </div>
        </div>
    </div>
  )
}

export default Setting