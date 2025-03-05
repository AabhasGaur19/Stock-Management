import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for Login and Signup */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
