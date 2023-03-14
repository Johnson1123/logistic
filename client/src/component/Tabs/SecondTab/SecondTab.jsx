import React from 'react'
import TabInput from '../TabInput/TabInput'

function SecondTab() {
  return (
    <div className='secondTab'>
        <p className="form-bold">Private and licensing details</p>
        <p className="form-text">Your national ID and license details will be kept private</p>
        <TabInput label='Driver license' placeholder='AB235235' type='text'/>
        <p className="form-text">License Number on your driver’s documents</p>
    </div>
  )
}


export default SecondTab