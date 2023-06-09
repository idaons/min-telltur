import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PinIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="img"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.58 5.58a6.25 6.25 0 0 1 8.84 0c2.409 2.41 2.3 6.175-.037 8.88-.484.56-1.73 2.083-2.846 3.453l-1.48 1.824-.057.07-.057-.07c-.39-.481-.92-1.135-1.48-1.823-1.115-1.371-2.361-2.895-2.845-3.455C5.28 11.755 5.17 7.99 7.58 5.581Zm5.004 15.891L12 21l-.583.471h-.001l-.002-.003-.009-.01-.033-.042-.129-.16-.466-.575c-.39-.481-.918-1.134-1.477-1.82-1.123-1.38-2.351-2.882-2.817-3.42-2.762-3.196-3.02-7.863.037-10.921a7.75 7.75 0 0 1 10.96 0c3.058 3.058 2.8 7.725.037 10.92-.465.539-1.694 2.04-2.816 3.42a1103.324 1103.324 0 0 0-1.944 2.397l-.128.159-.034.041-.009.01-.002.003v.001ZM12 21l.584.471a.75.75 0 0 1-1.167 0L12 21ZM9.75 10a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 6.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
      fill="currentColor"
    ></path>
  </svg>
);
export default PinIcon;
