/** @format */

import styled from "styled-components";

/* 
& Counter styled components
*/

export const CounterContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => (props.size === "large" ? " 288px" : "190px")};
  margin-right: ${(props) => (props.size === "large" ? " 24px" : "8px")};
`;

export const QuantityBtn = styled.button`
  height: ${(props) => (props.size === "large" ? " 45px" : "24px")};
  width: ${(props) => (props.size === "large" ? " 45px" : "24px")};

  background-color: transparent;

  border: 1px solid #1d1f22;

  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
`;
