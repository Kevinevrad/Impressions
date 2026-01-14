import { useState } from "react";

import SideBar from "../components/SideBar";
import logo from "../assets/img/logo.png";
const NewImpression = () => {
  const [etape, setEtape] = useState(2);

  // DATA --------------------------------------------------------------------
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [docType, setDocType] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const project = {
      projectName,
      description,
      docType,
    };
    console.log("Project Submitted: ", project);
  };
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* SIDEBAR */}
        <SideBar step={etape} />

        {/* MAIN CONTENT */}
        <div className="col-md-8 bg-light p-5">
          <img
            className="w-50 rounded text-center"
            src={logo}
            alt="INFRATP LOGO"
          />
          <div className="row d-flex  align-items-center mt-4 ">
            <div>
              <h2 className="fw-semibold">Hey there!</h2>
              <p className="text-muted mb-5">
                Is it safe to assume you’re in need of some help? Let’s get
                started on your HelpDesk ticket.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form action="#" className="row g-4" onSubmit={handleForm}>
            <div className="col-12">
              <label className="form-label" htmlFor="project">
                Project Name
              </label>
              <input
                id="project"
                type="text"
                className="form-control"
                placeholder="Enter the project name"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                placeholder="Describe your project in a few words..."
                rows={3}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="col-12">
              <select
                className="form-select"
                defaultValue=""
                aria-label="Default select example"
                onChange={(e) => {
                  setDocType(e.target.value);
                }}
              >
                <option>Document Type</option>
                {["Rapport", "Plan"].map((type, index) => (
                  <option value={type} key={index}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 d-flex justify-content-end mt-4">
              <button className="py-2 px-4 btn btn-dark" type="submit">
                Submit
              </button>
            </div>
            {/* Rapports Section    */}
            {/* <div className="col-12">
              <hr />
              <h4>Rapports</h4>
              <div className="col mb-3">
                <label className="form-label" htmlFor="nomRapport">
                  Rapport Name
                </label>
                <input
                  type="text"
                  id="nomRapport"
                  placeholder="Enter rapport name..."
                  className="form-control"
                />
              </div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="nomRapport">
                    Pages
                  </label>
                  <input
                    type="number"
                    // value={1}
                    id="nomRapport"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="exemplaires">
                    Exemplaires
                  </label>
                  <input
                    type="number"
                    // value={1}
                    id="exemplaires"
                    className="form-control"
                  />
                </div>
                <div className="col gap-4 d-flex align-items-end justify-content-end">
                  <button className="btn btn-primary" type="button">
                    +
                  </button>
                  <button className="btn btn-success" type="button">
                    Terminer
                  </button>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewImpression;
