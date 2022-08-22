import React from "react";
import Employee from "../components/Employee/Employee";
import { Container } from "../globalStyles";

const Employees: React.FC = () => {
  return (
    <Container>
      <Employee />
    </Container>
  );
};

export default Employees;
