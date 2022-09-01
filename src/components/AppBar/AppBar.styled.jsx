import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  border-bottom: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: red;
  }
`;

export const MainContainer = styled.div`
  background-color: ${props => props.colors.globalBgColor};
  width: 100vw;
  height: 100vh;
`;
