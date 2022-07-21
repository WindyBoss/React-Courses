import React, { useState, useContext } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { themeContext } from 'context/authContext';
import { ButtonStyled } from 'components/CommonComponents';

import {
  CounterContainer,
  BtnContainer,
  TotalClickCounter,
  MainContainer,
} from './styles/Counter.styled';

function CounterHooks() {
  const { mainTheme } = useContext(themeContext);

  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  const totalClick = counterB + counterA;

  return (
    <BtnContainer colors={mainTheme.colors}>
      <ButtonStyled
        colors={mainTheme.colors}
        endIcon={<ArrowUpwardIcon />}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Counter A {counterA} Clicks
      </ButtonStyled>
      <TotalClickCounter colors={mainTheme.colors}>
        {totalClick}
      </TotalClickCounter>
      <ButtonStyled
        colors={mainTheme.colors}
        endIcon={<ArrowUpwardIcon />}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Counter B {counterB} Clicks
      </ButtonStyled>
    </BtnContainer>
  );
}

function CounterPage() {
  const { mainTheme } = useContext(themeContext);

  return (
    <MainContainer>
      <CounterContainer colors={mainTheme.colors}>
        <p>CounterHooks</p>
        <CounterHooks />
      </CounterContainer>
    </MainContainer>
  );
}

export  default CounterPage;
