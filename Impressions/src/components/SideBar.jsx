const SideBar = ({ step }) => {
  return (
    <div className="col-md-3 bg-secondary text-white align-items-center p-2 d-flex flex-column justify-content-between">
      <div className="row h-100 w-100">
        <ul className="list-unstyled my-auto d-flex flex-column justify-content-center gap-4">
          {["Projet", "Rapports", "Plans", "Settings"].map((item, index) => (
            <li
              key={item}
              className={`mb-4 d-flex align-items-center text-uppercase px-4 py-2 border border-2 rounded   ${
                step === index + 1 ? "fw-bold  bg-success" : "opacity-50"
              }`}
              onClick={() => setEtape(index + 1)}
            >
              <span
                className="me-3 rounded-circle bg-white"
                style={{ width: 20, height: 20 }}
              ></span>

              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
