import React from 'react'
import './GetHelp.scss'

import HelpButton from './HelpButton/HelpButton'

function GetHelp() {
  return (
    <div className='GetHelp'>
        <p className="title">Get Help</p>
        <p className="small-title">How can we help?</p>
        <HelpButton label='Customer services'/>
        <p className="small-title">Get help with something else?</p>
        <HelpButton label='About XLCAB Ride'/>
        <HelpButton label='App and Features'/>
        <HelpButton label='Account and data'/>
        <HelpButton label='Payments and pricing'/>
        <HelpButton label='Using XLCAB Rid'/>
    </div>
  )
}

export default GetHelp