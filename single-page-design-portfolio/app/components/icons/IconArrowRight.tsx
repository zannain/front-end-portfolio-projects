import * as React from "react";
import { SVGProps } from "react";

const SvgIconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={15} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#FFF"
      d="m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z"
    />
  </svg>
);

export default SvgIconArrowRight;