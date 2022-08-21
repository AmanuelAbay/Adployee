import React from "react";
import {
  NavbarContainer,
  NavbarCompanyDesc,
  NavbarImg,
  NavbarList,
  NavbarLogo,
  NavbarName,
  NavbarProfile,
  NavLinks,
  NavProfileRole,
  NavName,
  UpperNavBar,
} from "../../globalStyles";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";

// https://res.cloudinary.com/amanuel/image/upload/v1661031755/addissoftware/logo-removebg-preview_i094qa.png
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <UpperNavBar>
        <a href="/">
          <NavbarCompanyDesc>
            <NavbarLogo
              src="https://res.cloudinary.com/amanuel/image/upload/v1661031755/addissoftware/logo-removebg-preview_i094qa.png"
              alt="A"
            />
            <NavbarName>Adployee</NavbarName>
          </NavbarCompanyDesc>
        </a>
        <NavbarProfile>
          <NavbarImg src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg" />
          <NavName>Amanuel Abay</NavName>
          <NavProfileRole>Admin</NavProfileRole>
        </NavbarProfile>
        <div>
          <NavName
            mt="4rem"
            width="100%"
            alignment="center"
            size="1rem"
            fw="medium"
            pl="7%"
          >
            MAIN
          </NavName>
        </div>
      </UpperNavBar>
      <NavbarList>
        {/* <NavbarItem> */}
        <NavLinks href="/">
          <MdOutlineDashboard
            style={{ background: "transparent" }}
            size="1.1rem"
          />
          Dashboard
        </NavLinks>
        {/* </NavbarItem> */}
        {/* <NavbarItem> */}
        <NavLinks href="/employees">
          <BiGroup size="1.1rem" style={{ background: "transparent" }} />
          Employees
        </NavLinks>
        {/* </NavbarItem>
        <NavbarItem> */}
        <NavLinks href="/removed_employees">
          <AiOutlineUsergroupDelete
            size="1.1rem"
            style={{ background: "transparent" }}
          />
          Removed Employees
        </NavLinks>
        {/* </NavbarItem> */}
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
