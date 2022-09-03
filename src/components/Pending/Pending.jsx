import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import { PendingContainer } from './Pending.styled';

export default function Pending() {
  return (
    <PendingContainer>
      <ThreeCircles
        ariaLabel="loading-indicator"
        outerCircleColor="#606dbc"
        middleCircleColor="#465298"
        innerCircleColor="grey"
        height={500}
        width={500}
      />
    </PendingContainer>
  );
}
