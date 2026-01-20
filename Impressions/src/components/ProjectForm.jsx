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
          className="py-3 px-5 btn btn-secondary fs-6 fw-bold"
          type="submit"
        >
          Suivant &gt;
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
