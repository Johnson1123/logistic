import React from 'react'
import Input from '../Input/Input'
import { HiOutlineMail } from 'react-icons/hi'
import { CiUser } from 'react-icons/ci'
import {BsTelephone} from 'react-icons/bs'
import {AiFillLock} from 'react-icons/ai'
import { images } from '../../asset'

import './Form_Sign.scss'
import SignupBtn from '../Btn/SignupBtn/SignupBtn'
import { useNavigate } from 'react-router-dom'

function FORM_SIGN() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return (
      navigate('/loginuser')
    )
  }
  return (
    <form className='form_sign'>
        <div className='flex input_group'>
            <Input type='text' name='username' image={<CiUser />} placeholder='Username'/>  
            <Input type='email' name='email' image={<HiOutlineMail />} placeholder='Email Address'/>           
        </div>
          
        <div className='flex input_group'>
          <Input type='tel' name='tell' image={<BsTelephone />} placeholder='Telephone'/>
          <Input type='password' name='pwd' image={<AiFillLock />} placeholder='Password'/>
        </div>
        <div>
          <SignupBtn label='Sign Up' handler={handleNavigate}/>
        </div>                         
    </form>
  )
}

export default FORM_SIGN