import React from 'react'
import SignupBtn from '../../Btn/SignupBtn/SignupBtn'

function FourthForm() {
  return (
    <form className='fisrtForm'>
    <div className="input__group">
        <TabInput label='Billing type' type='text' placeholder='Company' name='fname'/>
        <TabInput label='Company Name' type='text' placeholder='Technovix Ride' name='Lname'/>
    </div>
    <div className="input__group">
        <div className='singleInput'>
            <TabInput label='Address' type='text' placeholder='' name='5 place des pyramides 92800, Paris La defense'/>
            <p className="p-text">If someone referred you, enter their code.</p>
        </div>
        <div className='Mfleet'>
            <p className="form-bold">Registration code?</p>
            <p className="p-text"><Link to='signLocalP'> Sign up as a fleet owner </Link> to become Local Partner</p>
            <div><input type='checkbox' name='Mfleet' />I have a vehicle that i will drive.</div>
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