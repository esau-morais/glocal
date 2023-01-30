import { defaultIconProps } from '@/utils/constants'
import {
  IconCertificate,
  IconChartBar,
  IconFolders,
  IconNews,
  IconStackPush,
} from '@tabler/icons-react'

import { Card } from '../molecules'

const SectionFour = () => {
  return (
    <section className="min-h-screen bg-[#00FF00] px-4 pb-8 md:px-16 md:pb-[56px]">
      <div>
        <div className="relative col-span-12 space-y-12 px-4 pt-8 before:bg-black sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-0 sm:before:bottom-16 sm:before:-left-3 sm:before:w-0.5 md:pt-[calc(88px+56px)]">
          <div className="flex flex-col before:bg-black sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
            <h3 className="mb-1 text-[25px] font-extrabold uppercase text-black md:text-[49px]">
              Consultoria avançada
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8 px-4 md:px-16">
        <Card
          icon={<IconCertificate {...defaultIconProps} />}
          content="Regularização fiscal (CAUC)"
        />
        <Card
          icon={<IconFolders {...defaultIconProps} />}
          content="Levantamento da situação administrativa"
        />
        <Card
          icon={<IconNews {...defaultIconProps} />}
          content="Formulação de guia"
        />
        <Card
          icon={<IconChartBar {...defaultIconProps} />}
          content="Pesquisas qualitativas e quantitativas"
        />
        <Card
          icon={<IconStackPush {...defaultIconProps} />}
          content="Análise de dados públicos"
        />
      </div>
      <p className="mt-16 text-base font-medium leading-[120%] text-black md:text-[25px]">
        A Glocal Cidades oferece na consultoria avançada, além da Captação para
        Políticas Públicas Municipais, a Modernização da Gestão Pública
        Municipal. Com o intuito de aumentar a arrecadação municipal, buscamos a
        regularização do ente público junto ao CAUC, colaboramos para o
        levantamento da situação administrativa, burocrática e da gestão
        municipal, visando uma maior eficiência. A partir disso, construímos um
        guia para o planejamento municipal, no qual tratamos de apontar os
        principais pontos de melhoria e formas de solucionar os pontos
        levantados. A principal função da consultoria avançada é formular
        políticas públicas que cheguem com mais eficácia à população do
        município atendido, por isso realizamos as pesquisas qualitativas e
        quantitativas, com o intuito de conhecer com mais profundidade os
        problemas enfrentados e complementamos isso com a análise de dados
        públicos disponíveis, como dados do IBGE, dados estaduais e federais.
      </p>
    </section>
  )
}

export default SectionFour
