'use client'
import { Fragment } from 'react'
import { useRef } from 'react'

import { useIntersectionObserver } from '@/hooks/intersectionObserver'
import { useSSRLayoutEffect } from '@/hooks/ssr'
import { boxVariant } from '@/utils/constants'
import { motion, useAnimation } from 'framer-motion'

type CardProps = {
  type?: 'minimal' | 'fancy'
  icon: JSX.Element
  content: string
}

const Card = ({ icon, type = 'fancy', content }: CardProps) => {
  const ref = useRef(null)
  const control = useAnimation()
  const intersection = useIntersectionObserver(ref, {})

  useSSRLayoutEffect(() => {
    if (intersection && intersection.intersectionRatio > 0) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, intersection])

  return (
    <Fragment>
      {type === 'minimal' ? (
        <motion.div className="flex w-full items-center space-x-3 text-base font-medium text-white md:w-[48%] md:text-[25px]">
          <span role="img" aria-label="check icon">
            {icon}
          </span>
          <span>{content}</span>
        </motion.div>
      ) : (
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="flex w-full items-center space-x-3 rounded-lg bg-white px-8 py-4 text-base font-medium text-black shadow-xl md:max-w-[541px] md:text-[25px] lg:w-[48%]"
        >
          <span
            className="flex items-center justify-center rounded-lg bg-[#00FF00] p-2"
            role="img"
            aria-label="icon"
          >
            {icon}
          </span>
          <span>{content}</span>
        </motion.div>
      )}
    </Fragment>
  )
}

export default Card
