import React, { useState } from "react";
import Logo from "./MyComponents/Logo.jsx";
import { Offcanvas, Button } from "react-bootstrap";
import Stepper from "./MyComponents/Stepper.jsx";

const SideBar = ({ step }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* ADD THE LOGO  */}

      {/* BUTTON HAMBURGER FOR MOBILE ONLY */}
      <Button
        className="d-md-none m-2"
        variant="success"
        onClick={() => setShow(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>{" "}
        Menu
      </Button>

      {/* SIDE BAR  DESKTOP */}
      <div
        className="bg-secondary text-white vh-100 p-3 d-none d-md-block"
        style={{ width: 260 }}
      >
        <Menu />
        {/* STEP INDICATOR */}
      </div>

      {/* SIDE BAR MOBILE */}
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
    // <div className="col-md-2 bg-secondary text-white align-items-center p-2 d-flex flex-column justify-content-between">
    //   <div className="row h-100 w-100">
    //     <ul className="list-unstyled my-auto d-flex flex-column justify-content-center gap-4">
    //       {["Projet", "Rapports", "Plans", "Settings"].map((item, index) => (
    //         <li
    //           key={item}
    //           className={`mb-4 d-flex align-items-center text-uppercase px-4 py-2 border border-2 rounded   ${
    //             step === index + 1 ? "fw-bold  bg-success" : "opacity-50"
    //           }`}
    //           onClick={() => setEtape(index + 1)}
    //         >
    //           <span
    //             className="me-3 rounded-circle bg-white"
    //             style={{ width: 20, height: 20 }}
    //           ></span>

    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

function Menu() {
  return (
    <>
      <div>
        <Logo logoHeight="50" />
      </div>

      <button className="btn btn-success w-100 mb-3 d-flex align-items-center justify-content-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="bi bi-journals"
          viewBox="0 0 16 16"
        >
          <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
          <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
        </svg>{" "}
        Projet
      </button>
      <button className="btn btn-secondary w-100 mb-3 d-flex align-items-center justify-content-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="bi bi-file-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0 2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0 2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
        </svg>
        Rapports
      </button>
      <button className="btn btn-secondary w-100 mb-3 d-flex align-items-center justify-content-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-map-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"
          />
        </svg>
        Plans
      </button>
      <button className="btn btn-secondary w-100 mb-3 d-flex align-items-center justify-content-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-gear-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
        Paramètres
      </button>
    </>
  );
}

export default SideBar;
