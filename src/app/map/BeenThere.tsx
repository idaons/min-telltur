import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#00ff00"
      fillRule="evenodd"
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M16.5725 9.48447C16.8401 9.16827 16.8007 8.69503 16.4845 8.42748C16.1683 8.15992 15.695 8.19935 15.4275 8.51556L10.454 14.3933L8.03033 11.9697C7.73744 11.6768 7.26256 11.6768 6.96967 11.9697C6.67678 12.2626 6.67678 12.7375 6.96967 13.0303L9.96967 16.0303C10.118 16.1787 10.3216 16.2581 10.5312 16.2494C10.7407 16.2407 10.9371 16.1446 11.0725 15.9845L16.5725 9.48447Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
