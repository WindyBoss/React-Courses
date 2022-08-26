/** @format */

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h2`
  text-align: center;

  margin: 0;

  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(24px, 24px + 0.4vw, 38px);
  line-height: 125%;
  color: #1d1f22;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  background-color: transparent;
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

  color: #1d1f22;

  margin-bottom: 40px;

  border: 1px solid #1d1f22;

  :hover {
    transform: scale(1.05);
  }
`;
