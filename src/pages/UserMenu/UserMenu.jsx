import React, { useContext } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { themeContext } from '../../context/authContext';
import { ButtonStyled } from 'components/CommonComponents';

export function UserMenu({ onLogOut, user }) {
  const { mainTheme } = useContext(themeContext);

  return (
    <div
      style={{
        color: mainTheme.colors.mainText,
        display: 'inline-flex',
        minWidth: '250px',
        padding: '10px',
        margin: '20px',
        alignItems: 'center',
      }}
    >
      <ButtonStyled
        colors={mainTheme.colors}
        variant="contained"
        type="button"
        onClick={onLogOut}
        addFeat={{
          minWidth: '120px',
          maxHeight: '45px',
          marginRight: '20px',
        }}
      >
        Sign out
      </ButtonStyled>
      <p style={{ textAlign: 'center' }}>Welcome: {user}</p>
      <AccountCircleIcon style={{ marginLeft: '5px' }} />
    </div>
  );
}
