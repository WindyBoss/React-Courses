import styled from "styled-components";

/* 
& CurrencyContainer styled components
*/

export const DropDownListContainer = styled.div`
  position: absolute;
  top: 50px;

  z-index: 1000;
`;
export const DropDownList = styled.ul`
  padding: 0;
  background-color: #ffffff;

  color: #1d1f22;
  font-size: clamp(12px, 12px + 0.2vw, 20px);
  font-weight: 500;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;

  padding: 10px;
  padding-left: 50%;

  list-style: none;
  background-color: #ffffff;

  :hover {
    background: rgba(238, 238, 238, 1);
  }
`;

export const CurrencySymbol = styled.span`
  margin-right: 5px;
`;
