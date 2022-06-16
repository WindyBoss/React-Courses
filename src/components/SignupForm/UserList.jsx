import React from "react";
import PropTypes from 'prop-types';
import EmailIcon from '@mui/icons-material/Email';
import { UserListContainer, UserListItem, InfoContainer } from "./SignupForm.styled";

export function UserList({ userList }) {
  return (
    <UserListContainer>
      {userList.map(user => (
        <UserListItem key={user.id}>
          <EmailIcon />
          <InfoContainer>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </InfoContainer>
        </UserListItem>
      ))}
    </UserListContainer>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
};
