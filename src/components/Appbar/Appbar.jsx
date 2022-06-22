import {useContext} from 'react';
import authContext from '../../context/authContext';
import { Layout } from '../Layout';
import UserMenu from '../../pages/UserMenu';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

import { themeContext } from '../../context/authContext';

import { btnStyles } from 'components/globalStyles';

/*
* this Appbar is made by hook useContext, where all information is written in variable
*/
export default function Appbar() {
  const { user, isLoggedIn, onLogIn, onLogOut, mainTheme, changeTheme } = useContext(authContext);


  /*
  * useContext can be used multiple time in on App
  const x = useContext(qqq);
  const user = useContext(xxx);
  */
  
  return (
    <themeContext.Consumer>
      {({mainTheme}) => (
        <header>
        <Layout>
          {isLoggedIn ? (
            <UserMenu onLogOut={onLogOut} user={user} />
          ) : (
            <div style={{ display: 'inline-flex', width: '250px', padding: '10px', margin: '20px' }}>
              <Button 
                style={btnStyles(mainTheme.colors)} 
                variant="contained" 
                endIcon={<PersonIcon />} 
                onClick={onLogIn} 
                type="button">Log in</Button>
            </div>
          )}
        </Layout>
        </header>
      )}
    </themeContext.Consumer>
  );
};



/*
* this Appbar is made by using authContext.Consumer component, which made code less readable than by using hook useContext
*/

// export default function Appbar() {
//   return (
//     <authContext.Consumer>
//       {({ user, isLoggedIn, onLogIn, onLogOut }) => (
//         <header>
//           <Layout>
//           {isLoggedIn ? (
//             <UserMenu onLogOut={onLogOut} user={user} />
//           ) : (
//             <div style={{ display: 'inline-flex', width: '250px', padding: '10px', margin: '20px' }}>
//               <Button style={{ fontSize: '10px', width: '100px', marginRight: '15px' }} variant="contained" endIcon={<PersonIcon />} onClick={onLogIn} type="button">Log in</Button>
//             </div>
//             )}
//           </Layout>
//         </header>
//       )}
//     </authContext.Consumer>
//   );
// };