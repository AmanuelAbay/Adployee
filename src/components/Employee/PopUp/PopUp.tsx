import React from "react";
import { PopUpContainer } from "./popupStyles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Form from "../Form/NewForm";
import EditForm from "../Form/EditForm";
import Detail from "../EmployeeDetail/Detail";
import Confirmation from "../DeleteConfirmation/Confirmation";

interface Props {
  closePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  component: string;
}

const PopUp: React.FC<Props> = ({ closePopUp, component }) => {
  return (
    <PopUpContainer>
      <AiOutlineCloseCircle
        style={{
          position: "absolute",
          top: "3rem",
          right: "6rem",
          cursor: "pointer",
          background: "transparent",
          color: "white",
        }}
        size="2rem"
        onClick={() => closePopUp(false)}
      />
      {component === "edit" && <EditForm />}
      {component === "new" && <Form />}
      {component === "detail" && <Detail />}
      {component === "delete" && <Confirmation closePopUp={closePopUp} />}
      {/* if component == form then display registry form */}
      {/* if component == edit employee the display edit form */}
      {/* if component == delete display delete confirmatioin message */}
      {/* if component == detail the display full employee detail information */}
      {/* <div>popup</div> */}
    </PopUpContainer>
  );
};

export default PopUp;
