const ImpHeader = ({ title, text1, text2 }) => {
  return (
    <div className="text-center  mt-4 mb-5">
      <h2 className="display-4 text-uppercase  ">{title}</h2>
      <p className="lead">
        {text1} <br /> {text2}{" "}
      </p>
    </div>
  );
};

export default ImpHeader;
