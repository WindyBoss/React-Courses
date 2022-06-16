import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RoutesStyled, LinkStyled, List } from './ThemeSwitcher.styled';

export const Layout = ({colors}) => {
  return (
    <div>
      <RoutesStyled>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Reader'>Reader</LinkStyled>
        </List>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Create'>Create</LinkStyled>
        </List>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Pokemon'>Find Pokemon</LinkStyled>
        </List>
      </RoutesStyled>
      <Outlet />
    </div>
  );
};


Layout.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
}
