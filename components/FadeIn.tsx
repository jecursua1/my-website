'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
}: FadeInProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={variants}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
