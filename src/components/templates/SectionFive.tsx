import Image from 'next/image'

import { CheckIcon } from '../atoms'
import { Card } from '../molecules'

const SectionFive = () => {
  return (
    <section className="min-h-screen bg-[#171717] pb-[56px]">
      <div className="relative top-[40px] h-[200px] w-full md:h-[422px]">
        <Image
          className="max-w-full object-cover"
          src="/DifferentialsBg.png"
          alt=""
          fill
          draggable={false}
          loading="lazy"
        />
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[31px] font-extrabold uppercase text-[#00FF00] md:text-[49px]">
          Diferenciais
        </h2>
      </div>

      <div className="mt-32 flex flex-wrap items-center justify-center gap-8 px-4 md:px-16">
        <Card
          type="minimal"
          icon={<CheckIcon />}
          content="Pesquisadores qualificados"
        />
        <Card
          type="minimal"
          icon={<CheckIcon />}
          content="Conhecimento técnico especializado"
        />
        <Card
          type="minimal"
          icon={<CheckIcon />}
          content="Articulação entre conhecimento técnico e prática"
        />
        <Card
          type="minimal"
          icon={<CheckIcon />}
          content="Foco no desenvolvimento municipal"
        />
        <Card
          type="minimal"
          icon={<CheckIcon />}
          content="Planejamento de cidades inteligentes e sustentáveis"
        />
      </div>
    </section>
  )
}

export default SectionFive
