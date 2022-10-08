import React, { useEffect } from 'react';

import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './SearchForm.module.css';

export default function SearchForm({ handleSubmit, setQuery, searchQuery }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Enter') {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.searchContainer}>
      <TextField
        sx={{ color: '#5534A5' }}
        onChange={handleChange}
        value={searchQuery}
        label="Find City or Region"
        variant="outlined"
        size="medium"
        color="primary"
        autoFocus
      />
      <IconButton
        sx={{ color: '#5534A5' }}
        type="submit"
        onClick={handleSubmit}
        size="large"
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}
