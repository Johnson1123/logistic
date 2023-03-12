import React from 'react'
import Forgetform from '../Forgetform/Forgetform'
import './Forgetuser.scss'

function Forgetuser() {
  return (
    <div className='forget__form'>
        <p className='form-title'>Forget Password? <br />Worry Less!</p>
        <p className="form-text">Please enter your registered Phone Number</p>
        <Forgetform />
        <p className="form-text">To verify your number, an OTP willl be send to your registered Number</p>
    </div>
  )
}

export default Forgetuser