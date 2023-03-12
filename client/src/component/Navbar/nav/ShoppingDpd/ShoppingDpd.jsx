import React from 'react'
import DropLink from '../../DropLink'
import { motion } from 'framer-motion'

export default function ShoppingDpd() {
  return (
    <motion.ul className='menu__drop'
    whileInView={{y: [-200, 0]}}
    transition={{duration: .73}}
    >
        <DropLink label='Popular' />
        <DropLink label='Latest' />
        <DropLink label='Cheaper' />
        <DropLink label='Features' />
    </motion.ul>
  )
}
