import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FirstTab from '../../InternaltionalP/Tabs/FirstTab/FirstTab'
import FouthTab from '../../InternaltionalP/Tabs/FourthTab/FourthTab'
import SecondTab from '../../InternaltionalP/Tabs/SecondTab/SecondTab'
import ThirdTab from '../../InternaltionalP/Tabs/ThirdTab/ThirdTab'
import './InterP.scss'

function InterP() {
  const [tab, setTab] = useState(1)
  const handleTab = (n) => {
      return (
        setTab(n)
      )
  }
  return (
    <div className='InterP flex'>
        <div className="tab__wrapper flex">
            <p className="form-title tab-title"><span>XLCAB</span>TRANSFER</p>
            <div className="tab__controllers flex">
                <div className={tab === 1 ? "tab-controller active" : "tab-controller"} onClick={() => handleTab(1)}></div>
                <div className={tab === 2 ? "tab-controller active" : "tab-controller"} onClick={() => handleTab(2)}></div>
                <div className={tab === 3 ? "tab-controller active" : "tab-controller"} onClick={() => handleTab(3)}></div>
                <div className={tab === 4 ? "tab-controller active" : "tab-controller"} onClick={() => handleTab(4)}></div>
            </div>
            { tab === 1 && <FirstTab /> }
            { tab === 2 && <SecondTab /> }
            { tab === 3 && <ThirdTab /> }
            { tab === 4 && <FouthTab /> }
        </div>
        
    </div>
  )
}

export default InterP