'use client'
import { defaultIconProps } from '@/utils/constants'
import { IconCoin, IconBrandAsana, IconSearch } from '@tabler/icons-react'

import { Card } from '../molecules'

const SectionThree = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-8 md:px-16 md:pb-0 md:pt-[calc(88px+56px)]">
      <div>
        <div className="relative col-span-12 min-h-screen space-y-12 pb-[56px] before:bg-black sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-8 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5">
          <div className="flex flex-col pl-4 before:bg-black sm:relative sm:before:absolute sm:before:top-6 sm:before:left-[-19px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
            <h3 className="mb-1 text-[25px] font-extrabold uppercase md:text-[49px]">
              Consultoria básica
            </h3>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 px-4 md:px-16">
              <Card
                icon={<IconCoin {...defaultIconProps} />}
                content="Captação de recursos"
              />
              <Card
                icon={<IconBrandAsana {...defaultIconProps} />}
                content="Elaboração de projetos"
              />
              <Card
                icon={<IconSearch {...defaultIconProps} />}
                content="Prestação de contas de convênios"
              />
            </div>
            <p className="mt-8 text-base font-medium leading-[120%] md:text-[25px]">
              A Glocal Cidades entrega na sua consultoria básica captação de
              recursos para elaboração de políticas públicas municipais.
              Oferecemos a possibilidade de aumento das receitas municipais com
              a arrecadação de transferências da união. A consultoria trabalha,
              principalmente, com a elaboração de projetos técnicos para os
              municípios estabelecerem convênios com o governo federal e
              receberem as transferências voluntárias para execução de políticas
              públicas, em todas as áreas. Trabalhamos também com a prestação de
              contas, após a execução do projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
