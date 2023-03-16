import React from 'react'
import { images } from '../../../../asset'
import Badges from '../../../Badges/Badges'
import Booking from '../../Booking/Booking'
import Chart from '../../Chart/Chart'
import RecentBooking from '../../RecentBooking/RecentBooking'
import Review from '../../Review/Review'
import './FirstTab.scss'

function FirstTab() {
  return (
    <div className='FirstTab flex'>
        <div className="left__content">
            <div className="badge__con flex">
                <Badges duration='This Week Income' 
                    amount='$1,700.78' balance='BALANCE'
                    color='#f3f3f3'
                />
                <Badges numAccepted='862/' 
                    total='907' text='Number of Booking Accepted'
                    color="red"
                />
                <Badges numAccepted='45/'
                    total='907' text='Number of Bookings Denied'
                    color='#3AB54A'
                 />
            </div>
            <div className="graph__group flex">
                <div className="graph__con box-shadow">

                </div>
                <div className="recent__ride box-shadow">
                    <p className="p-text title">Recent Rides</p>
                    <RecentBooking />
                </div>
            </div>
        <p className="recent-booking-text title">Recent Booking</p>
        <Booking />
        </div>
        <div className="chart__group flex">
                <Chart />
                <Review />
            </div>
    </div>
  )
}

export default FirstTab