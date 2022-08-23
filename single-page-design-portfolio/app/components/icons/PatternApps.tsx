import * as React from "react";
import { SVGProps } from "react";

const SvgPatternApps = (props: SVGProps<SVGSVGElement>) => (
  <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 32)">
        <rect fill="#552049" width={64} height={32} rx={16} />
        <circle stroke="#FFF7F0" strokeWidth={4} cx={48} cy={16} r={14} />
      </g>
      <path d="M0 14h4v4H0zm4 0h4v4H4zm24 0h4v4h-4z" fill="#030303" />
      <path fill="#755CDE" d="m32 0 32 32V0z" />
      <path d="M32 14h4v4h-4zm24 0h4v4h-4zm4 0h4v4h-4z" fill="#030303" />
    </g>
  </svg>
);

export default SvgPatternApps;
