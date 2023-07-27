import React from "react";

const SettingIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 17.1094V22.8794C11 24.9994 11 24.9994 13 26.3494L18.5 29.5294C19.33 30.0094 20.68 30.0094 21.5 29.5294L27 26.3494C29 24.9994 29 24.9994 29 22.8894V17.1094C29 14.9994 29 14.9994 27 13.6494L21.5 10.4694C20.68 9.98937 19.33 9.98937 18.5 10.4694L13 13.6494C11 14.9994 11 14.9994 11 17.1094Z"
        stroke="#313333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z"
        stroke="#313333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" stroke="#DFE6E6" />
    </svg>
  );
};

export default SettingIcon;
