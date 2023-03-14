import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import {AiFillLock} from 'react-icons/ai'
import SignupBtn from '../Btn/SignupBtn/SignupBtn'
import Input from '../Input/Input'
import './LoginForm.scss'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return (
      navigate('/forgetpwd')
    )
  }
  return (
    <form className='form_login'>
        <div className='flex input_group'>
            <Input type='email' name='username' image={<HiOutlineMail />} placeholder='Username'/>  
            <Input type='password' name='pwd' image={<AiFillLock />} placeholder='Email Address'/>           
        </div>
        <div className='sign__in'>
          <SignupBtn label='Sign in'handler={handleNavigate}/>
        </div>
    </form>
  )
}

export default LoginForm