import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import InputField from "./MyComponents/InputField";
import TextArea from "./MyComponents/TextArea";

const ProjectForm = ({ step, sendData, typeDeDocument }) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [docType, setDocType] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (projectName && description && docType) {
      const project = {
        nomProjet: projectName,
        descprojet: description,
        docmuments: [],
      };
      sendData(project);
      typeDeDocument(docType);
      // Move to the next step
      if (docType === "Rapport") {
        step((prevStep) => prevStep + 1);
      } else if (docType === "Plan") {
        step((prevStep) => prevStep + 2);
      }
      // console.log(project);
      // Reset form fields
      setProjectName("");
      setDescription("");
      setDocType("");
    }
  };

  return (
    <form action="#" onSubmit={handleForm}>
      <InputField
        label={"Nom Projet"}
        type="text"
        placeholder={"Entrez le nom du projet"}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <TextArea
        label={"Description du projet"}
        placeholder={"Décrivez votre projet en quelques mots..."}
        // value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <hr />
      <div className="col-12 mb-3">
        <label htmlFor="selectInfo" className="form-label fw-bold">
          {" "}
          Avant d'aller plus loin,
          <br />
          Veuillez sélectionner le type de document à imprimer :
        </label>
        <select
          className="form-select  "
          id="selectInfo"
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

      <button className="py-2 px-5 btn btn-secondary fw-bold" type="submit">
        Suivant &gt;
      </button>
    </form>
  );
};

export default ProjectForm;
