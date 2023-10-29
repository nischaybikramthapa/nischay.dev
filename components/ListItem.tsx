import { motion } from 'framer-motion'

const ListItem = ({ feature, open }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      transition={{ ease: 'easeInOut', duration: 0.3, type: 'spring', stiffness: 100, damping: 1 }}
      className="overflow-hidden transition hover:shadow-rounded-lg"
      onClick={open}
    >
      <span className="inline-block p-3 text-primary-500 bg-primary-500 justify-center rounded-full dark:text-white dark:bg-primary-500 text-white">
        <feature.icon className="h-10 w-10 text-white" aria-hidden="true" />
      </span>
      <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-100">
        {feature.name}
      </dt>
    </motion.article>
  )
}

export default ListItem



