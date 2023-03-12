import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import './Loginuser.scss'

function Loginuser() {
  return (
    <div className='form__user'>
        <p className='form-title'>Welcome Back!</p>
        <p className="form-sm">Please fill in Your Accurate Information</p>
        <LoginForm />
        <Link className='form-sm p-text' to='/pwdrecovering'>Forget  Password?</Link>
    </div>
  )
}

export default Loginuser