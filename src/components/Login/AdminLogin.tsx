import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FullLayout, NormalText } from "../../globalStyles";
import { DataInput, RegisterButton } from "../Employee/Form/form";
import { Input, LogInLayout } from "./loginStyles";

const AdminLogin = () => {
  return (
    <form>
      <FullLayout>
        <LogInLayout>
          <NormalText fs="30px" fw="bold">
            Login
          </NormalText>
          <Input>
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
          <RegisterButton>Login</RegisterButton>
        </LogInLayout>
      </FullLayout>
    </form>
  );
};

export default AdminLogin;
