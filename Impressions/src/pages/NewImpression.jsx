import { useState } from "react";
import FormInfos from "../components/ProjectForm.jsx";

import SideBar from "../components/SideBar";
import Logo from "../components/MyComponents/Logo.jsx";
import FormRapport from "../components/FormRapport.jsx";
import FormPlan from "../components/FormPlan.jsx";
import Greeting from "../components/Greeting.jsx";
import ImpHeader from "../components/MyComponents/ImpHeader.jsx";

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
      <div className="row h-100">
        {/* SIDEBAR */}
        <SideBar step={etape} />

        {/* MAIN CONTENT */}
        <div className="col-md-9 bg-light px-5 py-3 ">
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

          {/* FORM FOR PROJECT INFOS */}
          {etape === 1 && (
            <FormInfos
              sendData={setProjet}
              typeDeDocument={setTypeDeDocument}
              step={setEtape}
            />
          )}

          {/* FORM FOR RAPPORTS INFOS */}
          {etape === 2 && (
            <FormRapport
              etape={setEtape}
              typeDeDocument={typeDeDocument}
              setProjet={setProjet}
            />
          )}

          {/* FORM FOR PLANS INFOS */}
          {etape === 3 && (
            <FormPlan currEtape={setEtape} typeDeDocument={typeDeDocument} />
          )}

          {console.log(projet)}
        </div>
      </div>
    </div>
  );
};

export default NewImpression;
