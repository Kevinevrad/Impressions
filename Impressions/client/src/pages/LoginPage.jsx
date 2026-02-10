import Logo from "../components/MyComponents/Logo";
import AuthHeader from "../components/MyComponents/AuthHeader";
import LoginForm from "../components/MyComponents/LoginForm";

const Login = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center px-8">
      {/* LARGEUR RESPONSIVE  */}
      <div className="col-xs-5 col-sm-9 col-md-7 col-lg-5 col-xl-4">
        {/* LOGO COMPONENT */}
        <Logo logoHeight="100" />

        {/* AUTHHEADER COMPONENT */}
        <AuthHeader
          title={"Ravie de vous revoir"}
          subTitle={"Entrez les informations demandées"}
        />

        {/* LOGIN FORM COMPONENT */}
        <div className="card  shadow-sm p-4 mb-5 bg-body rounded">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
