import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import InputField from "./MyComponents/InputField";
import TextArea from "./MyComponents/TextArea";

const ProjectForm = ({ onNext }) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [docType, setDocType] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    //  VALIDATING THE PROJECT NAME FIELD
    if (!projectName) {
      newErrors.projectName = "Le nom du projet est requis.";
    }

    // VALIDATING THE DESCRIPTION FIELD
    if (!description) {
      newErrors.description = "La description du projet est requise.";
    }

    // VALIDATING THE DOCUMENT TYPE FIELD
    if (!docType || docType === "Document Type") {
      newErrors.docType = "Le type de document est requis.";
    }

    // SET ERRORS OR RETURN TRUE IF NO ERRORS
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulaire valide ✅", {
        projectName,
        description,
        docType,
      });
      onNext;
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <InputField
        label={"Nom Projet"}
        type="text"
        value={projectName}
        placeholder={"Entrez le nom du projet"}
        onChange={(e) => setProjectName(e.target.value)}
        errors={errors.projectName}
      />

      <TextArea
        label={"Description du projet"}
        placeholder={"Décrivez votre projet en quelques mots..."}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        errors={errors.description}
      />
      <div className="col-12 mb-3 form-group">
        <hr />
        <label htmlFor="selectInfo" className="form-label fw-bold">
          {" "}
          Avant d'aller plus loin,
          <br />
          Veuillez sélectionner le type de document à imprimer :
        </label>
        <select
          className="form-select  "
          id="selectInfo"
          aria-label="Default select example"
          value={docType}
          onChange={(e) => {
            setDocType(e.target.value);
          }}
          errors={errors.docType}
        >
          <option>Document Type</option>
          {["Rapport", "Plan"].map((type, index) => (
            <option value={type} key={index}>
              {type}
            </option>
          ))}
        </select>
        {errors.docType && (
          <div className="invalid-feedback d-block">{errors.docType}</div>
        )}
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="py-2 px-5 btn btn-secondary fw-bold"
          type="submit"
        >
          Suivant &gt;
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
