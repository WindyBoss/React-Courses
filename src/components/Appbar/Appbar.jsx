import { useContext } from 'react';
import { Layout } from '../Layout';
import { UserMenu, Battery } from '../../pages';
import PersonIcon from '@mui/icons-material/Person';

import { themeContext, authContext } from '../../context/authContext';
import { ButtonStyled, TextFieldStyled } from 'components/CommonComponents';

export default function Appbar() {
  const { user, isLoggedIn, onLogIn, onLogOut, setUser } =
    useContext(authContext);


  const { mainTheme } = useContext(themeContext);

  return (
    <header>
      <Layout>
        {isLoggedIn ? (
          <UserMenu onLogOut={onLogOut} user={user} />
        ) : (
          <div
            style={{
              display: 'inline-flex',
              width: '250px',
              padding: '10px',
              margin: '20px',
              alignItems: 'center',
            }}
          >
            <ButtonStyled
              variant="contained"
              endIcon={<PersonIcon />}
              onClick={onLogIn}
              colors={mainTheme.colors}
              addFeat={{
                minWidth: '120px',
                maxHeight: '45px',
                marginRight: '20px',
              }}
              type="button"
            >
              Log in
            </ButtonStyled>
            <TextFieldStyled
              onChange={e => setUser(e.target.value)}
              colors={mainTheme.colors}
              addFeat={{ minWidth: '150px' }}
              size="small"
              label="Text user name"
            />
          </div>
        )}
        <Battery />
      </Layout>
    </header>
  );
}
