import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import SignupBtn from '../Btn/SignupBtn/SignupBtn'
import Input from '../Input/Input'
import './Forgetform.scss'


function Forgetform() {
  return (
    <form className='form_login'>
        <div className='flex input_group'>
            <Input type='tel' name='email' image={<BsTelephone />} placeholder='Phone/Email Address'/>           
        </div>
        <div className='sign__in'>
          <SignupBtn label='PROCEED'/>
        </div>
    </form>
  )
}

export default Forgetform