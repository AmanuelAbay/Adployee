import React from "react";
import { NormalText } from "../../../globalStyles";
import {
  Badge,
  DetailWrapper,
  Information,
  NamePositionContainer,
  ProfileContainer,
} from "./detailStyles";

import { MdDateRange, MdOutlineEmail } from "react-icons/md";
import { BsGenderMale } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { ImEnter } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa";

const Detail: React.FC = () => {
  return (
    <DetailWrapper>
      <ProfileContainer>
        <img
          src="
          https://minimaltoolkit.com/images/randomdata/male/20.jpg
            "
          width="95px"
          style={{
            borderRadius: "3rem",
          }}
          alt="N"
        />
        <NamePositionContainer>
          <NormalText fs="13" fw="400" color="#000">
            Amanuel Abay
            <BsGenderMale
              style={{
                background: "transparent",
                color: "black",
              }}
              size="1.5rem"
            />
          </NormalText>
          <Badge>
            <NormalText fs="10" fw="400" color="#7ec581">
              Manager
            </NormalText>
          </Badge>
        </NamePositionContainer>
      </ProfileContainer>
      <Information>
        <MdDateRange
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> 22/08/2022</NormalText>
      </Information>
      <Information>
        <MdOutlineEmail
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10" type="email">
          {" "}
          amanab.449@gmail.com
        </NormalText>
      </Information>
      <Information>
        <BiDollarCircle
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> 15,000ETB </NormalText>
      </Information>
      <Information>
        <ImEnter
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> 12/08/2022 </NormalText>
      </Information>
      <Information>
        <FaAddressCard
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> Saris, Addis Ababa </NormalText>
      </Information>
    </DetailWrapper>
  );
};

export default Detail;
