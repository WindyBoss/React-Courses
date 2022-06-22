import React, { Component, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

import { themeContext } from '../../context/authContext'
import { ButtonStyled, TextFieldStyled } from 'components/globalStyles';


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
      <themeContext.Consumer>
      {({mainTheme}) => (    
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextFieldStyled
        colors={mainTheme.colors}
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          id="outlined-basic"
          label={"Text News"}
          variant="outlined"
          size="small"
          color="secondary"
          hoverColor="primary"
          focused='focused'
          darkTheme={true}
        />
      <ButtonStyled 
      style={{ fontSize: '10px', marginLeft: '10px' }} 
      endIcon={<SearchIcon />} 
      colors={mainTheme.colors} 
      type="submit">Search</ButtonStyled>
      </form>
    )}
    </themeContext.Consumer>          

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
    <themeContext.Consumer>
    {({mainTheme}) => (  
    <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
        <TextFieldStyled
        colors={mainTheme.colors}
          type="text"
          value={query}
          onChange={handleChange}
          id="outlined-basic"
          label={"Text News"}
          variant="outlined"
          size="small"
          color="secondary"
          hoverColor="primary"
          focused='focused'
          darkTheme={true}
        />
      <ButtonStyled 
      style={{ fontSize: '10px', marginLeft: '10px' }} 
      endIcon={<SearchIcon />} 
      colors={mainTheme.colors} 
      type="submit">Search</ButtonStyled>
    </form>
    )}
    </themeContext.Consumer>          
  );
};

NewSearchFormHooks.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
