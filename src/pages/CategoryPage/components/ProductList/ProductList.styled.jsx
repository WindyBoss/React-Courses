/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

/* 
& ProductList styled components
*/

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 103px;
`;

export const ProductEl = styled.li`
  list-style: none;
  padding: 16px;

  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;

  max-height: 330px;
  min-height: 25vw;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: clamp(10px, 10px + 0.6vw, 20px);
  line-height: 160%;

  color: #1d1f22;

  &:last-child {
    font-weight: bold;
  }
`;

export const CurrencySymbol = styled.span`
  margin-right: 10px;
`;

export const OutOfStockText = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(50%);

  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 14px + 0.8vw, 30px);
  line-height: 160%;

  color: rgba(141, 143, 154, 1);

`;
