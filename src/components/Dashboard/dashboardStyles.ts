import styled from "styled-components";
interface Props {
  mb?: string;
  margin?: string;
  mt?: string;
  color?: string;
}

interface textsize {
  s?: string;
  color?: string;
  ml?: string;
}

export const Heading = styled.h2<Props>`
  font-size: 20px;
  font-weight: 400;
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ color }) => (color ? color : "#000")};
  text-align: start;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Cards = styled.div`
  background: #fff;
  width: 20%;
  height: 80px;
  position: relative;
  align-text: right;
  align-contents: right;
  border-radius: 7px;
  margin-top: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardText = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.7rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const Text = styled.div<textsize>`
  font-size: ${({ s }) => (s ? s : "12px")};
  color: ${({ color }) => (color ? color : "black")};
  font-weight: 400;
  background: transparent;
  text-transform: capitalize;
  margin-left: ${({ ml }) => (ml ? ml : "")};
`;

export const GraphDisplay = styled.div`
  width: 90%;
  height: auto;
  background: #fff;
  border-radius: 7px;
  margin-top: 2rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2),
    4px 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0.6rem 0.2rem 0.2rem 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
