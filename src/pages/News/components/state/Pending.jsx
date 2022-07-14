import React, { useContext } from 'react';

import { PendingText, RotareIcon } from '../../styles/News.styled';
import { themeContext } from '../../../../context/authContext';

/*
 * RotareIcon => Mui labrary icon with animation by using style components
 */

export function Pending() {
  const { mainTheme } = useContext(themeContext);

  return (
    <>
      <PendingText colors={mainTheme.colors}>
        Loading...
        <RotareIcon />
      </PendingText>
    </>
  );
}
