import { useState, useEffect, useRef, useContext } from 'react';
import { themeContext } from 'context/authContext';
import { ButtonStyled } from 'components/CommonComponents';

function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  const { mainTheme } = useContext(themeContext);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(`useEffect - ${Date.now()}`);
  });

  return (
    <div
      style={{
        backgroundColor: mainTheme.colors.containerBgColor,
        color: mainTheme.colors.mainText,
        display: 'inline-flex',
        alignItems: 'center',
        margin: '20px',
        padding: '20px',
        border: `1px solid ${mainTheme.colors.containerBorderColor}`,
        maxWidth: '500px',
        borderRadius: '5px',
      }}
    >
      <ButtonStyled
        colors={mainTheme.colors}
        onClick={() => setCount(c => c + 1)}
      >
        {count}
      </ButtonStyled>
      <p
        style={{
          marginLeft: '20px',
        }}
      >
        <code
          style={{ fontSize: '20px', color: mainTheme.colors.hoverBtnBgColor }}
        >
          {' '}
          UseEffect
        </code>{' '}
        of this component does not perform on first render
      </p>
    </div>
  );
};

export default SkipEffectOnFirstRender;
