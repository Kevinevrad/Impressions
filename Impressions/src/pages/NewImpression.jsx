import { useState } from "react";

import SideBar from "../components/SideBar";
import Logo from "../components/MyComponents/Logo.jsx";
import FormRapport from "../components/FormRapport.jsx";
import ImpHeader from "../components/MyComponents/ImpHeader.jsx";
import ProjectForm from "../components/ProjectForm.jsx";
import "../signUpStep.css";
import DocTypeComp from "../components/MyComponents/DocTypeComp.jsx";

const NewImpression = ({ setMyProjects }) => {
  const [etape, setEtape] = useState(1);
  const [docType, setDocType] = useState("");

  const [projet, setProjet] = useState({
    nomProjet: "",
    descprojet: "",
    docmuments: [],
  });

  return (
    <div className="container-fluid min-vh-100 d-flex w-100 p-0">
      {/* SIDEBAR */}
      <div className="sidebar bg-secondary text-white p-4 d-flex flex-column align-items-center justify-content-start">
        <SideBar step={etape} documentType={docType} />
      </div>

      {/* MAIN CONTENT */}
      <div className="content flex-fill d-flex flex-column py-4 w-75">
        <div className="container w-75 form-box  ">
          {/* GREETING PART */}
          <div className="header d-flex flex-column  my-3 justify-content-center">
            <Logo logoHeight="120" />
            <ImpHeader
              title={etape === 1 ? "Nouvelle Impression" : "Type de Document"}
              text1={
                etape === 1
                  ? "Commencez par nous donner les informations de base sur votre projet."
                  : "Sélectionnez le type de document que vous souhaitez imprimer."
              }
              text2={
                etape === 1
                  ? "Fournissez des informations précises sur le projet que vous voulez imprimer."
                  : "Choisissez parmi une variété d'options pour répondre à vos besoins spécifiques."
              }
            />
          </div>

          {/* FORM FOR PROJECT INFOS */}
          {etape === 1 && <ProjectForm onNextStep={() => setEtape(2)} />}
          {/* FORM FORM THE TYPE OF DOC */}
          {etape === 2 && docType == "" && (
            <DocTypeComp documentType={setDocType} />
          )}

          {/* SHOW FORM BASE ON DOC TYPE */}
          {docType === "Rapport" && etape === 2 ? (
            <FormRapport></FormRapport>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewImpression;
