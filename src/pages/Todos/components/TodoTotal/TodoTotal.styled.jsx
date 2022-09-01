import styled from '@emotion/styled';

export const TotalTodoContainer = styled.div`
  display: inline-block;
  padding: 20px;
  margin-left: 10px;
  background-color: transparent;
  font-size: 17px;
  border: ${props => `2px solid ${props.colors.containerBorderColor}`};
  border-radius: 5px;
  color: ${props => props.colors.mainText};
`;
