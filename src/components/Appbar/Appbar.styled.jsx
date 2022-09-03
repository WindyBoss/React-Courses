import styled from 'styled-components';
import { NavLink as RouteLink } from 'react-router-dom';

export const Navigation = styled.nav`
display: flex;
margin-left: 80px;
justify-content: space-between;
width: 500px;
align-items: ;center;
`;

export const AppBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const NavLink = styled(RouteLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #2196f3;
  }
`;
