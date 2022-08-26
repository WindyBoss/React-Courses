import styled from "styled-components";

/* 
& ImageList styled components
*/

export const ListImageContainer = styled.ul`
  display: inline-flex;
  flex-direction: column;
  margin-right: 40px;
`;

export const ListItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const SmallImageContainer = styled.div`
cursor: pointer;

  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;

  max-height: 85px;
  width: 85px;

  :hover {
    transform: scale(1.2)
  }
`;