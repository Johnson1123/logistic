import React from 'react'
import SignupBtn from '../Btn/SignupBtn/SignupBtn'
import './CombineInput.scss'

function CombineInput() {
  return (
    <div className='combine__con flex center'>
        <form className='combineinput__form flex center'>
            <input type="number" className="combineinput" autoFocus name='num1'/>
            <input type="number" className="combineinput" name='num2'/>
            <input type="number" className="combineinput" name='num3'/>
            <input type="number" className="combineinput" name='num4'/>
        </form>
        <SignupBtn label='PROCEED'/>
    </div>
  )
}

export default CombineInput