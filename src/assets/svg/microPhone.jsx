const MicrophoneIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
        stroke="#4A4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11"
        stroke="#4A4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.11035 7.47969C10.8904 6.82969 12.8304 6.82969 14.6104 7.47969"
        stroke="#4A4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0303 10.4799C11.2303 10.1499 12.5003 10.1499 13.7003 10.4799"
        stroke="#4A4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MicrophoneIcon;
