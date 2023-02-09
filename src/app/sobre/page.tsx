'use client'
import Image from 'next/image'
import Link from 'next/link'

import { IconArrowBack } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
}

const About = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center bg-white px-4 py-8 md:px-16">
      <motion.div variants={variants} animate="in" initial="out" exit="out">
        <Link
          className="inline-flex items-center justify-center overflow-hidden bg-black py-2 px-4 font-bold uppercase text-white"
          href="/"
        >
          <span role="img" aria-label="ir para início">
            <IconArrowBack />
          </span>
          <span>Início</span>
        </Link>
        <div className="flex w-full flex-col space-y-4 rounded-b-lg bg-[#00CC00] p-4 md:relative md:w-[80%] md:p-16">
          <p className="text-base leading-[120%] text-white md:max-w-[80%] md:text-[25px] md:font-medium">
            O fundador da Glocal Cidades. Mestrando em Sociologia pela
            Universidade Federal de Alagoas (UFAL). Bacharel (2021) em Ciências
            Sociais pela Universidade Federal de Alagoas (UFAL). E está
            terminando uma especialização em Relações Internacionais
            Contemporâneas pela Universidade da Integração Latina Americana
            (UNILA). Na sua pesquisa de mestrado (em andamento), está preocupado
            em entender o campo da COVID-19 no Brasil. As suas principais áreas
            de interesse são: Sociologia da Ciência e da Tecnologia, Políticas
            Públicas, Desigualdade Social.
          </p>
          <div className="h-[80%] rounded-lg bg-white shadow-2xl md:absolute md:-right-1/4 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="relative aspect-square w-full md:aspect-auto md:h-[70%]">
              <Image
                className="rounded-t-lg object-cover"
                src="/CEO.jpg"
                alt=""
                fill
                priority
              />
            </div>
            <div className="p-4 text-center">
              <h1 className="text-[20px] font-semibold md:text-[31px]">
                Diego Queiroz
              </h1>
              <p className="text-base md:text-[25px]">Fundador</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
