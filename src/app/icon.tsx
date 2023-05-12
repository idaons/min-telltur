// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-an-icon
import { ImageResponse } from "next/server";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";
export const runtime = "edge";

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5 2.25a.75.75 0 0 1 .75.75v2.25H17a.75.75 0 0 1 .6.3l3 4c.2.267.2.633 0 .9l-3 4a.75.75 0 0 1-.6.3h-4.75V21a.75.75 0 0 1-1.5 0v-6.25H4a.75.75 0 0 1-.6-1.2L6.063 10 3.4 6.45a.75.75 0 0 1 .6-1.2h6.75V3a.75.75 0 0 1 .75-.75Zm0 11h5.125L19.063 10l-2.438-3.25H5.5l2.1 2.8c.2.267.2.633 0 .9l-2.1 2.8h6Z"
            fill="white"
          ></path>
        </svg>
      </div>
    ),
    size
  );
}
