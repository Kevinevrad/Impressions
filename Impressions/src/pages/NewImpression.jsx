import { useState } from "react";

import SideBar from "../components/SideBar";
import Logo from "../components/MyComponents/Logo.jsx";
import Stepper from "../components/MyComponents/Stepper.jsx";

import ImpHeader from "../components/MyComponents/ImpHeader.jsx";
import ProjectForm from "../components/ProjectForm.jsx";

const NewImpression = ({ setMyProjects }) => {
  const [etape, setEtape] = useState(1);
  const [typeDeDocument, setTypeDeDocument] = useState("");

  const [projet, setProjet] = useState({
    nomProjet: "",
    descprojet: "",
    docmuments: [],
  });

  return (
    <div className="container-fluid min-vh-100">
      <div className=" d-flex flex-column flex-md-row">
        {/* SIDEBAR */}
        <SideBar step={etape} />

        {/* MAIN CONTENT */}
        <div className=" flex-grow-1 p-3 p-md-5">
          {/* GREETING PART */}
          <div className="header">
            <Logo logoHeight="100" />
            <ImpHeader
              title={"Bienvenue"}
              text1={
                "Pour commencer, veuillez remplir le formulaire ci-dessous."
              }
              text2={
                "Fournissez des informations précises sur le projet que vous voulez imprimer."
              }
            />
          </div>
          {/* STEP INDICATOR */}
          <Stepper currentStep={etape}></Stepper>
          {/* FORM FOR PROJECT INFOS */}
          {etape === 1 && <ProjectForm onNext={() => setEtape(2)} />}
        </div>
      </div>
    </div>
  );
};

export default NewImpression;
