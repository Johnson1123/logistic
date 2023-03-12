import React from 'react'
import DropLink from '../../DropLink'
import { motion } from 'framer-motion'

function Company() {
  return (
    <motion.ul className='menu__drop'
    whileInView={{y: [-200, 0]}}
    transition={{duration: .73}}
    >
        <DropLink label='About' />
        <DropLink label='Services' />
        <DropLink label='Testimonial' />
        <DropLink label='App Features' />
        <DropLink label='Our Brand' />
    </motion.ul>
  )
}

export default Company