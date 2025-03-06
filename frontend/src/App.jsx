// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./screens/LoginPage";
// import SignupPage from "./screens/SignupPage";
// import Dashboard from "./screens/dashboard";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import Dashboard from "./screens/dashboard";
import AuthRedirectHandler from "./AuthRedirectHandler"; // Import Auth Listener

const App = () => {
  return (
    <Router>
      <AuthRedirectHandler /> {/* Handle Redirects */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

