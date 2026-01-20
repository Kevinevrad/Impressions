const ImpHeader = ({ title, text1, text2 }) => {
  return (
    <div className="text-center  mt-3 mb-4">
      <h2 className="display-4 text-uppercase  ">{title}</h2>
      <p className="lead">
        {text1} {text2}{" "}
      </p>
    </div>
  );
};

export default ImpHeader;
