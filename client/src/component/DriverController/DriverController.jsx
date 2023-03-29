
import React from 'react'
import './DriverController.scss'
import Tabcontroller from '../DriverDB/Tabcontroller/Tabcontroller'


import { useNavigate } from 'react-router-dom'
import { DBcontroller } from '../../content/DBcontroller'
import { images } from '../../asset'

function DriverController() {
  const navigate = useNavigate()
  const handleDB = (n) => {
    navigate(n)
  }
  return (
    <div className='DriverController'>
        <div className='Tabcontrollers__con'>
        {
          DBcontroller.map((item, index) => {
            return(
              <Tabcontroller label={item.label} icon={item.icon} key={index} handler={() => handleDB(item.href)}/>
            )
          })
        }
        
        <div className="getApp flex">
          <div className="getApp__content">
            <p className="small-title p-text">Get Mobile App</p>
            <div className="img__con flex">
              <img src={images.playStoreLogo} alt="play store" />
              <img src={images.appLogo} alt="apple store" />
            </div>
          </div>
          <img src={images.iphones} alt=""  className='iphones'/>
        </div>
      </div>
    </div>
  )
}

export default DriverController