import React from 'react'
import { Link } from 'react-router-dom'
import './Tabcontroller.scss'

function Tabcontroller(props) {
  console.log(typeof props.href)
  return (
        <button className='Tabcontroller-btn p-text flex'><Link to={props.href}> {props.icon} {props.label}</Link></button>
  )
}

export default Tabcontroller