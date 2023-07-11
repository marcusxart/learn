const ArrowDown = ({ width, height, fill }) => (
  <svg
    width={width || "30"}
    height={height || "30"}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.6094 10.5813L15.0031 21.1875L4.39688 10.5813L6.16438 8.8125L15.0031 17.6525L23.8419 8.8125L25.6094 10.5813Z"
      fill={fill || "#F5F7F7"}
    />
  </svg>
);

export default ArrowDown;
