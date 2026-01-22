import { useState } from "react";
import BtnWithIcon from "./BtnWithIcon";
import InputField from "./MyComponents/InputField";
import TextArea from "./MyComponents/TextArea";
import InputRadio from "./MyComponents/InputRadio";

const FormPlan = ({ documentType, setProjet }) => {
  const [nomPlan, setNomPlan] = useState("");
  const [descriptionPlan, setDescriptionPlan] = useState("");
  const [formatPlan, setFormatPlan] = useState("");
  const [formatChecked, setFormatChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const [exemplaires, setExemplaires] = useState(1);

  const loadData = () => {};

  //   Handle radio button change
  const handleRadioChange = (e) => {
    setFormatPlan(e.target.value);
    setFormatChecked(true);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!nomPlan) {
      newErrors.nomPlan = "Le nom du plan est requis";
    }

    if (exemplaires < 1) {
      newErrors.exemplaires = "Nombre sup ou égal à 1";
    } else if (isNaN(exemplaires)) {
      newErrors.exemplaires =
        "Le nombre d'exemplaires doit être un nombre valide";
    }

    if (!formatChecked) {
      newErrors.formatPlan = "Fromat requis";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const finalDataSend = (e) => {
    e.preventDefault();

    // DATA FORMATING
    const data = {
      nomPlan: nomPlan,
      descriptionPlan: descriptionPlan,
      formatDocument: formatPlan,
      nombreExemplaire: exemplaires,
      nbreTotalImprimer: exemplaires,
    };

    if (e.target.textContent === "Rapport") {
      documentType("Rapport");
    }

    if (e.target.textContent === "Plan") {
      if (validateForm()) {
        //UPDATING DATA TO THE PARENT STATE
        setProjet((prevProjet) => ({
          ...prevProjet,
          docmuments: {
            ...prevProjet.docmuments,
            Plans: [...prevProjet.docmuments.Plans, data],
          },
        }));
        setDescriptionPlan("");
        setExemplaires("");
        setFormatPlan("");
        setNomPlan("");
        alert("Data enreigistré ✅");
      }
    }
  };

  return (
    <form className="col-12">
      <div className="row">
        <div className="col">
          <InputField
            label={"Nom du plan"}
            type="text"
            value={nomPlan}
            onChange={(e) => setNomPlan(e.target.value)}
            placeholder={"Entrez le nom du plan..."}
            errors={errors.nomPlan}
            crutial={true}
          />
        </div>
        <div className="col">
          <InputField
            label={"Exemplaires"}
            type="number"
            value={exemplaires}
            onChange={(e) => setExemplaires(e.target.value)}
            // placeholder={"Nombre d'exemplaires..."}
            errors={errors.exemplaires}
            crutial={true}
          />
        </div>
      </div>

      <div className="col">
        <TextArea
          label={"Description du plan"}
          placeholder={"Décrivez le plan en quelques mots..."}
          value={descriptionPlan}
          onChange={(e) => setDescriptionPlan(e.target.value)}
        ></TextArea>
      </div>

      <div className="col mb-3 d-flex flex-row align-items-center justify-content-between gap-3">
        <label className="form-label fw-bold" htmlFor="fomatPlan">
          Format du plan <span className="text-danger">*</span>
        </label>
        <div className="d-flex flex-row align-items-center gap-4">
          {["A3", "A2", "A1", "A0"].map((format, index) => (
            <InputRadio
              format={format}
              checked={formatPlan === format ? true : false}
              onChange={handleRadioChange}
              key={index}
              errors={errors.formatPlan}
            />
          ))}
          {errors.formatPlan && (
            <div className="text-danger">{errors.formatPlan}</div>
          )}
        </div>
      </div>

      <div className="col gap-4 d-flex align-items-start justify-content-between mt-2">
        <div className="col d-flex gap-4 align-items-end justify-content-start">
          {["Plan", "Rapport"].map((btnText, index) => (
            <BtnWithIcon
              btnLabel={btnText}
              key={index}
              onClick={(e) => finalDataSend(e)}
            >
              {btnText === "Rapport" && (
                <>
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" />
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                </>
              )}
              {btnText === "Plan" && (
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              )}
            </BtnWithIcon>
          ))}
        </div>
        <button className="btn btn-success fw-bold" type="submit">
          Suivant
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default FormPlan;
