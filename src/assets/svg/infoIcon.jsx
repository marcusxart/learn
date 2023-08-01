import React from "react";

const InfoIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.52344C4.875 1.52344 1.5 4.89844 1.5 9.02344C1.5 13.1484 4.875 16.5234 9 16.5234C13.125 16.5234 16.5 13.1484 16.5 9.02344C16.5 4.89844 13.125 1.52344 9 1.52344Z"
        stroke="#C6CCCC"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.0234L9 8.27344"
        stroke="#C6CCCC"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00391 6.02344L8.99717 6.02344"
        stroke="#C6CCCC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;
