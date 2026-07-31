import { motion } from 'framer-motion'

// Fade + slide-up on scroll into view. Reusable wrapper.
export default function Reveal({ children, delay = 0, y = 40, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </M>
  )
}
