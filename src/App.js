import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  );
}

export default App;
