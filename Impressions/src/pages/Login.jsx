import React from "react";
import logo from "../assets/img/logo.png";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center gap-4">
        <img className="w-25" src={logo} alt="Logo INFRATP" />
        <div className="text-center">
          <h1 className="display-4 fw-bold ">Welcome Back</h1>
          <p className="fs-4 fw-light">Start by enter your email & password</p>
        </div>
        <form action="#" className="col-4 card ">
          <div className="card-body py-5">
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="email" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <div className="form-group d-flex justify-content-between gap-2 my-3">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                    value=""
                  />
                  <label htmlFor="remember" className="form-check-label">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-link p-0 link-underline-light link-dark"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-submit w-100 btn-success">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
