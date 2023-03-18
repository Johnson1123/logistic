import React from 'react'
import { bussiness } from '../../../../content/bussiness'
import './BalanceReport.scss'

function BalanceReport() {
  return (
    <div className='BalanceReport dbTab'>
        <div className="balanceReport__wrapper">
            <h4 className="title">Balance Reports</h4>
            <p className="small-title">Here you see list of balance reports for recent weeks.</p>
            <div className="pagination"></div>
            <div className="balance__con">
                <div className="balance__header flex box-shadow">
                    <p className="bold-text col-1">Period</p>
                    <p className="bold-text col-2">PDF</p>
                </div>
                <div className="reports__box-con">
                    {
                        bussiness.map((report, index) => {
                            return (
                                <div className="report__box flex" key={index}>
                                    <p className="p-text col-1 fw-500">{report.period}</p>
                                    <p className="p-text col-2 pdf fw-700">{report.format}</p>
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

export default BalanceReport