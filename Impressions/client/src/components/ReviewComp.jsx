import React, { useState } from "react";
import TableReview from "./MyComponents/TableReview";

function ReviewComp({ projet }) {
  const elements = projet.documents.Rapports;

  const elementsValues = elements.map((el) => Object.values(el))[0];
  console.log(elementsValues);

  return (
    <>
      <div className="container w-75 card card-body mb-5">
        <h2 className=" fw-semibold text-uppercase letter-1">Infos Projet</h2>
        <hr color="#1f8b4c;" style={{ height: "2px" }} />
        <ul className="list-group">
          <li className="list-group-item   text-uppercase">
            <span className="fw-bold text-underline fs-5 text-success">
              Nom Projet :{" "}
            </span>
            <br /> {projet.projet}
          </li>
          <li className="list-group-item   text-uppercase">
            <span className="fw-bold text-underline fs-5 text-success">
              Description Projet :
            </span>
            <br />
            <p> {projet.descriptionProjet}</p>
          </li>
        </ul>
      </div>

      {projet.documents.Rapports.length !== 0 &&
        // prettier-ignore
        <TableReview title={"Rapports"} tabsHeader={["Nom","Description","Format","Pages","Exemplaires","Pages Imprimer","Actions",]}
          doc={projet.documents.Rapports}
        />}

      {
        // prettier-ignore
        projet.documents.Plans.length !==0 && <TableReview title={"Plans"} tabsHeader={ ["Nom","Description","Format","Pages","Exemplaires","Pages Imprimer","Actions",]} doc={projet.documents.Plans} />
      }
    </>
  );
}

export default ReviewComp;
