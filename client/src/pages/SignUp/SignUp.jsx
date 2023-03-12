import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../asset'
import Background from '../../component/Background/Background'
import CreateAccout from '../../component/CreateAccout/CreateAccout'
import Overlay from '../../component/Overlay/Overlay'
import SuccessSignUp from '../../component/SuccessSignUp/SuccessSignUp'
import './SignUp.scss'

function SignUp() {
  return (
    <div className='signUp__con'>
        <Background />
        <CreateAccout />
        {
                false && <SuccessSignUp />
        }
        {
                false && <Overlay />
        }
    </div>
  )
}

export default SignUp