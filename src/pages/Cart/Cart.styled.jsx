/** @format */

import styled from "styled-components";

/* 
& Cart styled components
*/

export const CartTitle = styled.h3`
  margin: 0;

  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(24px, 24px + 0.4vw, 38px);
  line-height: 125%;
  color: #1d1f22;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CartBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  background-color: ${(props) =>
    props.checkOutBtn ? "#5ece7b" : "transparent"};
  border: none;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: ${(props) => (props.checkOutBtn ? "#ffffff" : "#1D1F22")};

  margin-bottom: 40px;

  border: ${(props) =>
    props.checkOutBtn ? "1px solid transparent" : "1px solid #1D1F22"};

  :hover {
    transform: scale(1.05);
  }
`;
