import Image from 'next/image'

import { Line } from '../atoms'

const Footer = () => {
  return (
    <footer className="rounded-lg bg-[#171717] px-4 py-8 shadow md:px-16 md:py-8">
      <div className="flex items-center justify-center">
        <a
          href="https://flowbite.com/"
          className="mb-4 flex items-center sm:mb-0"
        >
          <Image
            className="mr-3"
            src="/MinimalLogo.svg"
            alt="Logo"
            width={48}
            height={48}
            loading="lazy"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Glocal Cidades
          </span>
        </a>
      </div>
      <div className="my-6">
        <Line width="100%" />
      </div>
      <span className="block space-x-2 text-center text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Glocal Cidades.</span>
        <span>Todos os direitos reservados.</span>
      </span>
      <span className="block text-center text-sm text-gray-400">
        Criado por{' '}
        <a
          className="underline decoration-wavy underline-offset-4"
          href="https://instagram.com/mabiseavey"
          target="_blank"
          rel="noreferrer"
        >
          @mabi
        </a>{' '}
        e{' '}
        <a
          className="underline decoration-wavy underline-offset-4"
          href="https://emots.dev"
          target="_blank"
          rel="noreferrer"
        >
          @emorais
        </a>
      </span>
    </footer>
  )
}

export default Footer
