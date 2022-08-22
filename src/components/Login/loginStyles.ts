import styled from "styled-components";
import { DisplayArea } from "../../globalStyles";
import { RegisterButton } from "../Employee/Form/form";

export const LogInLayout = styled(DisplayArea)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  background: #fff;
  padding: 1rem 1rem;
`;

export const Input = styled.span`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: transparent;
  border: 1px solid #55555550;
  border-radius: 5px;
  background: #ecf0f4;
  padding: 0.2rem 1rem;
`;

// export const LoginButton = styled(RegisterButton);
