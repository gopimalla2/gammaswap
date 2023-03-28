const Info = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
      className={className}
    >
      <path
        fill="#969696"
        fillRule="evenodd"
        d="M9.8 5A4.8 4.8 0 11.2 5a4.8 4.8 0 019.6 0zM5.6 2.6a.6.6 0 11-1.2 0 .6.6 0 011.2 0zM4.4 4.4a.6.6 0 000 1.2v1.8A.6.6 0 005 8h.6a.6.6 0 000-1.2V5a.6.6 0 00-.6-.6h-.6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Info;
