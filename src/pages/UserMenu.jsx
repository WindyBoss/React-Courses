import React, { useContext } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {themeContext} from '../context/authContext';


import { ButtonStyled } from 'components/globalStyles';

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
    <div style={{ color: mainTheme.colors.mainText, display: 'inline-flex', minWidth: '250px', padding: '10px', margin: '20px', alignItems: 'center'}}>
      <ButtonStyled 
        colors={mainTheme.colors} 
        variant="contained" 
        type='button' 
        onClick={onLogOut}
        addFeat={{
          minWidth: '120px',
          maxHeight: '45px',
          marginRight: '20px'
        }}
      >Sign out</ButtonStyled>
      <p style={{ textAlign: 'center' }}>Welcome:  {user}</p>
       <AccountCircleIcon style={{marginLeft: '5px'}} />
    </div>
      )}
    </themeContext.Consumer>      
  );
};
