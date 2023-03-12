import React from 'react'
import { images } from '../../asset'
import Bgnav from '../../component/BgNav/Bgnav'
import SignupBtn from '../../component/Btn/SignupBtn/SignupBtn'
import './Experiencedriver.scss'

function Experiencedriver() {
  return (
    <div className='Exper__driver'>
        <Bgnav />
        <div className='exper__wrapper flex'>
            <div className="exper__left">
                <h3 className='form-title'>EXPERIENCED DRIVER</h3>
                <p className="form-text">
                    You have taken a bold step by joining our community as a
                    driver, a sustainable means of income is guarranted.
                    However, we need you to verify your account by providing 
                    some documents as required. 
                </p>
                <SignupBtn label='PROCEED' />
            </div>
            <div className="exper__right">
                <img src={images.experience} alt="" />
            </div>
        
        </div>
    </div>
  )
}

export default Experiencedriver