import React from 'react'
import { images } from '../../asset'
import './DownloadSection.scss'

function DownloadSection() {
  return (
    <div className='DownloadSection__container flex'>
        <div className="Download__content">
            <p className='p-text title'>Download App</p>
            <p className="p-text">Install the app and start ordering now!!</p>
            <div className="store_con">
              
            </div>
        </div>
        <img src={images.iphone13} alt="IPhone 13 Pro" />
        <img src={images.iphone14} className="overlay-img" alt="IPhone 14 Pro" />
    </div>
  )
}

export default DownloadSection