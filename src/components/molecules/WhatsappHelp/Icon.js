import React from "react";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      viewBox="0 0 64 64"
    >
      <defs>
        <path
          id="path-1"
          d="M56 56H10C4.477 56 0 51.523 0 46V10C0 4.477 4.477 0 10 0h36c5.523 0 10 4.477 10 10v46z"
        />
        <filter
          id="filter-2"
          width="125%"
          height="125%"
          x="-12.5%"
          y="-8.9%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.371490036 0 0 0 0 0.370067218 0 0 0 0 0.370067218 0 0 0 0.5 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-285 -907)">
          <g transform="translate(289 909)">
            <g>
              <g>
                <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1" />
                <path
                  fill="#44D77D"
                  stroke="#FFF"
                  strokeLinejoin="square"
                  strokeWidth="3"
                  d="M46 1.5H10a8.473 8.473 0 00-6.01 2.49A8.473 8.473 0 001.5 10v36c0 2.347.951 4.472 2.49 6.01A8.473 8.473 0 0010 54.5h44.5V10a8.473 8.473 0 00-2.49-6.01A8.473 8.473 0 0046 1.5z"
                />
              </g>
              <g fill="#FFF" transform="translate(16 17)">
                <path d="M23.731 17.086c-.614-.318-3.639-1.857-4.203-2.07-.563-.212-.974-.317-1.383.32-.41.636-1.59 2.069-1.948 2.493-.359.424-.717.478-1.333.16-.615-.32-2.597-.991-4.946-3.158-1.828-1.687-3.063-3.77-3.422-4.406-.358-.637-.003-.948.27-1.298.666-.855 1.333-1.751 1.537-2.176.206-.424.103-.796-.051-1.114-.153-.318-1.384-3.449-1.896-4.723C5.856-.126 5.35.042 4.972.022A23.803 23.803 0 003.793 0c-.41 0-1.077.16-1.64.796C1.589 1.433 0 2.972 0 6.102s2.204 6.155 2.512 6.58c.307.424 4.337 6.849 10.507 9.604a34.407 34.407 0 003.507 1.34c1.473.484 2.814.416 3.874.252 1.182-.183 3.639-1.539 4.152-3.024.512-1.486.512-2.76.358-3.025-.153-.266-.564-.424-1.179-.743z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export default WhatsAppIcon;
