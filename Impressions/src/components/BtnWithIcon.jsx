const BtnWithIcon = ({ type, btnLabel, onClick, children }) => {
  return (
    <button
      className={
        btnLabel === "Rapport"
          ? "btn btn-outline-success fw-bold"
          : "btn btn-outline-info fw-bold"
      }
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={
          btnLabel === "Rapport"
            ? "bi bi-file-earmark-text-fill me-2"
            : "bi bi-printer-fill me-2"
        }
        viewBox="0 0 16 16"
      >
        {children}
      </svg>
      {btnLabel}
    </button>
  );
};

export default BtnWithIcon;
