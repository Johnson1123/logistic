import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { images } from '../../asset'
import Background from '../../component/Background/Background'
import CreateAccout from '../../component/CreateAccout/CreateAccout'
import Overlay from '../../component/Overlay/Overlay'
import SuccessSignUp from '../../component/SuccessSignUp/SuccessSignUp'
import { startSignUp } from '../../features/toggleSlice/toggleSlice'
import './SignUp.scss'

function SignUp() {
  const toggle = useSelector(state => state.toggleReducer.signUp)
  const Dispatch = useDispatch();
  const handleToggle = (e) => {
    e.target.preventDefault();
    return (
        Dispatch(startSignUp())
    )
  }
  console.log(toggle)
  return (
    <div className='signUp__con'>
        <Background />
        <CreateAccout handler={handleToggle}/>
        {
                toggle && <SuccessSignUp />
        }
        {
                toggle && <Overlay />
        }
    </div>
  )
}

export default SignUp