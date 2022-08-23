import { SVGProps } from "react";

const SvgPatternUiUx = (props: SVGProps<SVGSVGElement>) => {
return (
  <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#030303" strokeWidth={4} cx={48} cy={16} r={14} />
      <path fill="#EB7565" d="M0 0h32v32H0z" />
      <g fill="#030303">
        <path d="M0 32h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4zM0 46h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4zM0 60h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4z" />
      </g>
      <path fill="#FFF7F0" d="m32 32 32 32V32z" />
    </g>
  </svg>
)};

export default SvgPatternUiUx;
