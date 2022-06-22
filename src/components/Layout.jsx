import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RoutesStyled, List } from './ThemeSwitcher.styled';
import { Link } from 'react-router-dom';

import { themeContext } from '../context/authContext';

import { ButtonStyled } from './globalStyles';

export const Layout = ({ children }) => {

  return (
  <themeContext.Consumer>
  {({mainTheme}) => {
    const {colors} = mainTheme;
    return (
    <div>
      <RoutesStyled>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/Counter'>
            <ButtonStyled type='button' colors={colors}>
              Counter 
            </ButtonStyled>
            </Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/SignupForm'>
            <ButtonStyled type='button' colors={colors}>
              Sign-up Form
            </ButtonStyled>
            </Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/ColorPicker'>
            <ButtonStyled type='button' colors={colors}>
              ColorPicker
              </ButtonStyled>
            </Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/Clock'>
          <ButtonStyled type='button' colors={colors}>
              Clock
              </ButtonStyled>
            </Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/News'>
            <ButtonStyled type='button' colors={colors}>
              News
            </ButtonStyled>
            </Link>
        </List>
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/Video'>
            <ButtonStyled type='button' colors={colors}>
              Video
            </ButtonStyled>
            </Link>
        </List>    
        <List>
          <Link style={{textDecoration: 'none'}} to='/react-homework-template/Reader'>
            <ButtonStyled type='button' colors={colors}>
              Reader
            </ButtonStyled>
            </Link>
        </List>     
        {children} 
      </RoutesStyled>
      <Outlet />
    </div>
      )}}
    </themeContext.Consumer>    
  );  
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
