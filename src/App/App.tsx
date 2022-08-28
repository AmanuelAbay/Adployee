import React, { useEffect } from "react";
import GlobalStyle from "../globalStyles";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Employees from "../pages/Employees";
import NotFound from "../pages/PageNotFound";
import RemovedEmployee from "../pages/RemovedEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  getEmployeesFetch,
  getEmployee,
  // addEmployeeStart,
  deleteEmployeeStart,
  updateEmployeeStart,
} from "../store/slice/employeeSlice";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const employees = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesFetch());
  }, [dispatch]);

  const handleUpdate = () => {
    console.log("increment by 1 is done");
    dispatch(
      updateEmployeeStart({
        id: "630b33b690bb05959823bf77",
        data: {
          // id: "idididid",
          profile_img: "image_link",
          full_name: "Janderebaw",
          date_of_birth: "03/05/2010",
          gender: "male",
          salary: 40000,
          email: "andualembeguno@outlook.com",
          address: "123 Main Street",
          joined_date: "25/08/2000",
          position: "Developer",
        },
      })
    );
  };

  const handleDecrement = () => {
    console.log("removing employee");
    dispatch(deleteEmployeeStart("630902c528d78345ec88da55"));
  };

  const handleDisplay = () => {
    console.log(employees.employees);
  };

  return (
    <div>
      <button onClick={handleUpdate}>update employee</button>
      <button onClick={handleDisplay}>display employee</button>
      <button onClick={handleDecrement}>Delete employee</button>
      <ToastContainer
        toastStyle={{ backgroundColor: "#2a2a67", height: 20 }}
        hideProgressBar={true}
        position="top-right"
        autoClose={5000}
      />
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
    </div>
  );
};

export default App;
