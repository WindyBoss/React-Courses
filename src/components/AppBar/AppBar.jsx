import { Outlet } from 'react-router-dom';
import { ButtonStyled } from 'components/CommonComponents';
import { themeContext } from 'context/themeContext';
import { useContext } from 'react';

import { Navigation, StyledLink } from './AppBar.styled';

export default function AppBar() {
  const { mainTheme } = useContext(themeContext);
  return (
    <>
      <Navigation>
        <StyledLink to="counter">
          <ButtonStyled colors={mainTheme.colors}>Counter</ButtonStyled>
        </StyledLink>
        <StyledLink to="todos">
          <ButtonStyled colors={mainTheme.colors}>Todos</ButtonStyled>
        </StyledLink>
      </Navigation>

      <Outlet />
    </>
  );
}
