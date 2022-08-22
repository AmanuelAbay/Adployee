import React from "react";
import GlobalStyle, { Divider, Layout } from "./globalStyles";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import NotFound from "./pages/PageNotFound";
import RemovedEmployee from "./pages/RemovedEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="employees" element={<Employees />} />
        <Route path="removed_employees" element={<RemovedEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
