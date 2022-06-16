import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RoutesStyled, LinkStyled, List } from './ThemeSwitcher.styled';

/*
* Component Layout is used to Routes creation, in which is written the name of Routes and the path to which it is connected in attribute 'to'
* 'List' => <li></li>
* 'LinkStyled' => <Link></Link>
* <Link></Link> - component from 'react-router-dom', which is responsible for creating a link to the page
* <Outlet/> - component from 'react-router-dom', which is responsible for rendering the page from link
* <RoutesStyled/> - component from './ThemeSwitcher.styled.jsx', which is responsible for styling the list of links - tag <ul></ul>
*/

export const Layout = ({colors}) => {
  return (
    <div>
      <RoutesStyled>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Clock'>Clock</LinkStyled>
        </List>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Player'>Player</LinkStyled>
        </List>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Reader'>Reader</LinkStyled>
        </List>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Tabs'>Tabs</LinkStyled>
        </List>
        <List>
          <LinkStyled colors={colors} to='/react-homework-template/Todolist'>Todolist</LinkStyled>
        </List>
      </RoutesStyled>
      <Outlet/>
    </div>
  )
}


Layout.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
}
