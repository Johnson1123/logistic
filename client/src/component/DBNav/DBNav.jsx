import React from 'react'
import { images } from '../../asset'
import './DBNav.scss'
import {ImUser} from 'react-icons/im'
import { Link } from 'react-router-dom'

function DBNav() {
  return (
    <div className='DBNav flex box-shadow'>
        <div className="DBNav__box  DBNav__logo">
            <Link to='/'>
                <img src={images.logo} alt='Technovixdriver' />
            </Link>
        </div>
        <div className="DBNav__box user-icon">
            <ImUser />
            <div className="dot__user"></div>
        </div>
        <div className="DBNav__box user__img-details flex">
            <div className="user__img flex center">
                <img src={images.Elia} alt="Technovix driver" />
            </div>
            <div className="user__details">
                <h2 className="username-text p-text">Christiana James</h2>
                <p className="p-text small-text">Driver</p>
            </div>
        </div>
    </div>
  )
}

export default DBNav