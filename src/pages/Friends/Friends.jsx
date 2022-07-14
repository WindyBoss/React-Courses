import { useState, useMemo, useContext } from 'react';
import { ButtonStyled, TextFieldStyled } from '../../components/CommonComponents';
import { themeContext } from 'context/authContext';

import FriendList from './components/FriendList';

import allFriends from '../../data/friends.json';

export function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(allFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    return friends.filter(friend =>
      friend.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, friends]);

  const { mainTheme } = useContext(themeContext);

  return (
    <div style={{ position: 'relative' }}>
      <ButtonStyled
        colors={mainTheme.colors}
        addFeat={{ position: 'absolute', top: '50px', left: '50px' }}
        onClick={() => setCount(c => c + 1)}
      >
        {count}
      </ButtonStyled>
      <div
        style={{
          marginLeft: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          transform: 'translateX(-50%)',
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
          padding: '20px',
          marginBottom: '20px',
          marginTop: '20px',
          color: mainTheme.colors.mainText,
        }}
      >
        <TextFieldStyled
          colors={mainTheme.colors}
          onChange={e => setFilter(e.target.value)}
          type="text"
          label="Filter Friends"
          value={filter}
        />
        <p style={{ fontSize: '20px' }}>{visibleFriends.length}</p>
      </div>
      <FriendList visibleFriends={visibleFriends} />
    </div>
  );
}
