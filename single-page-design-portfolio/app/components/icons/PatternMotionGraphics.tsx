import * as React from "react";
import { SVGProps } from "react";

const SvgPatternMotionGraphics = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#F39E9E" strokeWidth={4} cx={80} cy={16} r={14} />
      <circle
        strokeOpacity={0.5}
        stroke="#F39E9E"
        strokeWidth={4}
        cx={48}
        cy={16}
        r={14}
      />
      <circle
        strokeOpacity={0.25}
        stroke="#F39E9E"
        strokeWidth={4}
        cx={16}
        cy={16}
        r={14}
      />
      <circle stroke="#FFF7F0" strokeWidth={4} cx={112} cy={16} r={14} />
      <path fill="#F39E9E" d="M128 64 96 32v32z" />
      <rect fill="#F6A560" x={32} y={32} width={64} height={32} rx={16} />
      <path
        d="M0 50v-4h8v4H0Zm28 0v-4h8v4h-8Zm28 0v-4h8v4h-8Z"
        fill="#FFF7F0"
      />
    </g>
  </svg>
);

export default SvgPatternMotionGraphics;
