import { SVGProps } from "react";

const SvgPatternPhotography = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={160} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#EB7565" d="M32 0h64v64H32z" />
        <circle stroke="#030303" strokeWidth={4} cx={16} cy={16} r={14} />
        <circle stroke="#FFF7F0" strokeWidth={4} cx={64} cy={32} r={14} />
        <g fill="#030303">
          <path d="M128 32h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zm-28 24h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM128 60h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4z" />
        </g>
        <g fill="#030303">
          <path d="M128 0h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zm-28 4h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM128 28h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4z" />
        </g>
        <path fill="#FFF7F0" d="m96 32 32 32V32z" />
        <path fill="#552049" d="m96 32 32 32V32z" />
        <path fill="#F39E9E" d="M32 64 0 32v32z" />
        <path fill="#FFF7F0" d="m96 32 32-32v32z" />
      </g>
    </svg>
  );}

export default SvgPatternPhotography;
