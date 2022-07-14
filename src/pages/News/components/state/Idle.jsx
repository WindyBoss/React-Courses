import React, { useContext } from 'react';
import { IdleText } from '../../styles/News.styled';

import { themeContext } from '../../../../context/authContext';

export function Idle() {
  const { mainTheme } = useContext(themeContext);

  return (
    <>
      <IdleText colors={mainTheme.colors}>Find News</IdleText>
    </>
  );
}
