import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../asset'

function Footer() {
  return (
    <div className='footer__container flex'>
      <div className='foo_box'>
        <Link to='/'><img src={images.logo} alt=''/></Link>
      </div>
      <div className='foo_box'>
        <ul>
          
        </ul>
      </div>
      <div className='foo_box'>
        <Link to='/'><img src={images.logo} alt=''/></Link>
      </div>
      <div className='foo_box'>
        <Link to='/'><img src={images.logo} alt=''/></Link>
      </div>
      
    </div>
  )
}

export default Footer