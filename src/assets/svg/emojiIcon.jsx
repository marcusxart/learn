const EmojiIcon = ({ onClick }) => {
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
        d="M19.0697 4.95008C23.0397 8.92008 22.9697 15.4 18.8697 19.29C15.0797 22.88 8.92972 22.88 5.12972 19.29C1.01972 15.4 0.949706 8.92008 4.92971 4.95008C8.82971 1.04008 15.1697 1.04008 19.0697 4.95008Z"
        stroke="#ADB3B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8399 16.0703C13.7199 18.0703 10.2799 18.0703 8.16992 16.0703"
        stroke="#ADB3B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66443 8.98633H8.67341"
        stroke="#ADB3B3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8353 8.98633H15.8443"
        stroke="#ADB3B3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmojiIcon;
