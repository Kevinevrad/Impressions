import { useState } from "react";

const FormRapport = () => {
  const [nomRapport, setNomRapport] = useState("");
  const [descriptionRapport, setDescriptionRapport] = useState("");
  const [nombrePages, setNombrePages] = useState(1);
  const [exemplaires, setExemplaires] = useState(1);

  const handleFormRapport = (e) => {
    e.preventDefault();
    const rapport = {
      nomRapport,
      descriptionRapport,
      nombrePages,
      exemplaires,
    };

    console.log(rapport);
  };
  return (
    <form className="col-12">
      <div className="col mb-3">
        <label className="form-label" htmlFor="nomRapport">
          Nom du rapport
        </label>
        <input
          type="text"
          id="nomRapport"
          placeholder="Entrez le nom du rapport..."
          className="form-control"
          onChange={(e) => setNomRapport(e.target.value)}
        />
      </div>
      <div className="col mb-3">
        <label className="form-label" htmlFor="descriptionRapport">
          Description du rapport
        </label>
        <textarea
          name="descriptionRapport"
          id="descriptionRapport"
          className="form-control"
          rows={3}
          placeholder="Décrivez le rapport en quelques mots..."
          onChange={(e) => setDescriptionRapport(e.target.value)}
        ></textarea>
      </div>
      <div className="row">
        <div className="col">
          <label className="form-label" htmlFor="nomRapport">
            Nombre de pages
          </label>
          <input
            type="number"
            // value={1}
            id="nomRapport"
            className="form-control"
            onChange={(e) => setNombrePages(e.target.value)}
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
            onChange={(e) => setExemplaires(e.target.value)}
          />
        </div>
      </div>
      <div className="col gap-4 d-flex align-items-end justify-content-center mt-5">
        <button className="btn btn-primary py-2 px-4" type="button">
          Ajouter un autre rapport
        </button>
        <button type="button" className="btn btn-secondary py-2 px-4">
          Enreigistrez des palns
        </button>
        <button
          className="btn btn-success py-2 px-4 fw-bold"
          type="button"
          onClick={handleFormRapport}
        >
          Terminer
        </button>
      </div>
    </form>
  );
};
export default FormRapport;
