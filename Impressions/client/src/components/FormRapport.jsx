import { useState } from "react";
import InputField from "./MyComponents/InputField.jsx";
import Textarea from "./MyComponents/TextArea.jsx";
import BtnWithIcon from "./BtnWithIcon.jsx";
import InputRadio from "./MyComponents/InputRadio.jsx";

const FormRapport = ({ setProjet, etape, documentType }) => {
  const [nomRapport, setNomRapport] = useState("");
  const [descriptionRapport, setDescriptionRapport] = useState("");
  const [nombrePages, setNombrePages] = useState(1);
  const [exemplaires, setExemplaires] = useState(1);
  const [format, setFormat] = useState("");
  let formatChecked = false;
  const [errors, setErrors] = useState({});

  const handleRadioChange = (e) => {
    setFormat(e.target.value);
    formatChecked = !formatChecked;
  };

  const validateRapport = () => {
    const newErrors = {};

    if (!nomRapport) {
      newErrors.nomRapport = "Le nom du rapport est requis";
    }
    if (!descriptionRapport) {
      newErrors.descriptionRapport = "La description du rapport est requise";
    }
    if (!format) {
      newErrors.format = "Format requis";
    }
    if (nombrePages < 1) {
      newErrors.nombrePages = "❌ Erreur : Entrez un nombre >= 1";
    } else if (isNaN(nombrePages)) {
      newErrors.nombrePages = "❌ Nombre Correct";
    }

    if (exemplaires < 1) {
      newErrors.exemplaires = "❌ Erreur : Entrez un nombre >= 1";
    } else if (isNaN(exemplaires)) {
      newErrors.exemplaires = "❌ Nombre Correct";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const finalDataSend = (e) => {
    etape(3);
  };

  const addAnotherRapport = (e) => {
    e.preventDefault();
    // FORMATING DATA
    const newRapport = {
      nomRapport,
      descriptionRapport,
      format,
      nombrePages,
      exemplaires,
      nbreTotalPages: nombrePages * exemplaires,
    };

    if (e.target.textContent === "Rapport") {
      // Handle adding another rapport
      console.log("Adding another rapport...");

      if (validateRapport()) {
        // UPDATE PARENT STATE WITH NEW RAPPORT
        setProjet((prevProjet) => ({
          ...prevProjet,
          documents: {
            ...prevProjet.documents,
            Rapports: [...prevProjet.documents.Rapports, newRapport],
          },
        }));
        // RESET FORM FIELDS
        setNomRapport("");
        setDescriptionRapport("");
        setNombrePages(1);
        setExemplaires(1);

        alert("✅ Ajout Effectuer");
      }
    }

    if (e.target.textContent === "Plan") {
      // GO TO PLAN FORM
      console.log("Navigating to Plan form...");
      documentType("Plan");
    }
  };

  return (
    <form>
      <div className="row gap-2 mb-4">
        <div className="col  border px-3 py-2">
          <InputField
            label={"Nom du rapport"}
            type="text"
            value={nomRapport}
            placeholder={"Entrez le nom du rapport..."}
            onChange={(e) => setNomRapport(e.target.value)}
            errors={errors.nomRapport}
            crutial={true}
          ></InputField>
          <div className="col">
            <div className="col  d-flex flex-row align-items-center justify-content-between gap-3">
              <label className="form-label fw-bold" htmlFor="fomatPlan">
                Format du plan <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-row align-items-center gap-4">
                {["A3", "A4"].map((formatRapport, index) => (
                  <InputRadio
                    format={formatRapport}
                    checked={formatRapport === format ? true : false}
                    onChange={handleRadioChange}
                    key={index}
                    errors={errors.format}
                  />
                ))}
                {errors.formatPlan && (
                  <div className="text-danger">{errors.formatPlan}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col border px-3 py-2 ">
          <Textarea
            label={"Description du rapport"}
            placeholder={"Décrivez le rapport en quelques mots..."}
            value={descriptionRapport}
            onChange={(e) => setDescriptionRapport(e.target.value)}
            errors={errors.descriptionRapport}
          ></Textarea>
        </div>
      </div>

      <div className="row gap-2 mb-4">
        <div className="col border  px-3 py-2">
          <InputField
            label={"Nombre de pages"}
            type="number"
            value={nombrePages}
            onChange={(e) => setNombrePages(e.target.value)}
            errors={errors.nombrePages}
            crutial={true}
          />
        </div>
        <div className="col border px-3 py-2">
          <InputField
            label={"Exemplaires"}
            type="number"
            value={exemplaires}
            onChange={(e) => setExemplaires(e.target.value)}
            errors={errors.exemplaires}
            crutial={true}
          />
        </div>
      </div>
      <div className="col gap-4 d-flex align-items-end justify-content-center mt-2">
        <div className="col  px-3 py-2 d-flex gap-4 align-items-end justify-content-start ">
          {["Rapport", "Plan"].map((btnText, index) => (
            <BtnWithIcon
              key={index}
              btnLabel={btnText}
              onClick={(e) => addAnotherRapport(e)}
            >
              {btnText === "Rapport" && (
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              )}
              {btnText === "Plan" && (
                <>
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" />
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                </>
              )}
            </BtnWithIcon>
          ))}
        </div>
        <button
          className="btn btn-success fw-bold"
          type="button"
          onClick={finalDataSend}
        >
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

export default FormRapport;
