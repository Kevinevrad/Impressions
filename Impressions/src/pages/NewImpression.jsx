import { useState } from "react";
import FormInfos from "../components/FormInfos.jsx";

import SideBar from "../components/SideBar";
import logo from "../assets/img/logo.png";
import FormRapport from "../components/FormRapport.jsx";
import FormPlan from "../components/FormPlan.jsx";
import Greeting from "../components/Greeting.jsx";

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
        <div className="col-md-9 bg-light px-5 py-4 ">
          {/* GREETING PART */}
          <div className="row d-flex  align-items-center mt-2 ">
            <div className="col text-center mb-4  gap-3 d-flex flex-column align-items-center">
              <img
                className="w-25 border border-2 p-2 border-success rounded text-center"
                src={logo}
                alt="INFRATP LOGO"
              />
              <Greeting
                title={
                  etape === 1 ? "Bienvenue" : etape === 2 ? "Rapports" : "Plans"
                }
                subTitle1="Pour commencer, veuillez remplir le formulaire ci-dessous."
                subTitle2={
                  etape === 1
                    ? "Fournissez des informations précises sur le projet que vous voulez imprimer."
                    : etape === 2
                    ? "Ajoutez des rapports liés à votre projet d'impression."
                    : "Ajoutez des plans associés à votre projet d'impression."
                }
              ></Greeting>
            </div>
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
