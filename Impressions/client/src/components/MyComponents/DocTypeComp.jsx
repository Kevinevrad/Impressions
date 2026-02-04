import React, { useState } from "react";
import rapport from "../../assets/img/rapport.png";
import plan from "../../assets/img/plan.png";

const DocTypeComp = ({ documentType }) => {
  const docsType = ["Rapport", "Plan"];

  const handleSelect = (type) => {
    if (type === "Rapport") {
      documentType("Rapport");
    } else if (type === "Plan") {
      documentType("Plan");
    }
  };

  return (
    <div className=" w-100 border p-4 rounded-3 justify-content-center d-flex gap-5">
      {docsType.map((type, index) => (
        <button
          type="button"
          className="w-50 btn btn-outline-success p-0"
          key={index}
          onClick={() => handleSelect(type)}
        >
          <div
            key={index}
            className="d-flex flex-column gap-3 py-4 px-2 align-items-center justify-content-between"
          >
            <img
              src={type === "Rapport" ? rapport : plan}
              alt={type === "Rapport" ? "Rapport" : "Plan"}
              style={{ height: "90px" }}
            />
            <h3 className="fw-bold">{type.toUpperCase()}</h3>
          </div>
        </button>
      ))}
    </div>
  );
};

export default DocTypeComp;
