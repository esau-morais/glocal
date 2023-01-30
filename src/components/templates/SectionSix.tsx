import { defaultIconProps } from '@/utils/constants'
import {
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react'

import Form from '../organisms/Form'

const SectionSix = () => {
  return (
    <section
      id="contact"
      className="grid min-h-screen grid-cols-1 md:grid-cols-2"
    >
      <div
        className="flex w-full flex-col items-center justify-center bg-[url(/ContactBg.png)] px-4 py-8 md:flex-row md:space-x-2 md:px-8 md:pt-0"
        style={{ backgroundColor: '#00FF00' }}
      >
        <h2 className="text-[31px] font-extrabold uppercase text-black md:text-[49px]">
          Entre em contato
        </h2>

        <ul className="grid grid-cols-3 items-center gap-4 md:grid-cols-2">
          <li className="flex h-16 w-16 scale-75 items-center justify-center rounded-lg bg-black text-white transition-colors hover:border hover:border-black hover:bg-transparent hover:text-black md:scale-100">
            <a
              href="https://wa.me/5599984232483"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandWhatsapp {...defaultIconProps} />
            </a>
          </li>
          <li className="flex h-16 w-16 scale-75 items-center justify-center rounded-lg bg-black text-white transition-colors hover:border hover:border-black hover:bg-transparent hover:text-black md:scale-100">
            <a
              href="https://instagram.com/glocalcidades"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandInstagram {...defaultIconProps} />
            </a>
          </li>
          <li className="flex h-16 w-16 scale-75 items-center justify-center rounded-lg bg-black text-white transition-colors hover:border hover:border-black hover:bg-transparent hover:text-black md:scale-100">
            <a
              href="https://facebook.com/profile.php?id=100089618828794"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandFacebook {...defaultIconProps} />
            </a>
          </li>
          <li className="flex h-16 w-16 scale-75 items-center justify-center rounded-lg bg-black text-white transition-colors hover:border hover:border-black hover:bg-transparent hover:text-black md:scale-100">
            <a
              href="https://twitter.com/glocalcidades"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandTwitter {...defaultIconProps} />
            </a>
          </li>
          <li className="flex h-16 w-16 scale-75 items-center justify-center rounded-lg bg-black text-white transition-colors hover:border hover:border-black hover:bg-transparent hover:text-black md:scale-100">
            <a
              href="https://www.linkedin.com/company/glocal-cidades/"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandLinkedin {...defaultIconProps} />
            </a>
          </li>
          <li className="flex h-16 w-16 scale-75 items-center justify-center rounded-lg bg-black text-white transition-colors hover:border hover:border-black hover:bg-transparent hover:text-black md:scale-100">
            <a
              href="https://youtube.com/@glocalcidades"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandYoutube {...defaultIconProps} />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center bg-[#171717] px-4 py-8 md:px-8">
        <Form />
      </div>
    </section>
  )
}

export default SectionSix
