import React from "react";
import { Buttons, ButtonConfirmation, DeleteLayout } from "./deleteStyles";
import { NormalText } from "../../../globalStyles";

interface Props {
  closePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Confirmation: React.FC<Props> = ({ closePopUp }) => {
  return (
    <DeleteLayout>
      <NormalText fs="20">
        Are You sure you want to delete Amanuel Abay?
      </NormalText>
      <ButtonConfirmation>
        <Buttons color="#fffff" onClick={() => closePopUp(false)}>
          Cancel
        </Buttons>
        <Buttons color="#f95050" onClick={() => closePopUp(false)}>
          Delete
        </Buttons>
      </ButtonConfirmation>
    </DeleteLayout>
  );
};

export default Confirmation;
