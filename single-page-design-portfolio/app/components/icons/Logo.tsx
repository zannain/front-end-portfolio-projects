import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#030303" d="M0 0h64v64H0z" />
      <circle stroke="#FFF7F0" strokeWidth={4} cx={32} cy={32} r={14} />
    </g>
  </svg>
);

export default SvgLogo;
