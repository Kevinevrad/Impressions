import AuthHeader from "../components/MyComponents/AuthHeader";
import Logo from "../components/MyComponents/Logo";
const RegisterPage = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center px-8">
      {/* LARGEUR RESPONSIVE  */}
      <div className="col-xs-5 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        {/* LOGO COMPONENT */}
        <Logo logoHeight="100" />

        {/* AUTHHEADER COMPONENT */}
        <AuthHeader
          title={"Bienvenue"}
          subTitle={"Commencez par entrer les informations suivantes"}
        />

        {/* LOGIN FORM COMPONENT */}
        <div className="card  shadow-sm p-4 mb-5 bg-body rounded"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
