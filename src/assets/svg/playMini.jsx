const PlayMini = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.36133 8.02035V17.5904C4.36133 19.5504 6.49133 20.7804 8.19133 19.8004L12.3413 17.4104L16.4913 15.0104C18.1913 14.0304 18.1913 11.5804 16.4913 10.6004L12.3413 8.20035L8.19133 5.81035C6.49133 4.83035 4.36133 6.05035 4.36133 8.02035Z"
        fill="#7C8080"
      />
    </svg>
  );
};

export default PlayMini;
