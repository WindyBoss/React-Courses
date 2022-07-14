import React from 'react';
import { Outlet } from 'react-router';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Navigation, AppBarContainer, NavLink } from './Appbar.styled';

export default function AppBar() {
  /*
  * Hook useNavigate - react-router-dom hook, which helps to manipulate with the stack history of page using (go back - or forward), 
  * or can navigate to specific url with or without replacing component
  */
  const navigate = useNavigate();

  return (
    <>
      <AppBarContainer>
        <Navigation>
          <Button sx={{fontWeight: 'bold'}} onClick={() => navigate(-1)}>
            Go Back
          </Button>
          {/* NavLink - component of react-router-dom lib, which is similar to tag a, but without page reload and with possibility to style it (Link -cannot be styled)*/}
          {/* NavLink is used with attribute to, which represent the direction to component. it to='*' - it goes everywhere */}
          <NavLink to="/react-homework-template/">Home</NavLink>                    
          <NavLink to="/react-homework-template/authors">Authors</NavLink>
          <NavLink to="/react-homework-template/books">Books</NavLink>
        </Navigation>
      </AppBarContainer>
      {/* Outlet - component of react-router-dom lib. which is used as the anchor, on which place is placed the deeper Route element */}
      <Outlet /> 
    </>
  );
}
