import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Expander = ({ feature, close }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: {
        opacity: 0
    },
  }
  const h1Variants = {
    open: {
        opacity: 1, y: "0vh"
    },
    closed: {opacity: 0, y: "-10vh"}
  }
  const modalInfoVariants = {
    open: {opacity: 1, transition: {staggerChildren: 0.2}},
    closed: {opacity: 0}
  }
  return (
      <motion.div
        className="p-8 border-2 h-auto bg-white rounded-xl dark:border-gray-700 shadow-md hover:shadow-lg"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
      >
        <motion.div className="flex justify-between items-center mb-4" variants={modalInfoVariants}>
        <span className="inline-block p-3 text-blue-500 bg-primary-500 justify-center rounded-full dark:text-white dark:bg-primary-500 text-white">
        <feature.icon className="h-10 w-10 text-white" aria-hidden="true" />
      </span>
          <motion.h1 className="font-semibold leading-7 text-2xl text-gray-900 flex-1 text-center">
            {feature.name}
          </motion.h1>
          <button className="p-2 rounded-lg focus:outline-none" onClick={close}>
            <XMarkIcon className="h-6 w-6 text-gray-300" />
          </button>
        </motion.div>
        <p className="leading-relaxed text-gray-500 dark:text-gray-400">{feature.description}</p>
      </motion.div>
  )
}

export default Expander