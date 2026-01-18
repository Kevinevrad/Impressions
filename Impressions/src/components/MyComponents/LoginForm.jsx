import React, { useState } from "react";
import InputField from "./InputField";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // FORM VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};

    // VALIDATING THE EMAIL FIELD
    if (!email) {
      newErrors.email = "L'email est requis.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "L'email n'est pas valide.";
    }

    // VALIDATING THE PASSWORD FIELD
    if (!password) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 caractères.";
    }

    // SET ERRORS OR RETURN TRUE IF NO ERRORS
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // FORM SUBMISSION HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulaire valide ✅", { email, password });
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit} noValidate>
      {/* EMAIL INPUT FIELD */}
      <InputField
        label="Email"
        type="email"
        placeholder="Entrez votre email"
        onChange={(e) => setEmail(e.target.value)}
        errors={errors.email}
      />

      {/* PASSWORD INPUT FIELD */}
      <InputField
        label="Mot de passe"
        type="password"
        placeholder="Entrez votre mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        errors={errors.password}
      />

      {/* REMEMBER ME CHECKBOX */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="form-check d-flex justify-content-between align-items-center gap-3 w-100">
          <div className="form-group ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rememberMe"
            />
            <label className="form-check-label " htmlFor="rememberMe">
              Se souvenir de moi
            </label>
          </div>
          <a href="#" className=" text-decoration-none align-self-end">
            <small className="form-text text-muted">Mot de passe oublié?</small>
          </a>
        </div>
      </div>
      <button type="submit" className="btn btn-lg btn-success w-100">
        Se connecter
      </button>
    </form>
  );
};

export default LoginForm;
