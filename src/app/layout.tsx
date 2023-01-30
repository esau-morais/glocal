'use client'
import { Montserrat as FontSans } from '@next/font/google'

import { Footer } from '@/components'
import { cx } from '@/utils/classNames'
import './globals.css'
import { AnimatePresence } from 'framer-motion'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={cx('scroll-smooth bg-black font-sans', fontSans.variable)}
    >
      <head />
      <body>
        <AnimatePresence mode="wait" initial={false}>
          <main>{children}</main>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
