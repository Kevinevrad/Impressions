import React from "react";
import Logo from "../components/MyComponents/Logo";
import AuthHeader from "../components/MyComponents/AuthHeader";
import LoginForm from "../components/MyComponents/LoginForm";

const Login = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center px-3">
      {/* LARGEUR RESPONSIVE  */}
      <div className=" col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3">
        {/* LOGO COMPONENT */}
        <Logo logoHeight="100" />

        {/* AUTHHEADER COMPONENT */}
        <AuthHeader />

        {/* LOGIN FORM COMPONENT */}
        <div className="card  shadow-sm p-4 mb-5 bg-body rounded">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
