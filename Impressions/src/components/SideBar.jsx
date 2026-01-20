import "../signUpStep.css";
import Logo from "./MyComponents/Logo.jsx";
const SideBar = ({ step, documentType }) => {
  const labels = ["PROJECT INFO", "DOCUMENTS", "REVIEW", "SETTINGS"];

  return (
    <div className="d-flex flex-column gap-3">
      <Logo logoHeight={85}></Logo>
      <ul className="steps list-unstyled mt-4 d-flex flex-column gap-4">
        {labels.map((el, index) => (
          <li
            className={`d-flex align-items-center gap-3 mb-3 border px-4 py-2 rounded border-white ${step === index + 1 ? "active bg-success border-2" : ""}`}
            key={index}
          >
            <span className=" d-flex align-items-center rounded-pill justify-content-center fw-bold fs-4    ">
              {index + 1}
            </span>
            <div>
              <small className="d-block">ETAPE {index + 1}</small>
              <strong>{el}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
