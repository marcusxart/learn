const CloseWithCircle = ({ onClick }) => {
  return (
    <svg
      width="35"
      onClick={onClick}
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="17.5762" cy="17.2148" rx="13.5" ry="13" fill="white" />
      <path
        d="M12.834 12.9414L21.3193 21.4267"
        stroke="#FEBF10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8331 21.4267L21.3184 12.9414"
        stroke="#FEBF10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseWithCircle;
