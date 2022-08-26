/** @format */

import styled from "styled-components";

/* 
& ImageSwitcher styled components
*/

export const ImageSelectionContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
`;

export const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.73);

  transform: ${(props) => props.rotate};

  :not(:last-child) {
    margin-right: 8px;
  }
`;
