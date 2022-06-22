import React from 'react';
import { PendingText, RotareIcon } from './News.styled';
import { themeContext } from '../../context/authContext'

/*
* RotareIcon => Mui labrary icon with animation by using style components
*/

export function Pending() {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (    
    <>
      <PendingText colors={mainTheme.colors}>
        Loading...
        <RotareIcon/>
      </PendingText>
    </>
    )}
    </themeContext.Consumer>          
    
  );
};
