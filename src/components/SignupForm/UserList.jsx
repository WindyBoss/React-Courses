import React from "react";
import PropTypes from 'prop-types';
import EmailIcon from '@mui/icons-material/Email';
import { UserListContainer, UserListItem, InfoContainer } from "./SignupForm.styled";

import { themeContext } from '../../context/authContext';

export function UserList({ userList }) {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => {  
      return (
        <UserListContainer colors={mainTheme.colors}>
          {userList.map(user => (
            <UserListItem colors={mainTheme.colors} key={user.id}>
              <EmailIcon style={{ fill: `${mainTheme.colors.hoverBtnBgColor}`}} />
              <InfoContainer>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
              </InfoContainer>
            </UserListItem>
          ))}
        </UserListContainer>
      );
      }}
    </themeContext.Consumer> 
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
};
