import { useContext } from 'react';
import { themeContext } from '../../../context/authContext';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';

export default function FriendList({ visibleFriends }) {
  const { mainTheme } = useContext(themeContext);

  return (
    <ul
      style={{
        border: `1px solid ${mainTheme.colors.containerBorderColor}`,
        padding: '20px',
        margin: '20px',
        display: 'inline-flex',
        flexWrap: 'wrap',
      }}
    >
      {visibleFriends.map((friend, idx) => (
        <li
          key={idx}
          style={{
            alignItems: 'center',
            display: 'inline-flex',
            color: mainTheme.colors.mainText,
            border: `1px solid ${mainTheme.colors.containerBorderColor}`,
            width: '20%',
            padding: '10px',
          }}
        >
          <AccountBoxTwoToneIcon
            color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}
          />
          <p style={{ marginLeft: '5px' }}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
