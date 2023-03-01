import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import { motion } from 'framer-motion'

function Badge({ children, text }) {
  return (
    <div className={classes.badge_block}>
      {children}
      <motion.span
        key={text}
        className={classes.badge}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        {text}
      </motion.span>
    </div>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default memo(Badge)
