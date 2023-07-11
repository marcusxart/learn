export const DocumentIcon = ({ width, height, fill, onClick }) => (
  <svg
    onClick={onClick}
    width={width || "24"}
    height={height || "25"}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 12.1797H15M9 16.1797H15M17 21.1797H7C5.89543 21.1797 5 20.2843 5 19.1797V5.17969C5 4.07512 5.89543 3.17969 7 3.17969H12.5858C12.851 3.17969 13.1054 3.28504 13.2929 3.47258L18.7071 8.88679C18.8946 9.07433 19 9.32868 19 9.5939V19.1797C19 20.2843 18.1046 21.1797 17 21.1797Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
