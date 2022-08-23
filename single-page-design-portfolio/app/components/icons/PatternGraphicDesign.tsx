import * as React from "react";
import { SVGProps } from "react";

const SvgPatternGraphicDesign = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={192} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#552049" d="M0 0h64v128H0z" />
      <circle stroke="#FFF7F0" strokeWidth={4} cx={32} cy={32} r={14} />
      <g transform="translate(32 32)">
        <rect fill="#F6A560" x={32} width={64} height={32} rx={16} />
        <path fill="#61C4B7" d="m0 128 32 32v-32zm32-32 32 32V96z" />
        <circle stroke="#FFF7F0" strokeWidth={4} cx={80} cy={16} r={14} />
        <circle stroke="#FFF7F0" strokeWidth={4} cx={80} cy={16} r={14} />
      </g>
      <path d="M64 14h4v4h-4zm4 0h4v4h-4zm24 0h4v4h-4z" fill="#030303" />
      <path fill="#755CDE" d="m96 0 32 32V0z" />
      <path d="M96 14h4v4h-4zm24 0h4v4h-4zm4 0h4v4h-4z" fill="#030303" />
      <circle stroke="#030303" strokeWidth={4} cx={80} cy={80} r={14} />
      <path fill="#EB7565" d="M96 64h32v32H96z" />
      <path fill="#FFF7F0" d="m32 96 96 96V96z" />
      <g fill="#030303">
        <path d="M0 128h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4zM0 142h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4zM0 156h4v4H0zm14 0h4v4h-4zm14 0h4v4h-4z" />
      </g>
    </g>
  </svg>
);

export default SvgPatternGraphicDesign;
