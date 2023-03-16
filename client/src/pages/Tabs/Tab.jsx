import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Bgnav from '../../component/BgNav/Bgnav'
import FirstTab from '../../component/Tabs/FirstTab/FirstTab'
import FouthTab from '../../component/Tabs/FouthTab/FouthTab'
import SecondTab from '../../component/Tabs/SecondTab/SecondTab'
import ThirdTab from '../../component/Tabs/ThirdTab/ThirdTab'
import './Tab.scss'

function Tab() {
  const [tab, setTab] = useState(1)
  const handleTab = (n) => {
      return (
        setTab(n)
      )
  }
  return (
    <div className='tab flex'>
        <div className="tab__wrapper flex">
            <Bgnav />
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
            <Link to='/helps' className='form-helps'/>
        </div>
        
    </div>
  )
}

export default Tab