import React from 'react'
import { images } from '../../asset'
import ReadMore from '../Btn/ReadMore/ReadMore'
import './OperationArea.scss'

function OperationArea() {
  return (
    <div className='OperationArea__container flex center'>
        <div className='area__content flex center'>
            <p className="p-text title">
                Where does Technovix Operate?
            </p>
            <p className="p-text para">
                Technovix Ride offers fast and affordable rides in the whole of Paris.
            </p>
            <ReadMore />
        </div>
        <div className="area__img">
            <img src={images.operate} alt="" />
        </div>
    </div>
  )
}

export default OperationArea