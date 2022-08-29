import { Outlet } from 'react-router-dom';
import ButtonStyled from 'components/ButtonStyled';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';

import { Navigation, StyledLink, MainContainer } from './AppBar.styled';

import { useSelector, useDispatch } from 'react-redux';
import { showTheme, setCurrentTheme } from 'redux/theme/themeSlice';

export default function AppBar() {
  // useSelector - return the element of redux state
  const { theme } = useSelector(showTheme);
  const dispatch = useDispatch();

  return (
    <MainContainer colors={theme.colors}>
      <Navigation>
        <StyledLink to="/">
          <ButtonStyled colors={theme.colors}>Home</ButtonStyled>
        </StyledLink>
        <StyledLink to="addTodo">
          <ButtonStyled colors={theme.colors}>Todo form</ButtonStyled>
        </StyledLink>
        <IconButton
          onClick={() => {
            theme.id === 'light'
              ? dispatch(setCurrentTheme('dark'))
              : dispatch(setCurrentTheme('light'));
          }}
        >
          {theme.id === 'light' ? (
            <ModeNightIcon sx={{ color: theme.colors.btnBgColor }} />
          ) : (
            <LightModeIcon sx={{ color: theme.colors.btnBgColor }} />
          )}
        </IconButton>
      </Navigation>

      <Outlet />
    </MainContainer>
  );
}
