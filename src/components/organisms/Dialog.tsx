import React, { Fragment, useState } from 'react'

import Link from 'next/link'

import { cx } from '@/utils/classNames'
import { Transition } from '@headlessui/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { IconMenu, IconX } from '@tabler/icons-react'

import PolymorphicButton from '../atoms/PolymorphicButton'

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <PolymorphicButton>
          <span role="img" aria-label="open menu">
            <IconMenu className="h-9 w-9" strokeWidth={1} />
          </span>
        </PolymorphicButton>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={cx(
                'fixed z-50',
                'w-full rounded-t-lg p-4 md:w-full',
                'inset-x-0 bottom-0',
                'bg-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              <ul className="flex flex-col items-center space-y-4">
                <li>
                  <PolymorphicButton
                    className={cx(
                      'block w-full rounded-md p-2 hover:bg-gray-100',
                      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                      'text-base font-medium uppercase'
                    )}
                    onClick={() => {
                      document.getElementById('main')?.scrollIntoView()
                      setIsOpen(false)
                    }}
                  >
                    Início
                  </PolymorphicButton>
                </li>
                <li>
                  <PolymorphicButton
                    className={cx(
                      'block w-full rounded-md p-2 hover:bg-gray-100',
                      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                      'text-base font-medium uppercase'
                    )}
                    onClick={() => {
                      document.getElementById('our-work')?.scrollIntoView()
                      setIsOpen(false)
                    }}
                  >
                    Nosso trabalho
                  </PolymorphicButton>
                </li>
                <li>
                  <Link
                    href="/mvv"
                    className={cx(
                      'block w-full rounded-md p-2 hover:bg-gray-100',
                      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                      'text-base font-medium uppercase'
                    )}
                  >
                    No que acreditamos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className={cx(
                      'block w-full rounded-md p-2 hover:bg-gray-100',
                      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                      'text-base font-medium uppercase'
                    )}
                  >
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <PolymorphicButton
                    className={cx(
                      'block w-full rounded-md p-2 hover:bg-gray-100',
                      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                      'text-base font-medium uppercase'
                    )}
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView()
                      setIsOpen(false)
                    }}
                  >
                    Contato
                  </PolymorphicButton>
                </li>
              </ul>
              <DialogPrimitive.Close
                className={cx(
                  'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-2',
                  'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                )}
              >
                <IconX className="h-4 w-4 text-gray-500 hover:text-gray-400" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default Dialog
