import React from 'react'

import './Home.scss'
import Search from '../../component/Search/Search'
import UserTask from '../../component/UserTask/UserTask'
import SignupBtn from '../../component/Btn/SignupBtn/SignupBtn'
import OperationArea from '../../component/OperationArea/OperationArea'
import OurService from '../../component/OurService/OurService'
import Testimonials from '../../component/Testimonials/Testimonials'
import Map from '../../component/Map'
import ChargesBadge from '../../component/ChargesBadge/ChargesBadge'
import DownloadSection from '../../component/DownloadSection/DownloadSection'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  

  // const locationHandler = () => {
  //   const navigate = useNavigate;
  //   return (
  //     navigate('/')
  //   )
  // }


  return (
    <div className='app__container home__container'>

      <div className="app__wrapper flex">

        <div className="home__intro flex">
          {
            false && <Search />
          }

          <div className="home__intro-title">

            <h1 className='p-text'>
              Fast & Easy Way To Rent A Car
            </h1>
          </div>

          <div className="home__intro-p">
            <p className='p-text intro-p'>
              A successful business values the 
              importance of face to face interaction, even in our growing digital age. If you’re a modern professional, a medium size business or a large enterprise; travelling internationally for business
              purposes is probably a fact of life.       
              </p>
          </div>
          {true &&
            <div className='btn__container flex'>

              <div className="btn-box">
                <SignupBtn label='Partnership' />
              </div>

              <div className="btn-box">
                <SignupBtn label='Sign up' handler={() => navigate('/signupuser')}/>
              </div>

            </div>
          }
        </div>
        <UserTask />
        <OperationArea/>
        <OurService />
        <Testimonials />
        <Map />
        <ChargesBadge />
        <DownloadSection />

      </div>
      
    </div>
  )
}
