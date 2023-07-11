import React from "react";

const XMarkCircleIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="22" fill="#0C0D0D" fillOpacity="0.3" />
      <g clipPath="url(#clip0_4100_124483)">
        <path
          d="M29 16.41L27.59 15L22 20.59L16.41 15L15 16.41L20.59 22L15 27.59L16.41 29L22 23.41L27.59 29L29 27.59L23.41 22L29 16.41Z"
          fill="#FEBF10"
        />
      </g>
      <defs>
        <clipPath id="clip0_4100_124483">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default XMarkCircleIcon;
