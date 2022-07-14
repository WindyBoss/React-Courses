import React from 'react';
import { Outlet } from 'react-router';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Navigation, AppBarContainer, NavLink } from './Appbar.styled';

export default function AppBar() {
  const navigate = useNavigate();

  return (
    <>
      <AppBarContainer>
        <Navigation>
          <Button sx={{fontWeight: 'bold', fontFamily: '"-apple-system", "BlinkMacSystemFont", "Segoe U", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif";'}} onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <NavLink to="/react-homework-template/">Home</NavLink>
          <NavLink to="/react-homework-template/authors">Authors</NavLink>
          <NavLink to="/react-homework-template/books">Books</NavLink>
        </Navigation>
      </AppBarContainer>
      <Outlet />
    </>
  );
}
