const SideBar = (step) => {
  return (
    <div className="col-md-4 bg-secondary text-white p-5 d-flex flex-column justify-content-between">
      <div>
        <ul className="list-unstyled">
          {["Dashboard", "New Impression", "My Impressions", "Settings"].map(
            (item, index) => (
              <li
                key={item}
                className={`mb-4 d-flex align-items-center ${
                  step === index + 1 ? "fw-bold" : "opacity-50"
                }`}
                onClick={() => setEtape(index + 1)}
              >
                <span
                  className="me-3 rounded-circle bg-white"
                  style={{ width: 20, height: 20 }}
                ></span>

                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
