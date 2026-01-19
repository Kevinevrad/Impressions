const steps = ["Projet", "Document", "Paramètres", "Récap"];

const Stepper = ({ currentStep }) => {
  return (
    <>
      {/* DESKTOP TABLET  */}
      <div className="d-none d-md-block mb-4">
        {steps.map((step, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <div
              className={`rounded-circle me-2 ${
                index <= currentStep
                  ? "bg-success text-secondary"
                  : "bg-secondary text-white"
              }`}
              style={{ width: 15, height: 15 }}
            >
              {step.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE   */}
      <div className="d-flex justify-content-between d-md-none mb-4">
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              className={`rounded-circle me-2 ${index <= currentStep ? "bg-success text-white" : "bg-secondary text-secondary"}`}
              style={{ width: 15, height: 15 }}
            >
              {step.toUpperCase()}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stepper;
