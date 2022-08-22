import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FullLayout, NavbarLogo, NormalText } from "../../globalStyles";
import { DataInput, RegisterButton } from "../Employee/Form/form";
import { Input, LogInLayout } from "./loginStyles";

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <form>
      <FullLayout>
        <LogInLayout>
          <NavbarLogo
            w="10rem"
            src="https://res.cloudinary.com/amanuel/image/upload/v1661031755/addissoftware/logo-removebg-preview_i094qa.png"
            alt="A"
          />
          <NormalText ff="Georgia" fs="30px" fw="bold" mt="-3rem">
            Login
          </NormalText>
          <Input mt="2rem">
            <MdOutlineEmail
              style={{
                background: "transparent",
                color: "#55555570",
              }}
              size="1.5rem"
            />
            <DataInput
              w="90%"
              b="none"
              placeholder="example@gmail.com"
              required
              type="email"
            />
          </Input>
          <Input>
            <RiLockPasswordLine
              style={{
                background: "transparent",
                color: "#55555570",
              }}
              size="1.5rem"
            />
            <DataInput
              w="90%"
              b="none"
              placeholder="********"
              required
              type="password"
            />
          </Input>
          <RegisterButton onClick={() => navigate("/")}>Login</RegisterButton>
        </LogInLayout>
      </FullLayout>
    </form>
  );
};

export default AdminLogin;
