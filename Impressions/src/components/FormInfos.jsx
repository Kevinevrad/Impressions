import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";

const FormInfos = ({ step }) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [docType, setDocType] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const project = {
      projectName,
      description,
      docType,
    };

    if (projectName && description && docType) {
      step((prevStep) => prevStep + 1); // Move to the next step

      console.log(project);
      // Reset form fields
      setProjectName("");
      setDescription("");
      setDocType("");
    }
  };

  return (
    <form action="#" className="row g-4" onSubmit={handleForm}>
      <div className="col-12 my-2">
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

      <div className="col-12  ">
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

      <div className="col-12 mb-2">
        <h6 className="mb-3 fw-semibold">
          Avant d'aller plus loin,
          <br /> veuillez choisir le type de document à imprimer
        </h6>
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
      <div className="col-12 d-flex justify-content-end  ">
        <button className="py-2 px-4 btn btn-dark fw-bold" type="submit">
          Suivant &gt;
        </button>
      </div>
    </form>
  );
};

export default FormInfos;
