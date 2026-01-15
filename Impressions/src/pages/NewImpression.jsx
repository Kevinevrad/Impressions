import { useState } from "react";
import FormInfos from "../components/FormInfos.jsx";

import SideBar from "../components/SideBar";
import logo from "../assets/img/logo.png";
import FormRapport from "../components/FormRapport.jsx";
import FormPlan from "../components/FormPlan.jsx";

const NewImpression = ({ greeting, message1, message2 }) => {
  const [etape, setEtape] = useState(1);

  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* SIDEBAR */}
        <SideBar step={etape} />

        {/* MAIN CONTENT */}
        <div className="col-md-8 bg-light px-5 py-4 ">
          {/* GREETING PART */}
          <div className="row d-flex  align-items-center mt-2 ">
            <div className="col text-center mb-5  gap-3 d-flex flex-column align-items-center">
              <img
                className="w-25 border border-2 p-2 border-success rounded text-center"
                src={logo}
                alt="INFRATP LOGO"
              />
              <h2 className="display-3 fw-semibold">{greeting}</h2>
              <p className="text-muted lead mb-2">
                {message1}
                <br />
                {message2}
              </p>
            </div>
          </div>

          {/* FORM FOR PROJECT INFOS */}
          {/* {etape === 1 && <FormInfos step={setEtape} />}

          {/* FORM FOR RAPPORTS INFOS */}
          {/* {etape === 2 && <FormRapport />}  */}

          {/* FORM FOR PLANS INFOS */}
          {/* {etape === 3 && <FormPlan />} */}
          <FormPlan></FormPlan>
        </div>
      </div>
    </div>
  );
};

export default NewImpression;
