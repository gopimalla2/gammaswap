const ETH = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#E8EDEE"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      ></path>
      <path fill="#292A2A" d="M12.374 3v6.652l5.623 2.513L12.374 3z"></path>
      <path fill="#767879" d="M12.373 3L6.75 12.165l5.623-2.512V3z"></path>
      <path fill="#292A2A" d="M12.374 16.476v4.52L18 13.212l-5.626 3.264z"></path>
      <path fill="#767879" d="M12.373 20.996v-4.521L6.75 13.212l5.623 7.784z"></path>
      <path fill="#141414" d="M12.374 15.43l5.623-3.265-5.623-2.511v5.776z"></path>
      <path fill="#2E2F2F" d="M6.75 12.165l5.623 3.265V9.654l-5.623 2.51z"></path>
    </svg>
  );
};

export default ETH;
