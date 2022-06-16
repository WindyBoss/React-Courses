import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RoutesStyled, List } from './ThemeSwitcher.styled';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Layout = ({ children }) => {
  // Children - sigh up button with user Mango
  return (
    <div>
      <RoutesStyled>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/Counter'><Button variant="contained" type="button">Counter </Button></Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/SignupForm'><Button variant="contained" type="button">SignupForm</Button></Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/ColorPicker'><Button variant="contained" type="button">ColorPicker</Button></Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/Clock'><Button variant="contained" type="button">Clock</Button></Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/News'><Button variant="contained" type="button">News</Button></Link>
        </List>
        {children} 
      </RoutesStyled>
      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
