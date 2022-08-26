import React from "react";
import GlobalStyle from "../globalStyles";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Employees from "../pages/Employees";
import NotFound from "../pages/PageNotFound";
import RemovedEmployee from "../pages/RemovedEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getEmployee } from "../store/slice/employeeSlice";
import { updateEmployee, addEmployee } from "../store/slice/employeeSlice";

const App: React.FC = () => {
  const employees = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();
  const handleCreate = () => {
    console.log("increment by 1 is done");
    dispatch(
      addEmployee({
        // id: "idididid",
        profile_img: "image_link",
        full_name: "Ermias Amelga",
        date_of_birth: "03/05/2000",
        gender: "male",
        salary: 25000,
        email: "ermi@gmail.com",
        address: "123 Main Street",
        joined_date: "25/08/2000",
        position: "Manager",
      })
    );
  };

  const handleDecrement = () => {
    console.log("decrement by 1 is done");
    dispatch(
      updateEmployee({
        id: "idididid",
        employee: {
          id: "idididid",
          full_name: "Esayas",
          salary: 3000,
          date_of_birth: "2020/01/11",
          gender: "male",
        },
      })
    );
  };

  const handleDisplay = () => {
    console.log("then state data is ");
    // useAppSelector(selectCount);
    console.log(employees);
  };

  return (
    <div>
      <button onClick={handleCreate}>create employee</button>
      <button onClick={handleDisplay}>display employee</button>
      <button onClick={handleDecrement}>Delete employee</button>
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
