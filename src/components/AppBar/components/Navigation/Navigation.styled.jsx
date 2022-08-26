/** @format */

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

/* 
& Navigation styled components
*/
export const NavLink = styled(Link)`
  position: relative;

  height: 100%;

  color: #1d1f22;

  font-family: Raleway;
  font-size: clamp(14px, 14px + 0.3vw, 24px);
  font-weight: 400;
  text-decoration: none;
  line-height: 19.2px;

  :not(:last-child) {
    margin-right: 32px;
  }

  &.active {
    color: #5ece7b;

    ::after {
      content: "";

      position: absolute;
      bottom: -30px;
      left: -20%;

      width: 140%;
      height: 2px;
      background-color: #5ece7b;
    }
  }
`;
