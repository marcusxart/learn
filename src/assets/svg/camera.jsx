import React from "react";

const CameraIcon = ({ onClick }) => {
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
      <path
        d="M13 19C13 17.8954 13.8954 17 15 17H15.9296C16.5983 17 17.2228 16.6658 17.5937 16.1094L18.4063 14.8906C18.7772 14.3342 19.4017 14 20.0704 14H23.9296C24.5983 14 25.2228 14.3342 25.5937 14.8906L26.4063 16.1094C26.7772 16.6658 27.4017 17 28.0704 17H29C30.1046 17 31 17.8954 31 19V28C31 29.1046 30.1046 30 29 30H15C13.8954 30 13 29.1046 13 28V19Z"
        stroke="#E6AD0E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 23C25 24.6569 23.6569 26 22 26C20.3431 26 19 24.6569 19 23C19 21.3431 20.3431 20 22 20C23.6569 20 25 21.3431 25 23Z"
        stroke="#E6AD0E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CameraIcon;
