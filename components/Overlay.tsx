import React from 'react'
import { motion } from 'framer-motion'

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: 'rgba(0,0,0,0.6)' },
    closed: { backgroundColor: 'rgba(0,0,0,0)' },
  }
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex justify-center items-center overflow-y-auto sm:justify-start sm:py-40 md:justify-center md:items-center"
      onClick={close}
      variants={variants}
      initial={'closed'}
      animate={'open'}
      exit={'closed'}
      key="overlay"
    >
      {children}
    </motion.div>
  )
}

export default Overlay
