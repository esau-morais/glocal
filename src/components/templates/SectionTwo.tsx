import Image from 'next/image'

const SectionTwo = () => {
  return (
    <section
      id="our-work"
      className="grid min-h-screen items-center justify-items-center gap-8 bg-[#171717] px-4 py-8 md:grid-cols-2 md:gap-0 md:px-16 md:pb-[56px] md:pt-[calc(88px+56px)]"
    >
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-[31px] font-extrabold uppercase text-[#00FF00] md:text-[49px]">
          Nosso trabalho
        </h2>
        <p className="text-base font-medium leading-[120%] text-white md:text-[25px]">
          A Glocal Cidades é uma empresa de consultoria que trabalha com o
          executivo municipal com foco na melhoria da administração pública,
          trazendo a aplicação de conhecimento especializado para captação de
          recursos, formulação de políticas públicas, regularização fiscal,
          diagnóstico social e eficácia no planejamento municipal, com uma
          metodologia que busca integrar o social, o econômico e o ambiental,
          pensando cidades inteligentes e sustentáveis.
        </p>
      </div>
      <Image
        src="/Mockup.png"
        alt="Mockup"
        width={400}
        height={266}
        loading="lazy"
      />
    </section>
  )
}

export default SectionTwo
