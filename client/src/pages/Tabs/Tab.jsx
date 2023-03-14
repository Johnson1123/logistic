import React from 'react'
import { Link } from 'react-router-dom'
import Bgnav from '../../component/BgNav/Bgnav'
import FirstTab from '../../component/Tabs/FirstTab/FirstTab'
import './Tab.scss'

function Tab() {
  return (
    <div className='tab flex'>
        <div className="tab__wrapper flex">
            <Bgnav />
            <p className="form-title tab-title"><span>XLCAB</span>TRANSFER</p>
            <div className="tab__controllers flex">
                <div className="tab-controller"></div>
                <div className="tab-controller"></div>
                <div className="tab-controller"></div>
                <div className="tab-controller"></div>
            </div>
            <FirstTab />

            <Link to='/helps' className='form-helps'/>
        </div>
        
    </div>
  )
}

export default Tab