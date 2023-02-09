'use client'
import Image from 'next/image'

import PolymorphicButton from '../atoms/PolymorphicButton'

const SectionOne = () => {
  return (
    <section
      id="main"
      className="relative grid min-h-screen grid-cols-1 px-4 pt-[calc(88px+56px)] pb-[56px] md:grid-cols-2 md:px-16"
    >
      <Image
        className="max-w-full object-cover"
        src="/MainBg.png"
        alt=""
        fill
        draggable={false}
        priority
      />
      <div className="relative flex flex-col items-start">
        <h1 className="text-[31px] font-extrabold uppercase text-[#00FF00] md:text-[61px]">
          Desenvolvimento urbano integral
        </h1>
        <div className="relative h-[71px] w-[60%] md:w-[80%]">
          <Image src="/Logo.svg" alt="Logo" fill loading="lazy" />
        </div>
      </div>
      <div className="relative flex flex-col items-start space-y-6 md:mt-auto md:h-[calc(100vh-88px-56px)] md:items-start md:self-end">
        <p className="font-medium text-white md:mt-auto md:text-[25px]">
          Conhecimento técnico especializado para formulação e viabilização de
          políticas públicas em todas as áreas.
        </p>
        <PolymorphicButton
          className="group relative inline-flex items-center justify-center overflow-hidden border border-white bg-transparent py-2 px-4 font-bold uppercase text-white hover:border hover:border-black hover:text-black"
          onClick={() => document.getElementById('our-work')?.scrollIntoView()}
        >
          <span className="absolute h-0 w-0 rounded-full bg-[#00FF00] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
          <span className="relative">Saiba mais</span>
        </PolymorphicButton>
      </div>
    </section>
  )
}

export default SectionOne
