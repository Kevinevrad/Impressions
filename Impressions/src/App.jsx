import "./App.css";
import Login from "./pages/Login";
import NewImpression from "./pages/NewImpression";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/new-impression"
          element={
            <NewImpression
              greeting="Bienvenue"
              message1="Pour commencer, veuillez remplir le formulaire ci-dessous."
              message2="Fournissez des informations précises sur le projet que vous voulez imprimer."
            />
          }
        />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
