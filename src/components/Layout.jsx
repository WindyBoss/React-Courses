import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RoutesStyled, List, LinkStyled } from './ThemeSwitcher.styled';

import { themeContext } from '../context/authContext';

import { ButtonStyled } from './globalStyles';

export const Layout = ({ children }) => {

  return (
  <themeContext.Consumer>
  {({mainTheme}) => {
    const {colors} = mainTheme;
    return (
    <div>
      <RoutesStyled colors={mainTheme.colors}>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Counter'>
              <ButtonStyled type='button' colors={colors}>
                Counter 
              </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/SignupForm'>
              <ButtonStyled type='button' colors={colors}>
                Sign-up Form
              </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/ColorPicker'>
              <ButtonStyled type='button' colors={colors}>
                ColorPicker
                </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Clock'>
            <ButtonStyled type='button' colors={colors}>
                Clock
                </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/News'>
              <ButtonStyled type='button' colors={colors}>
                News
              </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Video'>
              <ButtonStyled type='button' colors={colors}>
                Video
              </ButtonStyled>
              </LinkStyled>
          </List>    
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Reader'>
              <ButtonStyled type='button' colors={colors}>
                Reader
              </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/ReaderWithApi'>
              <ButtonStyled type='button' colors={colors}>
                Reader With Api
              </ButtonStyled>
              </LinkStyled>
          </List>          
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Tabs'>
              <ButtonStyled type='button' colors={colors}>
                Tabs
              </ButtonStyled>
              </LinkStyled>
          </List> 
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/TodoList'>
              <ButtonStyled type='button' colors={colors}>
              TodoList
              </ButtonStyled>
              </LinkStyled>
          </List>
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Pokemon'>
              <ButtonStyled type='button' colors={colors}>
              Pokemon
              </ButtonStyled>
              </LinkStyled>
          </List>   
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/SkipEffectOnFirstRender'>
              <ButtonStyled type='button' colors={colors}>
              Skip Effect On First Render
              </ButtonStyled>
              </LinkStyled>
          </List> 
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/Friends'>
              <ButtonStyled type='button' colors={colors}>
              Friends
              </ButtonStyled>
              </LinkStyled>
          </List>   
          <List>
            <LinkStyled style={{textDecoration: 'none'}} to='/react-homework-template/MediaPlayer'>
              <ButtonStyled type='button' colors={colors}>
              MediaPlayer
              </ButtonStyled>
              </LinkStyled>
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
