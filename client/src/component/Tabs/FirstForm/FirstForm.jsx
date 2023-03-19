import React from 'react'
import TabInput from '../TabInput/TabInput'
import './FirstForm.scss'
import SignupBtn from '../../Btn/SignupBtn/SignupBtn'
import { Link } from 'react-router-dom'

function FirstForm() {
  return (
    <form className='fisrtForm'>
        <div className="input__group">
            <TabInput label='First name' type='text' placeholder='First name' name='fname'/>
            <TabInput label='Last name' type='text' placeholder='Last name' name='Lname'/>
        </div>
        <div className="input__group">
            <div className='singleInput'>
                <TabInput label='Referral code' type='text' placeholder='' name='Referrer'/>
                <p className="form-text refer-text">If someone referred you, enter their code.</p>
            </div>
            <div className='Mfleet'>
                <p className="form-bold">Have multiple vehicles?</p>
                <p className="p-text"><Link to='signLocalP' className='link-text'> Sign up as a fleet owner </Link> to become Local Partner</p>
                <div className='flex'><input type='checkbox' name='Mfleet' /><p className='check-text'>I have a vehicle that i will drive.</p></div>
            </div>
        </div>
        <div className="input__group">
            <TabInput label='Vehicle manufacturer and model' type='text' placeholder='' name='Model'/>
            <TabInput label='Vehicle Year' type='text' placeholder='' name='Vyear'/>
        </div>
        <div className="input__group">
            <TabInput label='License Plate' type='text' placeholder='' name='Model'/>
            <TabInput label='Vehicle Color' type='text' placeholder='' name='Vcolor'/>
        </div>
        <SignupBtn label='PROCEED' />
    </form>
  )
}

export default FirstForm