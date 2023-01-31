'use client'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useSSRLayoutEffect } from '@/hooks/ssr'
import { cx } from '@/utils/classNames'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IconChevronDown } from '@tabler/icons-react'

import { Line } from '../atoms'
import PolymorphicButton from '../atoms/PolymorphicButton'
import Dialog from './Dialog'

const Header = () => {
  const [isSticky, setSticky] = useState(false)

  useSSRLayoutEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (window.pageYOffset > 54) {
          setSticky(true)
        } else {
          setSticky(false)
        }
      },
      { passive: true }
    )
  }, [])

  return (
    <>
      <header
        className={cx(
          'fixed top-0 z-10 flex w-full flex-col items-center justify-center transition-all',
          isSticky
            ? 'bg-black bg-opacity-60 backdrop-blur'
            : 'bg-transparent pt-4'
        )}
      >
        {!isSticky && <Line />}
        <NavigationMenu.Root className="relative flex w-full items-center justify-between px-4 py-3 md:px-16">
          <Image
            className="rounded-full"
            src="/MinimalLogo.svg"
            alt="Logo"
            width={48}
            height={48}
            loading="lazy"
          />

          <NavigationMenu.List className="hidden md:flex md:items-center md:space-x-8">
            <NavigationMenu.Item>
              <PolymorphicButton
                onClick={() =>
                  document.getElementById('main')?.scrollIntoView()
                }
              >
                Início
              </PolymorphicButton>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <PolymorphicButton
                onClick={() =>
                  document.getElementById('our-work')?.scrollIntoView()
                }
              >
                Nosso trabalho
              </PolymorphicButton>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex items-center font-medium uppercase text-white">
                <span>Sobre</span>
                <span role="img" aria-label="open">
                  <IconChevronDown className="ml-2 h-5 w-5 transform transition-transform group-radix-state-open:rotate-180" />
                </span>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                className={cx(
                  'absolute top-0 left-0 w-auto rounded-lg',
                  'radix-motion-from-start:animate-enter-from-left',
                  'radix-motion-from-end:animate-enter-from-right',
                  'radix-motion-to-start:animate-exit-to-left',
                  'radix-motion-to-end:animate-exit-to-right'
                )}
              >
                <div className="w-[16rem] p-3 lg:w-[18rem]">
                  <div className="flex w-full flex-col space-y-2">
                    <Link
                      href="/mvv"
                      className={cx(
                        'w-full rounded-md px-4 py-3 hover:bg-gray-100',
                        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                      )}
                    >
                      <span className="text-base font-medium uppercase text-black">
                        No que acreditamos
                      </span>
                    </Link>
                    <Link
                      href="/sobre"
                      className={cx(
                        'w-full rounded-md px-4 py-3 hover:bg-gray-100',
                        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                      )}
                    >
                      <span className="text-base font-medium uppercase text-black">
                        Sobre nós
                      </span>
                    </Link>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <PolymorphicButton
            className="hidden border border-white bg-white py-2 px-4 font-semibold uppercase md:flex"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contato
          </PolymorphicButton>

          <div
            className={cx(
              'absolute flex justify-center',
              'left-[-20%] top-[80%] w-[160%]'
            )}
            style={{
              perspective: '2000px',
            }}
          >
            <NavigationMenu.Viewport
              className={cx(
                'relative mt-2 overflow-hidden rounded-md bg-white shadow-lg',
                'w-radix-navigation-menu-viewport',
                'h-radix-navigation-menu-viewport',
                'radix-state-open:animate-scale-in-content',
                'radix-state-closed:animate-scale-out-content',
                'origin-[top_center] transition-[width_height] duration-300 ease-[ease]'
              )}
            />
          </div>
          <div className="md:hidden">
            <Dialog />
          </div>
        </NavigationMenu.Root>
        <Line />
      </header>
    </>
  )
}

export default Header
