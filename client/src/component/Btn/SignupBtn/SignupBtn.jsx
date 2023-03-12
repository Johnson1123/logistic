import React from 'react'
import './SignupBtn.scss'

function SignupBtn(props) {
  return (
    <button onClick={props.handler} className='sign-btn flex"'>{props.label}</button>
  )
}

export default SignupBtn