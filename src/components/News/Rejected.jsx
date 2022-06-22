import React from 'react';
import { PendingText } from './News.styled';

import { themeContext } from '../../context/authContext'

export function Rejected() {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (    
    <>
      <PendingText colors={mainTheme.colors}>Ooops, something went wrong, try again</PendingText>
    </>
    )}
    </themeContext.Consumer>          

  );
};
