import React from 'react'
import Background from '../../component/Background/Background'
import OTPuser from '../../component/OTPuser/OTPuser'
import Overlay from '../../component/Overlay/Overlay'
import SuccessOTP from '../../component/SuccessOTP/SuccessOTP'


function OTP() {
  return (
    <div className='otp__con'>
        <Background />
        <OTPuser />
        {
          true &&
          <Overlay />
        }
        {
          true &&
          <SuccessOTP />
        }
    </div>
  )
}

export default OTP