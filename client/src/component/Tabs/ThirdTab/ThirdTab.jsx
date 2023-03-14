import React from 'react'
import ThirdForm from '../ThirdForm/ThirdForm'

function ThirdTab() {
  return (
    <div className='thirdTab'>
        <p className="form-title">Documents</p>
        <p className="p-text">
            We are legally requred to ask you for some documents
            to sign you up as a driver. Documents scans and quality
            photos are accepted.
        </p>
        <ThirdForm />
    </div>
  )
}

export default ThirdTab