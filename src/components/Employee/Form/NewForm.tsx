import React from "react";
import { NormalText } from "../../../globalStyles";
import {
  FormContainer,
  RowForms,
  DataInput,
  Select,
  Option,
  LabelInput,
  RegisterButton,
} from "./form";

const AddNew: React.FC = () => {
  const today = () => {
    var today = new Date();
    var dd = today.getDate();
    var str_today = "";
    var str_dd = "";
    var str_mm = "";
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      str_dd = "0" + dd;
    } else str_dd += dd;
    if (mm < 10) {
      str_mm = "0" + mm;
    } else str_mm += mm;
    str_today = yyyy + "-" + str_mm + "-" + str_dd;
    console.log(str_today);
    console.log("this is today");
    return str_today;
  };

  return (
    <FormContainer>
      <NormalText fs="17px" color="#000">
        Register new Employee
      </NormalText>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Name
          </NormalText>
          <DataInput placeholder="Jhon Doe" required />
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Email
          </NormalText>
          <DataInput placeholder="example@gmail.com" type="email" required />
        </LabelInput>
      </RowForms>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Salary
          </NormalText>
          <DataInput placeholder="0000" required type="number" min="1" />
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Position
          </NormalText>
          <DataInput placeholder="Software engineer..." />
        </LabelInput>
      </RowForms>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Gender
          </NormalText>
          <Select name="gender" required defaultValue="">
            <Option value="" disabled>
              Gender
            </Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Birth date
          </NormalText>
          <DataInput type="date" required max={today()} />
        </LabelInput>
      </RowForms>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Joined Date
          </NormalText>
          <DataInput type="date" required max={today()} />
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Address
          </NormalText>
          <DataInput placeholder="Address" />
        </LabelInput>
      </RowForms>
      <RegisterButton type="submit">Register</RegisterButton>
    </FormContainer>
  );
};

export default AddNew;
