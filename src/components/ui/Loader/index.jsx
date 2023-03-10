import { memo } from 'react'
import { motion } from 'framer-motion'
import classes from './styles.module.css'

function Loader() {
  return (
    <div className={classes.loader}>
      <svg
        className={classes.loader_spinner}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Loader</title>
        <motion.path
          initial={{
            rotate: 0
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"
        />
      </svg>
      <span>Loading...</span>
    </div>
  )
}

export default memo(Loader)
