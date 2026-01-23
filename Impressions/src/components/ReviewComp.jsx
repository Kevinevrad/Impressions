import React, { useState } from "react";

function ReviewComp({ projet }) {
  const elements = projet.documents.Rapports;

  const elementsValues = elements.map((el) => Object.values(el))[0];
  console.log(elementsValues);

  return (
    <>
      <h2 className="display-6">Rapport</h2>
      <hr color="#1f8b4c;" style={{ height: "2px" }} />
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            {[
              "Nom",
              "Description",
              "Format",
              "Nombre De Pages",
              "Nombre D'exemplaires",
              "Pages Imprimer",
              "Actions",
            ].map((el, index) => (
              <th className="bg-success text-white text-center" key={index}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {elementsValues.map((el, index) => (
              <td className="text-center" key={index}>
                {el}
              </td>
            ))}
            {elements.map((el, index) => (
              <td key={index} className="d-flex gap-2 justify-content-center">
                {" "}
                {["Edit", "Delete"].map((btn, index) => (
                  <button
                    key={index}
                    className={`py-1 btn d-flex justify-content-center align-items-center ${btn === "Edit" ? "btn-outline-primary" : "btn-outline-danger"}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={
                        btn === "Edit"
                          ? "bi bi-pen-fill me-2"
                          : "bi bi-trash3-fill me-2"
                      }
                      viewBox="0 0 16 16"
                    >
                      {btn === "Edit" ? (
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                      ) : (
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                      )}
                    </svg>
                    {btn}
                  </button>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ReviewComp;
