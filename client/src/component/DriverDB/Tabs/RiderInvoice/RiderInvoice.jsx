import React from 'react'
import { riderinvoices } from '../../../../content/invoices'
import './RiderInvoice.scss'

function RiderInvoice() {
  return (
    <div className='RiderInvoice dbTab'>
        <div className="RiderInvoice__wrapper">
            <p className="title">Rider Invoices</p>
            <div className="input__con"></div>
            <div className="pagination"></div>
            <div className="files__con">
                <div className="file__header flex box-shadow">
                    <p className="bold-text col-1">Date</p>
                    <p className="bold-text col-2">Pickup address</p>
                    <p className="bold-text col-3">Sum</p>
                    <p className="bold-text col-4">Payment method</p>
                    <p className="bold-text col-5">PDF</p>
                </div>
                <div className="file__box-con">
                    {
                        riderinvoices.map((invoice, index) => {
                            return (
                                <div className="file__box flex">
                                    <p className="p-text col-1">{invoice.date}</p>
                                    <p className="p-text col-2">{invoice.pickUp}</p>
                                    <p className="p-text col-3">${invoice.sum}</p>
                                    <p className="p-text col-4">{invoice.method}</p>
                                    <p className="p-text col-5 pdf fw-700">{invoice.format}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RiderInvoice