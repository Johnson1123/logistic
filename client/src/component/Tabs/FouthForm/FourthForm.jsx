import React from 'react'
import { Link } from 'react-router-dom'
import SignupBtn from '../../Btn/SignupBtn/SignupBtn'
import TabInput from '../TabInput/TabInput'
import './FourthForm.scss'

function FourthForm() {
  return (
<form className='fouthForm'>
    <div className="input__group">
        <div className='form__select'>
            <p className='form-text bill-text'>Billing type</p>
            <div className="select">
                <select>
                  <option value="1">Cash</option>
                  <option value="2">Transfer</option>
                  <option value="3">Card</option>
                </select>
            </div>
        </div>
       <TabInput label='Company Name' type='text' placeholder='Technovix Ride' name='Lname'/>
    </div>
    <div className="input__group">
        <div className='singleInput'>
            <TabInput label='Address' type='text' placeholder='' name='5 place des pyramides 92800, Paris La defense'/>
            <p className="p-text">If someone referred you, enter their code.</p>
        </div>
        <div className='vat'>
            <p className="form-bold">Registration code?</p>
            <TabInput type='text' placeholder='' name='5 place des pyramides 92800, Paris La defense'/>
            <div className='vat__checkbox p-text'><input type='checkbox' name='vat' />VAT liability</div>
        </div>
    </div>
    <div className="input__group">
        <TabInput label='VAT number' type='number' placeholder='89754' name='Vat'/>
        <TabInput label='Bank account holder name' type='text' placeholder='Technovix Innovations' name=''/>
    </div>
    <div className="input__group">
        <TabInput label='Technovix Innovations' type='number' placeholder='3874646099383335' name=''/>
        <TabInput label='Bank name or BIC/SWIFT' type='text' placeholder='TRANS BANK' name='Vcolor'/>
    </div>
    <SignupBtn label='PROCEED' />
</form>
  )
}

export default FourthForm