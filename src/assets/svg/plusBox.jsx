const PlusBox = ({ onClick }) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect x="0.5" y="0.5" width="37" height="37" rx="9.5" fill="white" />
      <g clipPath="url(#clip0_3934_110994)">
        <path
          d="M27.54 12.23L26.15 10.55C25.88 10.21 25.47 10 25 10H13C12.53 10 12.12 10.21 11.84 10.55L10.46 12.23C10.17 12.57 10 13.02 10 13.5V26C10 27.1 10.9 28 12 28H26C27.1 28 28 27.1 28 26V13.5C28 13.02 27.83 12.57 27.54 12.23ZM13.24 12H24.76L25.59 13H12.42L13.24 12ZM12 26V15H26V26H12ZM15 21H17.55V24H20.45V21H23L19 17L15 21Z"
          fill="#30D568"
        />
      </g>
      <rect x="0.5" y="0.5" width="37" height="37" rx="9.5" stroke="#DFE6E6" />
      <defs>
        <clipPath id="clip0_3934_110994">
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

export default PlusBox;
