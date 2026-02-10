import { useState } from "react";
import "./App.css";
import Login from "./pages/LoginPage";
import NewImpression from "./pages/NewImpression";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route
            path="/new-impression"
            element={<NewImpression setMyProjects={setProjects} />}
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
