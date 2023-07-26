const MailIcon = ({ onClick }) => {
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
      <path
        d="M24 27.5H14C11 27.5 9 26 9 22.5V15.5C9 12 11 10.5 14 10.5H24C27 10.5 29 12 29 15.5V22.5C29 26 27 27.5 24 27.5Z"
        stroke="#4A4D4D"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 16L20.87 18.5C19.84 19.32 18.15 19.32 17.12 18.5L14 16"
        stroke="#4A4D4D"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="37" height="37" rx="9.5" stroke="#DFE6E6" />
    </svg>
  );
};

export default MailIcon;
