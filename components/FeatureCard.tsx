import React, { useState } from 'react'
import Overlay from './Overlay'
import ListItem from './ListItem'
import Expander from './Modal'
import { motion, AnimatePresence } from 'framer-motion'

const FeatureCard = ({ feature }) => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <ListItem feature={feature} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
              <Expander feature ={feature} close={closeModal}/>
            </Overlay>
        )}
        </AnimatePresence>
    </>
  )
}

export default FeatureCard
