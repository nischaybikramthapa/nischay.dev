import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { TechStack } from './Tools'

const Expander = ({ feature, close }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
    },
  }
  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  }
  return (
    <motion.div
      className="p-8 border-2 h-auto bg-white dark:bg-black rounded-xl dark:border-gray-700 shadow-md hover:shadow-lg"
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
    >
      <motion.div className="flex justify-between items-center mb-4" variants={modalInfoVariants}>
        <span className="inline-block p-3 text-blue-500 bg-primary-500 justify-center rounded-full dark:text-white dark:bg-primary-500 text-white">
          <feature.icon className="h-10 w-10 text-white" aria-hidden="true" />
        </span>
        <motion.h1 className="font-semibold leading-7 text-2xl text-gray-500 dark:text-gray-300 flex-1 text-center">
          {feature.name}
        </motion.h1>
        <button className="p-2 rounded-lg focus:outline-none" onClick={close}>
          <XMarkIcon className="h-6 w-6 text-gray-300" />
        </button>
      </motion.div>
      <p className="leading-relaxed text-gray-500 dark:text-gray-300 mb-4">{feature.description}</p>
      <p className=" text-left leading-relaxed text-gray-500 dark:text-gray-300 mb-4">
        I can help you to:
      </p>
      <ul className="list-disc list-inside text-left mb-4 ">
        {feature.points.map((task, index) => (
          <li className="leading-relaxed text-gray-500 dark:text-gray-300" key={index}>
            {task}
          </li>
        ))}
      </ul>
      <h1 className="font-semibold text-left text-xl leading-7 text-gray-500 dark:text-gray-300 mb-4">Tools</h1>
      <TechStack feature={feature}/>
    </motion.div>
  )
}

export default Expander
