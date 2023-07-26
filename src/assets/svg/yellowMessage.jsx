const YellowMessage = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.37906 17.2372H7.93344C4.36844 17.2372 2.58594 16.3459 2.58594 11.8897V7.43344C2.58594 3.86844 4.36844 2.08594 7.93344 2.08594H15.0634C18.6284 2.08594 20.4109 3.86844 20.4109 7.43344V11.8897C20.4109 15.4547 18.6284 17.2372 15.0634 17.2372H14.6178C14.3415 17.2372 14.0742 17.3709 13.9048 17.5937L12.5679 19.3762C11.9797 20.1605 11.0172 20.1605 10.4289 19.3762L9.09206 17.5937C8.94946 17.3976 8.6197 17.2372 8.37906 17.2372Z"
        stroke="#FEBF10"
        strokeWidth="1.0856"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.04688 7.43359H15.9594"
        stroke="#FEBF10"
        strokeWidth="1.0856"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.04688 11.8906H12.3944"
        stroke="#FEBF10"
        strokeWidth="1.0856"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default YellowMessage;
