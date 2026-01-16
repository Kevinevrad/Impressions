const Greeting = ({ title, subTitle1, subTitle2 }) => {
  return (
    <>
      <h2 className="display-3 fw-semibold">{title}</h2>
      <p className="text-muted lead mb-2">
        {subTitle1}
        <br />
        {subTitle2}
      </p>
    </>
  );
};

export default Greeting;
