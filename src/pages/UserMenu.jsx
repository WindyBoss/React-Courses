import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import ctx from '../context/authContext';

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
    <div style={{display:'inline-flex', width: '250px', padding: '10px', margin: '20px'}}>
      <Button style={btnStyles(mainTheme.colors)} variant="contained" type='button' onClick={onLogOut}>Sign out</Button>
      <p style={{ minWidth: '100px', textAlign: 'center' }}>user: {user.name}</p>
    </div>
      )}
    </themeContext.Consumer>      
  );
};
