import React, { useContext } from 'react';
import { PendingText } from '../../styles/News.styled';

import { themeContext } from '../../../../context/authContext';

export function Rejected() {
  const { mainTheme } = useContext(themeContext);

  return (
    <>
      <PendingText colors={mainTheme.colors}>
        Ooops, something went wrong, try again
      </PendingText>
    </>
  );
}
