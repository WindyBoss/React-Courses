import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonStyled } from 'components/CommonComponents';
import { themeContext } from 'context/authContext';
import { HomepageContainer } from 'components/CommonComponents';

export function RedirectContainer({ containerText, buttonText, redirectLink }) {
  const { mainTheme } = useContext(themeContext);
  return (
    <>
      <HomepageContainer colors={mainTheme.colors}>
        {containerText}
      </HomepageContainer>
      {redirectLink && (
        <NavLink style={{ textDecoration: 'none' }} to={redirectLink}>
          <ButtonStyled colors={mainTheme.colors}>{buttonText}</ButtonStyled>
        </NavLink>
      )}
    </>
  );
}
