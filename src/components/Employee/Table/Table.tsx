import React from "react";
import { TableHead, Table as Tables, TableRow, TableData } from "./tableStyles";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface Props {
  setAddPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Table: React.FC<Props> = ({ setAddPopUp, setComponent }) => {
  return (
    <Tables>
      <TableRow>
        <TableHead>Image</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Gender</TableHead>
        <TableHead>date of Birth</TableHead>
        <TableHead>Salary</TableHead>
        <TableHead>Joined Date</TableHead>
        <TableHead>Address</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
      <TableRow>
        <TableData>
          <img
            src="
          https://minimaltoolkit.com/images/randomdata/male/20.jpg
            "
            width="38px"
            style={{
              borderRadius: "3rem",
              cursor: "pointer",
            }}
            alt="N"
            onClick={() => {
              setComponent("detail");
              setAddPopUp(true);
            }}
          />
        </TableData>
        <TableData>Emmanuel Demo</TableData>
        <TableData>Male</TableData>
        <TableData>03/05/2000</TableData>
        <TableData>25,000</TableData>
        <TableData>02/25/2022</TableData>
        <TableData>Addis Ababa</TableData>
        <TableData gap="3px">
          <FaRegEdit
            style={{
              cursor: "pointer",
              color: "#3f51b4",
              zIndex: 1,
            }}
            size="1.5rem"
            onClick={() => {
              setComponent("edit");
              setAddPopUp(true);
            }}
          />
          <RiDeleteBin5Fill
            style={{
              cursor: "pointer",
              color: "#ff0000",
              marginLeft: "1.5rem",
            }}
            size="1.5rem"
            onClick={() => {
              setComponent("delete");
              setAddPopUp(true);
            }}
          />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <img
            src="
          https://minimaltoolkit.com/images/randomdata/male/20.jpg
            "
            width="38px"
            style={{
              borderRadius: "3rem",
            }}
          />
        </TableData>
        <TableData>Emmanuel Demo</TableData>
        <TableData>Male</TableData>
        <TableData>03/05/2000</TableData>
        <TableData>25,000</TableData>
        <TableData>02/25/2022</TableData>
        <TableData>Addis Ababa</TableData>
        <TableData gap="3px">
          <FaRegEdit
            style={{
              cursor: "pointer",
              color: "#3f51b4",
            }}
            size="1.5rem"
          />
          <RiDeleteBin5Fill
            style={{
              cursor: "pointer",
              color: "#ff0000",
              marginLeft: "1.5rem",
            }}
            size="1.5rem"
          />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <img
            src="
          https://minimaltoolkit.com/images/randomdata/male/20.jpg
            "
            width="38px"
            style={{
              borderRadius: "3rem",
            }}
          />
        </TableData>
        <TableData>Emmanuel Demo</TableData>
        <TableData>Male</TableData>
        <TableData>03/05/2000</TableData>
        <TableData>25,000</TableData>
        <TableData>02/25/2022</TableData>
        <TableData>Addis Ababa</TableData>
        <TableData gap="3px">
          <FaRegEdit
            style={{
              cursor: "pointer",
              color: "#3f51b4",
            }}
            size="1.5rem"
          />
          <RiDeleteBin5Fill
            style={{
              cursor: "pointer",
              color: "#ff0000",
              marginLeft: "1.5rem",
            }}
            size="1.5rem"
          />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <img
            src="
          https://minimaltoolkit.com/images/randomdata/male/20.jpg
            "
            width="38px"
            style={{
              borderRadius: "3rem",
            }}
          />
        </TableData>
        <TableData>Emmanuel Demo</TableData>
        <TableData>Male</TableData>
        <TableData>03/05/2000</TableData>
        <TableData>25,000</TableData>
        <TableData>02/25/2022</TableData>
        <TableData>Addis Ababa</TableData>
        <TableData gap="3px">
          <FaRegEdit
            style={{
              cursor: "pointer",
              color: "#3f51b4",
            }}
            size="1.5rem"
          />
          <RiDeleteBin5Fill
            style={{
              cursor: "pointer",
              color: "#ff0000",
              marginLeft: "1.5rem",
            }}
            size="1.5rem"
          />
        </TableData>
      </TableRow>
    </Tables>
  );
};

export default Table;
