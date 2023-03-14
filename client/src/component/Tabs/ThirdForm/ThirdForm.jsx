import React from 'react'

function ThirdForm() {
  return (
    <div>
        <div className='input__file-group'>
            <p className="p-text">Driver’s license</p>
            <input type="file" required/>
            <div className="p-text">Required *</div>
        </div>
        <div className='input__file-group'>
            <p className="form-text">Interior picture of your Car</p>
            <p className="p-text">Provide a clear interior picture of your car.</p>
            <input type="file" required/>
            <div className="p-text">Required *</div>
        </div>
        <div className='input__file-group'>
            <p className="form-text">Driver’s profile picture</p>
            <p className="p-text">
                Please provide a clear portrait picture (not a full
                body picture) of yourself. It should show your full
                face, front veiw with eyes open.</p>
            <input type="file" required/>
            <div className="p-text">Required *</div>
        </div>
        <div className='input__file-group'>
                <p className="form-text">Valid Insurance Policy Documents</p>
                <div className="p-text">
                <p className="p-text">
                    All four corners of the page should be captured. 
                    Ensure the following are clear after photographing 
                </p>
                <ul>
                    <li>Policy number and insurance company name </li>
                    <li>Start and expiry dates. Confirm the policy has been </li>
                </ul>
                <p className="p-text">updated on askniid.org</p>
            </div>
            <input type="file" required/>
            <div className="p-text">Required *</div>
        </div>
        <div className='input__file-group'>
            <p className="p-text">Exterior picture of your Car</p>
            <p className="p-text">Provide a clear exterior picture of your car.</p>
            <input type="file" required/>
            <div className="p-text">Required *</div>
        </div>
    </div>
  )
}

export default ThirdForm