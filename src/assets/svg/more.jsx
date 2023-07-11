import React from "react";

const More = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13315_64115)">
        <path
          d="M12.3623 8.11719C13.4623 8.11719 14.3623 7.21719 14.3623 6.11719C14.3623 5.01719 13.4623 4.11719 12.3623 4.11719C11.2623 4.11719 10.3623 5.01719 10.3623 6.11719C10.3623 7.21719 11.2623 8.11719 12.3623 8.11719ZM12.3623 10.1172C11.2623 10.1172 10.3623 11.0172 10.3623 12.1172C10.3623 13.2172 11.2623 14.1172 12.3623 14.1172C13.4623 14.1172 14.3623 13.2172 14.3623 12.1172C14.3623 11.0172 13.4623 10.1172 12.3623 10.1172ZM12.3623 16.1172C11.2623 16.1172 10.3623 17.0172 10.3623 18.1172C10.3623 19.2172 11.2623 20.1172 12.3623 20.1172C13.4623 20.1172 14.3623 19.2172 14.3623 18.1172C14.3623 17.0172 13.4623 16.1172 12.3623 16.1172Z"
          fill="#323232"
        />
      </g>
      <defs>
        <clipPath id="clip0_13315_64115">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.362305 0.117188)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default More;
