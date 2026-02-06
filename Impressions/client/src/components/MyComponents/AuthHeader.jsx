const AuthHeader = ({ title, subTitle }) => {
  return (
    <div className="auth-header text-center mb-4">
      <h2 className="fw-bolder">{title}</h2>
      <p className="text-muted lead"> {subTitle}</p>
    </div>
  );
};

export default AuthHeader;
