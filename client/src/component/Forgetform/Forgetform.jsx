import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import SignupBtn from '../Btn/SignupBtn/SignupBtn'
import Input from '../Input/Input'
import './Forgetform.scss'


function Forgetform() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return (
      navigate('/otp')
    )
  }
  return (
    <form className='form_login'>
        <div className='flex input_group'>
            <Input type='tel' name='email' image={<BsTelephone />} placeholder='Phone/Email Address'/>           
        </div>
        <div className='sign__in'>
          <SignupBtn label='PROCEED' handler={handleNavigate}/>
        </div>
    </form>
  )
}

export default Forgetform