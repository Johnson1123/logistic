import React from 'react'
import SignupBtn from '../../component/Btn/SignupBtn/SignupBtn'
import './Signupbanner.scss'

function Signupbanner() {
  return (
    <div className='signupbanner__con center flex'>
        <div className="btn__con"><SignupBtn label='SIGN UP AS USER'/></div>
        <div className="btn__con" ><SignupBtn label='SIGN UP AS DRIVER' /></div>
    </div>
  )
}

export default Signupbanner