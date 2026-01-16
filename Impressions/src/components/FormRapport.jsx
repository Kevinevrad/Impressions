import { useState } from "react";

const FormRapport = ({ typeDeDocument, setProjet, etape }) => {
  const [nomRapport, setNomRapport] = useState("");
  const [descriptionRapport, setDescriptionRapport] = useState("");
  const [nombrePages, setNombrePages] = useState(1);
  const [exemplaires, setExemplaires] = useState(1);

  const finalDataSend = (e) => {
    e.preventDefault();
    const rapport = {
      typeDeDocument,
      nomRapport,
      descriptionRapport,
      nombrePages,
      exemplaires,
    };

    if (nomRapport && descriptionRapport && nombrePages && exemplaires) {
      setProjet((prevProjet) => ({
        ...prevProjet,
        docmuments: [...prevProjet.docmuments, rapport],
      }));
      alert("Rapport ajouté avec succès!", "success");
    } else {
      alert("Veuillez remplir tous les champs du formulaire.", "danger");
    }
  };

  const addAnotherRapport = (e) => {
    e.preventDefault();
    setNomRapport("");
    setDescriptionRapport("");
    setNombrePages(1);
    setExemplaires(1);
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
          value={nomRapport}
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
          value={descriptionRapport}
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
            value={nombrePages}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="exemplaires">
            Exemplaires
          </label>
          <input
            type="number"
            value={exemplaires}
            id="exemplaires"
            className="form-control"
            onChange={(e) => setExemplaires(e.target.value)}
          />
        </div>
      </div>
      <div className="col gap-4 d-flex align-items-end justify-content-center mt-5">
        <button
          onClick={(e) => addAnotherRapport(e)}
          className="btn btn-primary py-2 px-4"
          type="button"
        >
          Ajouter un autre rapport
        </button>
        <button
          onClick={() => {
            etape((prevEtape) => prevEtape + 1);
          }}
          type="button"
          className="btn btn-secondary py-2 px-4"
        >
          Enreigistrez des palns
        </button>
        <button
          className="btn btn-success py-2 px-4 fw-bold"
          type="button"
          onClick={finalDataSend}
        >
          Terminer
        </button>
      </div>
    </form>
  );
};
export default FormRapport;
