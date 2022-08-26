/** @format */

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

/* 
& Total styled components
*/

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(16px, 16px + 0.3vw, 26px);
  line-height: 18px;
  color: #1d1f22;
`;

export const TotalAmount = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: #1d1f22;
`;

export const Symbol = styled.span`
  margin-right: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CartBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 16px 32px;
  margin-bottom: 40px;

  background-color: ${(props) =>
    props.checkOutBtn ? "#5ece7b" : "transparent"};

  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  color: ${(props) => (props.checkOutBtn ? "#ffffff" : "#1D1F22")};

  border: ${(props) =>
    props.checkOutBtn ? "1px solid transparent" : "1px solid #1D1F22"};

  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
