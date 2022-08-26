/** @format */

import styled from "styled-components";

/* 
& CartTotal styled components
*/

export const TotalContainer = styled.ul`
  list-style: none;
`;

export const TotalEl = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }

  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(20px, 20px + 0.2vw, 30px);
  line-height: 117%;

  color: #1d1f22;
`;

export const TotalAmount = styled.span`
  margin-left: 44px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(20px, 20px + 0.2vw, 30px);
  line-height: 100%;

  color: #1d1f22;
`;

export const Symbol = styled.span`
  margin-right: 5px;
`;
