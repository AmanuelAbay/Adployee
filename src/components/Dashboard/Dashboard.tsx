import React from "react";
import { Container, DisplayArea } from "../../globalStyles";
import { Cards, CardText, CardWrapper, Text } from "./dashboardStyles";
import { Heading } from "../../globalStyles";
import { BiGroup } from "react-icons/bi";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import Graph from "./Graphs/Graph";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Heading mt="2rem">Dashboard</Heading>
      <CardWrapper>
        <Cards>
          <BiGroup
            size="2.5rem"
            style={{
              position: "absolute",
              top: "-1rem",
              left: "0.5rem",
              border: "1px solid #55555550",
              borderRadius: "5px",
              color: "#555555",
            }}
          />
          <CardText>
            <Text s="23px">250</Text>
            <Text color="#555555">Total Employee</Text>
          </CardText>
        </Cards>
        <Cards>
          <AiOutlineUsergroupDelete
            size="2.5rem"
            style={{
              position: "absolute",
              top: "-1rem",
              left: "0.5rem",
              border: "1px solid #55555550",
              borderRadius: "5px",
              color: "#555555",
              background: "#ff000080",
            }}
          />
          <CardText>
            <Text s="23px">3</Text>
            <Text color="#555555">Removed Employee</Text>
          </CardText>
        </Cards>
        <Cards>
          <BiUserPlus
            size="2.5rem"
            style={{
              position: "absolute",
              top: "-1rem",
              left: "0.5rem",
              border: "1px solid #55555550",
              borderRadius: "5px",
              color: "#555",
              background: "#00ff0080",
            }}
          />
          <CardText>
            <Text s="23px">+13</Text>
            <Text color="#555555">New Employee</Text>
          </CardText>
        </Cards>
      </CardWrapper>
      <DisplayArea>
        <Text s="17px" ml="1rem" color="#555555">
          Salary Expenses
        </Text>
        <Graph />
      </DisplayArea>
    </Container>
  );
};

export default Dashboard;
