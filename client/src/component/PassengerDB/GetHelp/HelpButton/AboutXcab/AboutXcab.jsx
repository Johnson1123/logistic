import React, { useState } from 'react'
import './AboutXcab.scss'

import HelpButton from '../HelpButton'
import {FaAngleLeft} from 'react-icons/fa'
import Overlay from '../../../../Overlay/Overlay'
import Modal from '../Modal/Modal'
import { aboutRides } from '../../../../../content/AboutXcab'
import { useNavigate } from 'react-router-dom'


function AboutXcab() {
  const navigate =useNavigate()
  const [idx, setidx] = useState(3)
  const [toggle, setToggle] = useState(false)
  const content = aboutRides.filter((item) => {
    return idx == item._id
  })
  
  const handleContent = (n) => {
        console.log(idx)
        setToggle(true)
        setidx(n)
  }
  const handleToggle = () => {
        setToggle(false)
  }

  return (
    <div className='AboutXcab'>
        <p className="title flex"><div className='arrow__back' onClick={() => navigate('/passengerdb/help/')}><FaAngleLeft /></div>About XLCAB Ride</p>
        <HelpButton label='Where can i find XLCAB Ride Office?' className='mt-2' handler={() => handleContent(1)}/>
        <HelpButton label='XLCAB Ride Public API' handler={() => handleContent(2)}/>
        <HelpButton label='Where does XLCAB Ride operate?' handler={() => handleContent(3)}/>
        { toggle  && <Overlay /> }
        {toggle && <Modal content={content[0]} handler={handleToggle}/>}
    </div>
  )
}

export default AboutXcab