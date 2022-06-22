import React from 'react';
import { IdleText } from './News.styled';

import { themeContext } from '../../context/authContext'

export function Idle() {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (    
    <>
      <IdleText colors={mainTheme.colors}>Find News</IdleText>
    </>
    )}
    </themeContext.Consumer>              
  );
};
