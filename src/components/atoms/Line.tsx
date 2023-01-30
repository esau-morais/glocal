import { SVGAttributes } from 'react'

const Line = ({ width, ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="1"
      fill="none"
      viewBox="0 0 1312 1"
      {...props}
    >
      <path
        stroke="url(#paint0_linear_109_2)"
        strokeLinecap="round"
        d="M0.5 0.5L1311.5 0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_109_2"
          x1="0"
          x2="1311.99"
          y1="1"
          y2="4.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.02" />
          <stop offset="0.271" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="0.519" stopColor="#fff" stopOpacity="0.8" />
          <stop offset="0.781" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Line
