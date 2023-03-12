import React from 'react'
import { images } from '../../asset'
import Bgnav from '../../component/BgNav/Bgnav'
import SignupBtn from '../../component/Btn/SignupBtn/SignupBtn'
import './WatToGo.scss'

function WatToGo() {
  return (
    <div className='WatToGo'>
    <Bgnav />
    <div className='WatToGo__wrapper flex'>
        <div className="WatToGo__left">
            <h3 className='form-title'>EXPERIENCED DRIVER</h3>
            <p className="form-text">
            Your application was submitted succesfully, 
            However your application is under review, 
            out team will get back to you through your 
            registered email address. 
            </p>
            <SignupBtn label='PROCEED' />
        </div>
        <div className="WatToGo__right">
            <img src={images.experience} alt="" />
        </div>
    
    </div>
</div>
  )
}

export default WatToGo