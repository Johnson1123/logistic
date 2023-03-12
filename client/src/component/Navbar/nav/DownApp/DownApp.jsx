import React from 'react'
import DropLink from '../../DropLink'
import {motion} from 'framer-motion'


function DownApp() {
  return (
    <motion.ul className='menu__drop'
    whileInView={{y: [-200, 0]}}
    transition={{duration: .73}}
    >
        <DropLink label='Android' />
        <DropLink label='IOS' />
    </motion.ul>
  )
}

export default DownApp