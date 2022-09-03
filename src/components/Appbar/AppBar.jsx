import React from 'react';
import { Outlet } from 'react-router';
import { Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { Navigation, AppBarContainer, NavLink } from './Appbar.styled';

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const returnLocation =  location?.state?.from ? `${location?.state?.from.pathname}${location?.state?.from.search}` : -1

  return (
    <>
      <AppBarContainer>
        <Navigation>
          <Button sx={{fontWeight: 'bold'}} onClick={() => navigate(returnLocation)}>
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
