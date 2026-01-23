const ImpHeader = ({ title, text1, text2 }) => {
  return (
    <div className="text-center  mt-3 mb-4" style={{ width: "40rem" }}>
      <h2 className="display-4 text-uppercase text-center  ">{title}</h2>
      <p className="lead">
        {text1} <br /> {text2}{" "}
      </p>
    </div>
  );
};

export default ImpHeader;
