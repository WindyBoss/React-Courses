import React, { useContext } from 'react';
import Button from '@mui/material/Button';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {themeContext} from '../context/authContext';


import { btnStyles } from 'components/globalStyles';

// export default function UserMenu() {
//   const {user, logIn, logOut} = useContext(ctx);

//   return (
//     <div style={{display:'inline-flex', border: '1px solid black', padding: '10px', margin: '20px'}}>
//       <Button style={{fontSize: '10px', width: '100px', marginRight: '15px'}} variant="contained" type='button' onClick={logIn}>Sign in</Button>
//       <p style={{minWidth: '100px', textAlign: 'center'}}>user: {user}</p>
//       <Button style={{fontSize: '10px', width: '100px', marginLeft: '15px'}} variant="contained" type='button' onClick={logOut}>Sign out</Button>
//     </div>
//   );
// };



export default function UserMenu({ onLogOut, user }) {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
    <div style={{display:'inline-flex', width: '450px', padding: '10px', margin: '20px', alignItems: 'center', color: mainTheme.colors.mainText,}}>
      <Button style={btnStyles(mainTheme.colors)} variant="contained" type='button' onClick={onLogOut}>Sign out</Button>
      <p style={{ minWidth: '100px', textAlign: 'center', marginLeft: '20px' }}>Welcome:  {user.name}</p>
       <AccountCircleIcon style={{marginLeft: '5px'}} />
    </div>
      )}
    </themeContext.Consumer>      
  );
};
