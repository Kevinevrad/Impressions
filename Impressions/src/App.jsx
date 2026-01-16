import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import NewImpression from "./pages/NewImpression";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);

  // console.log(projects);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/new-impression"
          element={<NewImpression setMyProjects={setProjects} />}
        />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
