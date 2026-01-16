import CustumBtn from "./CustumBtn";

import { useState } from "react";

const FormPlan = ({ typeDeDocument, setProjet }) => {
  const [nomPlan, setNomPlan] = useState("");
  const [descriptionPlan, setDescriptionPlan] = useState("");
  const [formatPlan, setFormatPlan] = useState("");
  const [formatChecked, setFormatChecked] = useState(false);
  const [exemplaires, setExemplaires] = useState(1);

  //  Button values
  const btns = [
    { label: "Ajouter un autre plan", className: "btn btn-primary py-2 px-4" },
    {
      label: "Enreigistrez des rapports",
      className: "btn btn-secondary py-2 px-4",
    },
    { label: "Terminer", className: "btn btn-success py-2 px-4 fw-bold" },
  ];

  //   Handle radio button change
  const handleRadioChange = (e) => {
    setFormatPlan(e.target.value);
    setFormatChecked(true);
  };

  const finalDataSend = () => {
    const plan = {
      type: typeDeDocument,
      nom: nomPlan,
      description: descriptionPlan,
      format: formatPlan,
      exemplaires: exemplaires,
    };
    if (nomPlan && descriptionPlan && formatPlan && exemplaires) {
      setProjet((prevProjet) => ({
        ...prevProjet,
        docmuments: [...prevProjet.docmuments, plan],
      }));
      alert("Plan ajouté avec succès!", "success");
    } else {
      alert("Veuillez remplir tous les champs du formulaire.", "danger");
    }
  };

  return (
    <form className="col-12">
      <div className="col mb-3">
        <label className="form-label" htmlFor="nomPlan">
          Nom du plan
        </label>
        <input
          type="text"
          id="nomPlan"
          placeholder="Entrez le nom du plan..."
          className="form-control"
          value={nomPlan}
          onChange={(e) => setNomPlan(e.target.value)}
        />
      </div>
      <div className="col  mb-1">
        <label className="form-label" htmlFor="descriptionPlan">
          Description du plan
        </label>
        <textarea
          name="descriptionPlan"
          id="descriptionPlan"
          className="form-control"
          value={descriptionPlan}
          rows={3}
          placeholder="Décrivez le plan en quelques mots..."
          onChange={(e) => setDescriptionPlan(e.target.value)}
        ></textarea>
      </div>
      <div className="col mb-3 d-flex flex-row align-items-center justify-content-between gap-3">
        <label className="form-label" htmlFor="fomatPlan">
          Format du plan
        </label>
        <div className="d-flex flex-row align-items-center gap-4">
          <div className="form-check">
            <label htmlFor="formatA3" className="form-check-label">
              A3
            </label>
            <input
              type="radio"
              onChange={handleRadioChange}
              className="form-check-input"
              id="formatA3"
              value="A3"
              checked={formatPlan === "A3" ? true : false}
            />
          </div>
          <div className="form-check">
            <label htmlFor="formatA2" className="form-check-label">
              A2
            </label>
            <input
              type="radio"
              onChange={handleRadioChange}
              className="form-check-input"
              id="formatA2"
              value="A2"
              checked={formatPlan === "A2" ? true : false}
            />
          </div>
          <div className="form-check">
            <label htmlFor="formatA1" className="form-check-label">
              A1
            </label>
            <input
              type="radio"
              onChange={handleRadioChange}
              className="form-check-input"
              id="formatA1"
              value="A1"
              checked={formatPlan === "A1" ? true : false}
            />
          </div>
          <div className="form-check">
            <label htmlFor="formatA0" className="form-check-label">
              A0
            </label>
            <input
              className="form-check-input"
              id="formatA0"
              type="radio"
              onChange={handleRadioChange}
              value="A0"
              checked={formatPlan === "A0" ? true : false}
            />
          </div>
        </div>
      </div>

      <div className="col mb-3">
        <label className="form-label" htmlFor="exemplaires">
          Exemplaires
        </label>
        <input
          type="number"
          id="exemplaires"
          className="form-control"
          value={exemplaires}
          onChange={(e) => setExemplaires(e.target.value)}
        />
      </div>
      <div className="col gap-4 d-flex align-items-end justify-content-between ">
        {btns.map((btn, index) => {
          return (
            <CustumBtn
              key={index}
              type="button"
              className={btns[index].className}
              onClick={(e) => {
                e.preventDefault();
                if (index === 2) {
                }
              }}
            >
              {btns[index].label}
            </CustumBtn>
          );
        })}
      </div>
    </form>
  );
};

export default FormPlan;
