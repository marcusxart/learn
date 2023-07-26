const RenewIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="37" height="37" rx="9.5" fill="white" />
      <g clipPath="url(#clip0_3934_110950)">
        <path
          d="M19 13V16L23 12L19 8V11C14.58 11 11 14.58 11 19C11 20.57 11.46 22.03 12.24 23.26L13.7 21.8C13.25 20.97 13 20.01 13 19C13 15.69 15.69 13 19 13ZM25.76 14.74L24.3 16.2C24.74 17.04 25 17.99 25 19C25 22.31 22.31 25 19 25V22L15 26L19 30V27C23.42 27 27 23.42 27 19C27 17.43 26.54 15.97 25.76 14.74Z"
          fill="#30D568"
        />
      </g>
      <rect x="0.5" y="0.5" width="37" height="37" rx="9.5" stroke="#DFE6E6" />
      <defs>
        <clipPath id="clip0_3934_110950">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RenewIcon;
