import styled from '@emotion/styled';
export const TextContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
  color: ${props => props.colors.mainText};
`;

export const TextType = styled.span`
  font-weight: bold;
`;

export const TaskHeader = styled.h2`
  margin-top: 0;
  font-size: 17px;
  align-items: center;
  display: flex;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.5;
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const ListEl = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  border: ${props => `2px solid ${props.colors.containerBorderColor}`};
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.counterColor};
  width: 600px;
`;

export const TodoListContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;
