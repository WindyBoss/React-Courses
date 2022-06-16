import React, { Component, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export class NewSearchFormClass extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          id="outlined-basic"
          label="Text News"
          variant="outlined"
          size="small"
        />
        <Button style={{ fontSize: '10px', marginLeft: '10px' }} endIcon={<SearchIcon />} variant="contained" type="submit">Search</Button>
      </form>
    );
  };
};

NewSearchFormClass.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export function NewSearchFormHooks({ onSubmit }) {
  /*
  * instead of using state in class, we use useState hook to create state in functional component Hook
  * useState => returns array with two elements: [x, setX], where x is element of state and setX is function to change it
  * It is good practice to use useState hook for single element of state in functional component, because it is easier to control
  */
  const [query, setQuery] = useState('');

  /*
  * in Hook function component instead of methods of the class we use functions inside functional component
  */
  const handleChange = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  /*
  * TextField => styled input taken from Mui library
  * Button => styled button taken from Mui library, with icon (SearchIcon)
  */

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
      <TextField
        type="text"
        value={query}
        onChange={handleChange}
        id="outlined-basic"
        label="Text News"
        variant="outlined"
        size='small'
      />
      <Button style={{ fontSize: '10px', marginLeft: '10px' }} endIcon={<SearchIcon />} variant="contained" type="submit">Search</Button>
    </form>
  );
};

NewSearchFormHooks.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
