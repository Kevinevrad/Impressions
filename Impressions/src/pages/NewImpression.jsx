import { useState } from "react";

import SideBar from "../components/SideBar";
import Logo from "../components/MyComponents/Logo.jsx";
import FormRapport from "../components/FormRapport.jsx";
import ImpHeader from "../components/MyComponents/ImpHeader.jsx";
import ProjectForm from "../components/ProjectForm.jsx";
import FormPlan from "../components/FormPlan.jsx";
import "../signUpStep.css";
import DocTypeComp from "../components/MyComponents/DocTypeComp.jsx";
import ReviewComp from "../components/ReviewComp.jsx";

const NewImpression = ({ setMyProjects }) => {
  const [etape, setEtape] = useState(1);
  const [docType, setDocType] = useState("");

  const [projet, setProjet] = useState({
    documents: {
      Rapports: [],
      Plans: [],
      Autres: [],
    },
  });

  return (
    <div className="container-fluid min-vh-100 d-flex w-100 p-0">
      {/* SIDEBAR */}
      <div className="sidebar bg-secondary text-white p-4 d-flex flex-column align-items-center justify-content-start">
        <SideBar step={etape} documentType={docType} />
      </div>

      {/* MAIN CONTENT */}
      <div className="content flex-fill d-flex flex-column py-4 w-75">
        <div
          className={`container ${etape === 3 ? "w-100" : ` w-75  p-4`} form-box `}
        >
          {/* GREETING PART */}
          <div className="header d-flex flex-column align-items-center  my-3 justify-content-center">
            <Logo logoHeight="120" />
            {etape === 1 && (
              <ImpHeader
                title={"Nouvelle Impression"}
                text1={
                  "Commencez par nous donner les informations de base sur votre projet."
                }
                text2={
                  "Fournissez des informations précises sur le projet que vous voulez imprimer."
                }
              />
            )}

            {etape === 2 && docType == "" && (
              <ImpHeader
                title={"Type de Document"}
                text1={
                  "Choisissez le type de document que vous souhaitez imprimer."
                }
                text2={
                  "Cela nous aidera à adapter nos services à vos besoins spécifiques."
                }
              />
            )}

            {etape === 2 && docType != "" && (
              <ImpHeader
                title={`${docType}`}
                text1={`Remplissez les informations du ${docType.toLowerCase()} que vous souhaitez imprimer.`}
                text2={
                  "Cela nous aidera à adapter nos services à vos besoins spécifiques."
                }
              />
            )}
            {etape === 3 && (
              <ImpHeader
                title={`Review`}
                text1={`Veuillez verifier l'ensemble des données entrées et éffectuer des modification si le besoin se présente`}
                text2={""}
              />
            )}
          </div>

          {/* FORM FOR PROJECT INFOS */}
          {etape === 1 && (
            <ProjectForm setProjet={setProjet} onNextStep={() => setEtape(2)} />
          )}
          {/* FORM FORM THE TYPE OF DOC */}
          {etape === 2 && docType == "" && (
            <DocTypeComp documentType={setDocType} />
          )}

          {/* SHOW FORM BASE ON DOC TYPE */}
          {/* FORM RAPPORT -- ---------- */}
          {docType === "Rapport" && etape === 2 && (
            <FormRapport
              setProjet={setProjet}
              etape={setEtape}
              documentType={setDocType}
            />
          )}

          {/* FORM PLAN -- ------------ */}
          {docType === "Plan" && etape === 2 && (
            <FormPlan
              setProjet={setProjet}
              etape={setEtape}
              documentType={setDocType}
            />
          )}
          {/* GO TO REVIEW PAGE */}
          {etape === 3 && <ReviewComp projet={projet} />}

          {console.log(projet)}
        </div>
      </div>
    </div>
  );
};

export default NewImpression;
