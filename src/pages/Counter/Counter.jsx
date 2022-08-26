import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from 'redux/counter/counterSlice';

import { ButtonStyled, TextFieldStyled } from 'components/CommonComponents';
import { themeContext } from 'context/themeContext';
import { useContext } from 'react';
import { useState } from 'react';

export default function Counter() {
  const { mainTheme } = useContext(themeContext);
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [changeNumber, setChangeNumber] = useState(1);

  return (
    <div>
      <ButtonStyled
        colors={mainTheme.colors}
        onClick={() => dispatch(changeValue(changeNumber))}
      >
        Increase
      </ButtonStyled>
      <span style={{ fontSize: '25px', margin: '30px' }}>{count}</span>
      <ButtonStyled
        colors={mainTheme.colors}
        onClick={() => dispatch(changeValue(-changeNumber))}
      >
        Decrease
      </ButtonStyled>
      <TextFieldStyled
        colors={mainTheme.colors}
        size="large"
        type="number"
        value={changeNumber}
        onChange={e => setChangeNumber(Number(e.target.value))}
      />
    </div>
  );
}
