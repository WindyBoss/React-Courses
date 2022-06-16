import React from 'react';

import { PendingText, RotareIcon } from './News.styled';

/*
* RotareIcon => Mui labrary icon with animation by using style components
*/

export function Pending() {
  return (
    <>
      <PendingText>
        Loading...
        <RotareIcon/>
      </PendingText>
    </>
  );
};
