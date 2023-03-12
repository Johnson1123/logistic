import React from 'react'
import { AiFillLock } from 'react-icons/ai'
import SignupBtn from '../Btn/SignupBtn/SignupBtn'
import Input from '../../component/Input/Input'
import './NewpwdForm.scss'

function NewpwdForm() {
  return (
    <div className='Newpwdform'>
        <div className='flex input_group'>
            <Input type='password' name='nenwpwd' image={<AiFillLock />} placeholder='New Password'/>  
            <Input type='password' name='comfirmpwd' image={<AiFillLock />} placeholder='Comfirm Password'/>           
        </div>
        <div className='Newpwdform__btn'>
          <SignupBtn label='PROCEED'/>
        </div>
    </div>
  )
}

export default NewpwdForm