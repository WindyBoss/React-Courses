import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

import { themeContext } from '../../../context/authContext';
import { ButtonStyled, TextFieldStyled } from 'components/CommonComponents';

export function NewSearchFormHooks({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleChange = e => setQuery(e.currentTarget.value);
  const { mainTheme } = useContext(themeContext);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <TextFieldStyled
        colors={mainTheme.colors}
        type="text"
        value={query}
        onChange={handleChange}
        id="outlined-basic"
        label={'Text News'}
        variant="outlined"
        size="small"
        color="secondary"
        hoverColor="primary"
        focused="focused"
        darkTheme={true}
      />
      <ButtonStyled
        style={{ fontSize: '10px', marginLeft: '10px' }}
        endIcon={<SearchIcon />}
        colors={mainTheme.colors}
        type="submit"
      >
        Search
      </ButtonStyled>
    </form>
  );
}

NewSearchFormHooks.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
