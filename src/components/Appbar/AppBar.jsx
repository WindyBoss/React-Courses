import React from 'react';
import { Outlet } from 'react-router';
import { Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { Navigation, AppBarContainer, NavLink } from './Appbar.styled';

export default function AppBar() {
  /*
  * Hook useNavigate - react-router-dom hook, which helps to manipulate with the stack history of page using (go back - or forward), 
  * or can navigate to specific url with or without replacing component
  */
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location?.state?.from);
  console.log(location);

  const returnLocation =  location?.state?.from ? `${location?.state?.from.pathname}${location?.state?.from.search}` : -1

  return (
    <>
      <AppBarContainer>
        <Navigation>
          <Button sx={{fontWeight: 'bold'}} onClick={() => navigate(returnLocation)}>
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
