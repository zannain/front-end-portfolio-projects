import * as React from "react";
import { SVGProps } from "react";

const SvgIconArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={15} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#FFF"
      d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z"
    />
  </svg>
);

export default SvgIconArrowLeft;
