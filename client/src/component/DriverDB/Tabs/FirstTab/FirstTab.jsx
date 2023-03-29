import React from 'react'
import { images } from '../../../../asset'
import Badges from '../../../Badges/Badges'
import Booking from '../../Booking/Booking'
import Chat from '../../Chat/Chat'
import RecentBooking from '../../RecentBooking/RecentBooking'
import Review from '../../Review/Review'
import './FirstTab.scss'
import Chart from 'react-google-charts'

const LineData = [
  ['x', 'dogs', 'cats'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  series: {
    1: { curveType: 'function' },
  },
}

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
                <div className="graph__con">
                    <div className="chart box-shadow">
                    <Chart
                          width={'400px'}
                          height={'300px'}
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={LineData}
                          options={LineChartOptions}
                          rootProps={{ 'data-testid': '2' }}
                    />
                    </div>
                </div>
                <div className="recent__ride box-shadow">
                    <p className="p-text title">Recent Rides</p>
                    <RecentBooking />
                </div>
            </div>
            <p className="recent-booking-text title">Recent Booking</p>
            <div className="scroll__container">
              <Booking />
            </div>
        </div>
        <div className="chart__group flex">
                <Chat />
                <Review />
        </div>
    </div>
  )
}

export default FirstTab