import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu, closeSearch } from '../../features/toggleSlice/toggleSlice'
import './navbar.scss'
import './menu.scss'
import { images } from '../../asset'
import Search from '../Search/Search'

import { AiOutlineMenu } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiAngleRight } from 'react-icons/tfi'


import {motion} from 'framer-motion'
import NavLink from './NavLink'
import DropLink from './DropLink'
import ShoppingDpd from './nav/ShoppingDpd/ShoppingDpd'
import AccountDpd from './nav/Account/AccountDPd'
import NavLinkLg from './NavLinkLg'
import DownApp from './nav/DownApp/DownApp'
import Company from './nav/Company/Company'


function Navbar() {
  // const cart = useSelector((state) => state.cartItem.cartItems);
  const toggle = useSelector(state => state.toggleReducer.menuValue);
  const searchToggle = useSelector(state => state.toggleReducer.closeValue);

  const Dispatch = useDispatch();

  console.log(toggle)
  return (
    <div className='app__navbar flex'>
      <div className='app__navbar-wrapper-sm flex flex-center'>
        <div className="navbar__logo flex">
          <Link to='/'><img src={images.logo} alt="logistic logo" /></Link>
          <div onClick={() => Dispatch(toggleMenu())} >
            <AiOutlineMenu />
          </div>
          
        </div>

        <div className="nav__list flex">
          <ul className="nav__items flex">
              <div className='nav__items-con'>
                <Link to='/'>Home</Link>
              </div>
              {<div className='nav__items-con'>
                <Link to='/'>Partnership</Link>
              </div>}
              { false && <div className='nav__items-con'>
              <Link to='/'>About</Link>
              </div>}
              { false && <div className='nav__items-con'>
              <Link to='/'>Our service</Link>
              </div>}
              {false && <div className='nav__items-con'>
              <Link to='/'>Testimonial</Link>
              </div>}
              { false && <div className='nav__items-con'>
              <Link to='/'>F&Q</Link>
              </div>}
              <div className='nav__items-con'>
                <NavLinkLg label='Company'/>
                <Company />
              </div>
              <div className='nav__items-con'>
              <Link to='/loginuser'>Login</Link>
              </div>
              <div className='nav__items-con'>
                <NavLinkLg label='Download app'/>
                <DownApp />
              </div>
          </ul>  
        </div>

        <div className="navbar__icon flex-center">
          {/* <div className="cart__container flex-center">
            <HiOutlineShoppingBag />
            <span className='flex-center'>{cart.length}</span>
          </div> */}
        </div>
      </div>
      { toggle && 
         <div className={`app__menu `}>
            <motion.div 
            whileInView={{x: [-300, 0] }} transition={{duration: 0.55, ease: 'easeIn'}}
            className="app__menu-wrapper wrapper"
            >
                <AiOutlineClose className='menu__close'onClick={() => Dispatch(toggleMenu())}/>
                <ul className="menu__items">
                   <div className='meun__items-con'>
                     <Link to='/'>Home</Link>
                   </div>
                   { true &&
                    <div className='meun__items-con'>
                      <Link to='/'>Partnership</Link>
                    </div>
                    }
                   { false &&
                    <div className='meun__items-con'>
                      <Link to='/'>About</Link>
                    </div>
                    }
                   { false &&
                    <div className='meun__items-con'>
                      <Link to='/'>Our Service</Link>
                    </div>
                    }
                   { false &&
                    <div className='meun__items-con'>
                      <Link to='/'>Testimonial</Link>
                    </div>
                    }
                   { false &&
                    <div className='meun__items-con'>
                      <Link to='/'>F&Q</Link>
                    </div>
                    }
                    <div className='meun__items-con'>
                     <NavLink label='Company'/>
                     <Company />
                   </div>
                   { true &&
                    <div className='meun__items-con'>
                      <Link to='/'>Login</Link>
                    </div>
                    }
                   <div className='meun__items-con'>
                     <NavLink label='Download App'/>
                     <DownApp />
                   </div>
                </ul>  
            </motion.div>
         </div>
      }
    </div>
  )
}

export default Navbar