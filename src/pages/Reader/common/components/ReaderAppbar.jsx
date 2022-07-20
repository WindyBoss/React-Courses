import { useContext } from 'react';

import { themeContext } from 'context/authContext';
import { ButtonStyled } from 'components/CommonComponents';
import { Outlet } from 'react-router-dom';
import { ReaderAppContainer, StyledNavLink } from '../styles/Reader.styled';

export function ReaderAppbar() {
  const { mainTheme } = useContext(themeContext);

  return (
    <>
      <ReaderAppContainer>
        <StyledNavLink to='preview'>
          <ButtonStyled colors={mainTheme.colors}>Preview</ButtonStyled>
        </StyledNavLink>
        <StyledNavLink to='list'>
          <ButtonStyled colors={mainTheme.colors}>
            Publication List
          </ButtonStyled>
        </StyledNavLink>
        <StyledNavLink to='create'>
          <ButtonStyled colors={mainTheme.colors}>
            Create Publication
          </ButtonStyled>
        </StyledNavLink>
      </ReaderAppContainer>
      <Outlet />
    </>
  );
}
