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

const Belief = () => {
  return (
    <section className="min-h-screen bg-[url(/BeliefBg.jpg)] bg-cover bg-left bg-no-repeat px-4 py-8 md:px-16">
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
        <div className="bg-[#282828] bg-opacity-95 px-8 py-4 md:px-16 md:py-8">
          <div className="relative h-[71px] w-auto">
            <Image src="/Logo.svg" alt="Logo" fill />
          </div>

          <div className="grid-col-1 grid gap-16 justify-self-center md:grid-cols-2">
            <div className="flex flex-col items-start">
              <h2 className="text-[31px] font-extrabold uppercase text-[#00FF00] md:text-[49px]">
                Missão
              </h2>
              <p className="text-white">
                Trazer solução aos problemas da população dos municípios
                brasileiros pela busca de aplicação de conhecimento técnico
                especializado na administração pública, visando a melhoria da
                qualidade de vida em todas as áreas de forma integral.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[31px] font-extrabold uppercase text-[#00FF00] md:text-[49px]">
                Valores
              </h2>
              <p className="text-white">
                Compromisso com a melhoria da vida humana pela busca de cidades
                mais iguais que contribuem para uma vida integral e justa, em
                que os cidadãos possam desfrutar de projetos que pensam no
                social, econômico e ambiental e que possam vivam em cidades
                inteligentes e sustentáveis.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[31px] font-extrabold uppercase text-[#00FF00] md:text-[49px]">
                Visão
              </h2>
              <p className="text-white">
                Contribuir para o desenvolvimento urbano, fazendo com que a
                nossa consultoria possa ajudar no planejamento das cidades mais
                justas.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Belief
