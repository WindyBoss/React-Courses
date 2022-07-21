import React, { useContext } from 'react';
import { themeContext } from 'context/authContext';
import { HomepageContainer } from 'components/CommonComponents';

export default function RedirectContainer({ containerText }) {
  const { mainTheme } = useContext(themeContext);
  return (
    <>
      <HomepageContainer colors={mainTheme.colors}>
        {containerText}
      </HomepageContainer>
    </>
  );
}
