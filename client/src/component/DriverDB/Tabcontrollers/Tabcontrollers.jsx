import React, { Component } from 'react'
import './Tabcontrollers.scss'
import Tabcontroller from '../Tabcontroller/Tabcontroller'
import {RxDashboard} from 'react-icons/rx'
import { DBcontroller } from '../../../content/DBcontroller'
import { images } from '../../../asset'
import { useDispatch } from 'react-redux'
import { handleDashboard } from '../../../features/toggleSlice/toggleSlice'

function Tabcontrollers() {
  const Dispatch = useDispatch();
  const handleDB = (n) => {
     Dispatch(handleDashboard(n))
    }
  return (
    <div className='Tabcontrollers'>
        <div>
        {
          DBcontroller.map((item, index) => {
            return(
              <Tabcontroller label={item.label} icon={item.icon} key={index} handler={() => handleDB(item.label)}/>
            )
          })
        }
        <div className="getApp flex">
          <div className="getApp__content">
            <p className="small-title p-text">Get Mobile App</p>
            <div className="img__con flex">
              <img src={images.playStore} alt="play store" />
              <img src={images.appLogo} alt="apple store" />
            </div>
          </div>
          <img src={images.iphones} alt=""  className='iphones'/>
        </div>
      </div>
    </div>
  )
}

export default Tabcontrollers