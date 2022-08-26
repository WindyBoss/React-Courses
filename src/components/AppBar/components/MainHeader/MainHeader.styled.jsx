/** @format */
import styled from "styled-components";

/* 
& MainHeader styled components
*/

export const Header = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 80px;
  min-width: 90vw;
  background-color: #fff;

  padding-left: 100px;
  padding-right: 100px;

  z-index: 100;
`;

export const AppBarRightPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIconContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

export const ItemAmount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  background-color: #000;

  border-radius: 50%;

  color: #fff;
  font-size: 14px;
`;