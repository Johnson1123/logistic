import React from 'react'
import SignupBtn from '../../Btn/SignupBtn/SignupBtn'
import './ThirdForm.scss'
function ThirdForm() {
  return (
    <div className='Thirdform'>
        <div className='input__file-group'>
            <p className="form-text">Driver’s license</p>
            
            <input type="file" required id='file1'/>
            <label htmlFor="file1" className='p-text upload'>+ Upload file</label>
            <div className="p-text req-text">Required *</div>
        </div>
        <div className='input__file-group'>
            <p className="form-text">Interior picture of your Car</p>
            <p className="p-text">Provide a clear interior picture of your car.</p>
            <input type="file" id='file2' required/>
            <label htmlFor="file2" className='p-text upload'>+ Upload file</label>
            <div className="p-text req-text">Required *</div>
        </div>
        <div className='input__file-group'>
            <p className="form-text">Driver’s profile picture</p>
            <p className="p-text">
                Please provide a clear portrait picture (not a full
                body picture) of yourself. It should show your full
                face, front veiw with eyes open.</p>
            <input type="file" required id='file3'/>
            <label htmlFor="file3" className='p-text upload'>+ Upload file</label>
            <div className="p-text req-text">Required *</div>
        </div>
        <div className='input__file-group'>
                <p className="form-text">Valid Insurance Policy Documents</p>
                <div className="p-text">
                <p className="p-text">
                    All four corners of the page should be captured. 
                    Ensure the following are clear after photographing 
                </p>
                <ol className='third__ul' type='1'>
                    <li>Policy number and insurance company name </li>
                    <li>Start and expiry dates. Confirm the policy has been updated on askniid.org</li>
                </ol>
            </div>
            <input type="file" required id='file4'/>
            <label htmlFor="file4" className='p-text upload'>+ Upload file</label>
            <div className="p-text req-text">Required *</div>
        </div>
        <div className='input__file-group'>
            <p className="form-text">Exterior picture of your Car</p>
            <p className="p-text">Provide a clear exterior picture of your car.</p>
            <input type="file" required id='file5'/>
            <label htmlFor="file5" className='p-text upload'>+ Upload file</label>
            <div className="p-text req-text">Required *</div>
        </div>
        <div className="btn__wrapper">
            <SignupBtn label='PROCEED' />
        </div>
    </div>
  )
}

export default ThirdForm