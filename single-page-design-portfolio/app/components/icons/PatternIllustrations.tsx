import * as React from "react";
import { SVGProps } from "react";

const SvgPatternIllustrations = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(64)">
        <circle stroke="#FFF7F0" strokeWidth={4} cx={48} cy={16} r={14} />
        <path fill="#755CDE" d="M0 0h32v32H0z" />
        <g fill="#030303">
          <path d="M32 32h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM32 46h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM32 60h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4z" />
        </g>
        <path fill="#F39E9E" d="m0 32 32 32V32z" />
      </g>
      <g fill="#030303">
        <path d="M32 32h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM32 56h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM32 60h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4z" />
      </g>
      <g fill="#030303">
        <path d="M32 0h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM32 4h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4zM32 28h4v4h-4zm14 0h4v4h-4zm14 0h4v4h-4z" />
      </g>
      <path fill="#61C4B7" d="m0 32 32 32V32z" />
      <path fill="#FFF7F0" d="M32 0 0 32V0z" />
    </g>
  </svg>
);

export default SvgPatternIllustrations;
