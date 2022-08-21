import styled, { createGlobalStyle } from "styled-components";

interface Text {
  alignment?: string;
  size?: string;
  width?: string;
  fw?: string;
  pl?: string;
  mt?: string;
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #ecf0f4;
}
`;

export const NavbarContainer = styled.div`
  width: 22%;
  align-items: start;
  min-height: 100vh;
  background: #fff;
  border-right: 1px solid #55555530;
  padding-top: 0.3rem;
`;

export const UpperNavBar = styled.div`
  background: #fff;
  height: 44%;
`;

export const NavbarCompanyDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background: #fff;
  margin: 0 7%;
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  width: 6rem;
  height: auto;
  background: #fff;
`;

export const NavbarName = styled.p`
  font-size: 28px;
  font-weight: bold;
  background: #fff;
  margin-top: 0.4rem;
  margin-left: -1.3rem;
`;

export const NavbarProfile = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: #fff;
`;

export const NavbarImg = styled.img`
  width: 30%;
  margin: 0 auto;
  background: #fff;
  border-radius: 15px;
`;

export const NavName = styled.p<Text>`
  width: ${({ width }) => (width ? width : "")}
  font-size: ${({ size }) => (size ? size : "0.7rem")};
  color: #000;
  font-weight: ${({ fw }) => (fw ? fw : "300")};
  background: #fff;
  margin-top: ${({ mt }) => (mt ? mt : "8px")};
  padding-left: ${({ pl }) => (pl ? pl : "")}
  
`;
export const NavProfileRole = styled.p`
  font-size: 0.7rem;
  color: #000;
  font-weight: 500;
  background: #fff;
`;

export const NavbarList = styled.ul`
  width: 100%;
  margin-top: 1.7rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #3f51b4;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 2rem 4px;
  height: 56%;
`;

export const NavLinks = styled.a`
  text-decoration: none;
  color: black;
  background: #3f51b4;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  padding-left: 7%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 7px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:hover {
    background: #ecf0f4;
    border-radius: 2rem;
  }
  }
`;

export const Container = styled.div`
  padding-left: 1.5%;
`;

// export const MainHeading = styled.h1`
//   font-size: clamp(2.3rem, 6vw, 4.5rem);
//   margin-bottom: 2rem;
//   color: ${({ inverse }) => (inverse ? "#403ae3" : "#fff")};
//   width: 100%;
//   letter-spacing: 4px;
//   text-align: center;
// `;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const Divider = styled.div`
  width: 78%;
`;

// export const TextWrapper = styled.span`
//   color: ${({ color }) => (color ? color : "")};
//   font-size: ${({ size }) => (size ? size : "")};
//   font-weight: ${({ weight }) => (weight ? weight : "")};
//   letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
//   padding: ${({ padding }) => (padding ? padding : "")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   margin-bottom: ${({ mb }) => (mb ? mb : "")};
//   margin-top: ${({ mt }) => (mt ? mt : "")};
// `;
// export const Section = styled.section`
//   padding: ${({ padding }) => (padding ? padding : "140px 0")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

//   @media screena and (max-width: 768px) {
//     padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
//   }
// `;
// export const Row = styled.div`
//   display: flex;
//   justify-content: ${({ justify }) => (justify ? justify : "")};
//   align-items: ${({ align }) => (align ? align : "")};
//   gap: ${({ gap }) => (gap ? gap : "")};
//   padding: ${({ padding }) => (padding ? padding : "")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
//   flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
// `;
// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: ${({ justify }) => (justify ? justify : "")};
//   align-items: ${({ align }) => (align ? align : "")};
//   gap: ${({ gap }) => (gap ? gap : "")};
//   padding: ${({ padding }) => (padding ? padding : "")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
// `;

// export const Button = styled.button`
//   border-radius: 4px;
//   background: none;
//   white-space: nowrap;
//   padding: 10px 20px;
//   font-size: 16px;
//   color: #fff;
//   outline: none;
//   border: 2px soild #fff;
//   cursor: pointer;
//   overflow: hidden;
//   position: relative;

//   &:before {
//     background: #fff;
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: -1;
//     transition: all 0.6s ease;
//     width: 100%;
//     height: 0%;
//     transform: translate(-50%, -50%) rotate(45deg);
//   }

//   &:hover:before {
//     height: 500%;
//   }

//   &:hover {
//     color: black;
//   }
// `;

export default GlobalStyle;
