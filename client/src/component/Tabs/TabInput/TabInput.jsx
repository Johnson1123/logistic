import React from 'react'
import './TabInput.scss'

function TabInput(props) {
  return (
    <div className='flex input__container'>
      <p className="p-text">{props.label}</p>
      <input type={props.type} placeholder={props.placeholder} name={'props.name'} />
    </div>
  )
}

export default TabInput