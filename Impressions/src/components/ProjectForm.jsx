import React, { useState } from "react";

import InputField from "./MyComponents/InputField";
import TextArea from "./MyComponents/TextArea";

const ProjectForm = ({ onNextStep }) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

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
      });
      onNextStep();
    }
  };

  return (
    <form
      className="mt-2 form d-flex flex-column justify-content-center"
      action="#"
      onSubmit={handleSubmit}
    >
      <InputField
        label={"Nom Projet"}
        type="text"
        value={projectName}
        placeholder={"Entrez le nom du projet"}
        onChange={(e) => setProjectName(e.target.value)}
        errors={errors.projectName}
        crutial={true}
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

      <div className="mt-4 d-flex justify-content-end">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="py-2  px-4 btn btn-outline-success fs-6 fw-bold"
          type="submit"
        >
          Suivant{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="me-2 bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
