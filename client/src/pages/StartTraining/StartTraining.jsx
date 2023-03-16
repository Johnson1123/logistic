import React from 'react'
import { useNavigate } from 'react-router-dom';
import Bgnav from '../../component/BgNav/Bgnav'
import SignupBtn from '../../component/Btn/SignupBtn/SignupBtn'
import './StartTraining.scss'

function StartTraining() {
  const navigate = useNavigate();
    const handleNavigate = () => {
      return (
        navigate('/techdrive')
      )
    }
  return (
    <div className='starttraining'>
        <Bgnav />
        <div className="stn__wrapper">
            <h3 className="form-title">Complete your virtual information session</h3>
            <p className="form-text para">Complete the virtual information session to get activated</p>
            <p className='form-text m-para'>
                To proceed with your onboarding, you need to complete a virtual information session. You will learn
                more about driver requirements, available products, fares and earnings, as well as our quality standards
                and community guidelines.
            </p>
            <SignupBtn label='PROCEED' handler={handleNavigate}/>
        </div>
        
        
    </div>
    
  )
}

export default StartTraining