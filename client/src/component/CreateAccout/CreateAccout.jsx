import React from 'react'
import FORM_SIGN from '../../component/Form_Signup/FORM_SIGNUP'
import SocialMedia from '../../component/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
import './Createacount.scss'

function CreateAccout() {
  return (
    <div className="signup__content">
            <p className="form-bold">START FOR FREE</p>
            <p className="form-title p-text">CREATE AN ACCOUNT</p>
            <p className="form-text">Please fill in Your Accurate Information</p>
            <FORM_SIGN />
            <p className='form-text login_here'>Already have an account?<Link to='/login'>Login here!</Link></p>
            <div className=' connect_sign flex center'>
                <div></div><p className='small-text'>Connect With</p><div></div>
            </div>
            <SocialMedia />
        </div>
  )
}

export default CreateAccout