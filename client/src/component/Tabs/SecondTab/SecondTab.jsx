import React from 'react'
import SignupBtn from '../../Btn/SignupBtn/SignupBtn'
import TabInput from '../TabInput/TabInput'
import './SecondTab.scss'

function SecondTab() {
  return (
    <div className='secondTab flex d-none'>
        <p className="form-bold">Private and licensing details</p>
        <p className="form-text">Your national ID and license details will be kept private</p>
        <TabInput label='Driver license' placeholder='AB235235' type='text'/>
        <p className="form-text license-text">License Number on your driver’s documents</p>
        <SignupBtn label='PROCEED' handler='' />
    </div>
  )
}



export default SecondTab