const EditIcon = ({ stroke, onClick }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9.71094 1.66797H8.04427C3.8776 1.66797 2.21094 3.33464 2.21094 7.5013V12.5013C2.21094 16.668 3.8776 18.3346 8.04427 18.3346H13.0443C17.2109 18.3346 18.8776 16.668 18.8776 12.5013V10.8346"
        stroke={stroke || "#FEBF10"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9144 2.51639L7.34775 9.08306C7.09775 9.33306 6.84775 9.82472 6.79775 10.1831L6.43942 12.6914C6.30608 13.5997 6.94775 14.2331 7.85608 14.1081L10.3644 13.7497C10.7144 13.6997 11.2061 13.4497 11.4644 13.1997L18.0311 6.63306C19.1644 5.49972 19.6977 4.18306 18.0311 2.51639C16.3644 0.849722 15.0478 1.38306 13.9144 2.51639Z"
        stroke={stroke || "#FEBF10"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9688 3.45703C13.5271 5.4487 15.0854 7.00703 17.0854 7.5737"
        stroke={stroke || "#FEBF10"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default EditIcon;
