import React from "react";
import GlobalStyle, { Divider, Layout } from "./globalStyles";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";
import RemovedEmployee from "./pages/RemovedEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Divider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="employees" element={<Employees />} />
            <Route path="removed_employees" element={<RemovedEmployee />} />
            <Route path="notfound" element={<NotFound />} />
          </Routes>
        </Divider>
      </Layout>
    </Router>
  );
};

export default App;
