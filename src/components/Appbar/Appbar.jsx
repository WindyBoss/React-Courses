import {useContext} from 'react';
import authContext from '../../context/authContext';
import { Layout } from '../Layout';
import UserMenu from '../../pages/UserMenu';
import PersonIcon from '@mui/icons-material/Person';

import { themeContext } from '../../context/authContext';

import { ButtonStyled, TextFieldStyled } from 'components/globalStyles';

import { Battery } from '../../pages/Battery';

/*
* this Appbar is made by hook useContext, where all information is written in variable
*/
export default function Appbar() {
  const { user, isLoggedIn, onLogIn, onLogOut, setUser } = useContext(authContext);

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
            <div style={{ display: 'inline-flex', width: '250px', padding: '10px', margin: '20px', alignItems: 'center'}}>
              <ButtonStyled 
                variant="contained" 
                endIcon={<PersonIcon />} 
                onClick={onLogIn} 
                colors={mainTheme.colors}
                addFeat={{
                  minWidth: '120px',
                  maxHeight: '45px',
                  marginRight: '20px'
                }}
                type="button">Log in</ButtonStyled>
                <TextFieldStyled 
                  onChange={(e) => setUser(e.target.value)}        
                  colors={mainTheme.colors}
                  addFeat={{minWidth: '150px'}}
                  size='small'
                  label='Text user name'
                />                
            </div>
          )}
          <Battery/>
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