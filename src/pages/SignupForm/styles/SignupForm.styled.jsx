import styled from 'styled-components';

export const UserListContainer = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-direction: column;

  min-width: 270px;
  padding: 10px 20px 10px 20px;
  margin-left: 30px;
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};

`;

export const UserListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.colors.mainText};
  padding: 5px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border: 1px solid white;

  padding: 20px;
  background-color: ${props => props.colors.containerBgColor};
  color: ${props => props.colors.mainText};
  border: ${props => `1px solid ${props.colors.containerBorderColor}`};

`;

export const FormLabel = styled.label`
position: relative;
margin-bottom: 10px;
margin-left: auto;
`;

export const LabelName = styled.span`
color: black;
font-size: 12px;
margin: 10px 15px 15px 20px;
color: ${props => props.colors.mainText};

`;

export const InfoContainer = styled.div`
margin-left: 15px;
`;

export const MainFormContainer = styled.div`
display: inline-block;
  border: 1px solid white;
  padding: 20px;
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const UserListText = styled.p`
:not(:last-child) {
  margin-right: 20px;
}
color: ${props => props.colors.mainText};

`;
