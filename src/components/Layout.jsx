import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RoutesStyled, List, LinkStyled } from './AppLayoutStyles';

import { themeContext } from '../context/authContext';
import { Container } from './Container/Container.jsx';

import { ButtonStyled } from './CommonComponents';
export const Layout = ({ children }) => {
  const { mainTheme } = useContext(themeContext);

  return (
    <div>
      <RoutesStyled colors={mainTheme.colors}>
      <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Home
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Counter"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Counter
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/SignupForm"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Sign-up Form
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/ColorPicker"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              ColorPicker
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Clock"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Clock
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/News"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              News
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Video"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Video
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Reader"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Reader
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/ReaderWithApi"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Reader With Api
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Tabs"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Tabs
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/TodoList"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              TodoList
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Pokemon"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Pokemon
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/SkipEffectOnFirstRender"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Skip Effect On First Render
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/Friends"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              Friends
            </ButtonStyled>
          </LinkStyled>
        </List>
        <List>
          <LinkStyled
            colors={mainTheme.colors}
            style={{ textDecoration: 'none' }}
            to="/react-homework-template/MediaPlayer"
          >
            <ButtonStyled type="button" colors={mainTheme.colors}>
              MediaPlayer
            </ButtonStyled>
          </LinkStyled>
        </List>
        {children}
      </RoutesStyled>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
