/** @format */

import styled from "styled-components";

/* 
& Modal styled components
*/

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 78px;
  right: 20px;

  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  gap: 32px;

  width: 325px;
  max-height: 90vh;
  background: #ffffff;

  overflow: scroll;
`;
