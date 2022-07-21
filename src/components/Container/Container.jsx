import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function Container() {
  /* Outlet - component in instead of which the deep Route will be rendered */
  return <ContainerStyles><Outlet/></ContainerStyles>; 
}

const ContainerStyles = styled.main`
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
`;
