import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { FormElement } from './components/FormElement';
import { UserList } from './components/UserList';
import {
  UserListText,
  MainFormContainer,
} from './styles/SignupForm.styled';

import { themeContext } from 'context/authContext';

const shortid = require('shortid');

const SignupFormHooks = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const user = { ...values, id: shortid.generate() };
    onSubmit(user);
    resetForm();
  };

  return (
    <>
      <FormElement onSubmit={handleSubmit} />
    </>
  );
};

SignupFormHooks.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const SignupForm = () => {
  const { mainTheme } = useContext(themeContext);

  const [userList, setUserList] = useState([]);
  const notify = () => toast.error('Email already exists');

  const collectUsers = user => {
    if (!userList.find(userItem => userItem.email === user.email)) {
      setUserList([...userList, user]);
    } else {
      notify();
    }
  };

  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
          padding: '20px',
          margin: '10px 30px',
        }}
      >
        <MainFormContainer>
          <p style={{ color: mainTheme.colors.mainText }}>
            Signup form with hooks
          </p>
          <SignupFormHooks onSubmit={collectUsers} />
        </MainFormContainer>
      </div>
      <div
        style={{
          margin: '10px 30px',
          display: 'inline-block',
          border: `1px solid ${mainTheme.colors.containerBorderColor}`,
          padding: '20px',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            width: '305px',
            display: 'flex',
            border: `1px solid ${mainTheme.colors.containerBorderColor}`,
            padding: '20px',
            justifyContent: 'space-between',
          }}
        >
          <UserListText colors={mainTheme.colors}>User List</UserListText>
          <UserListText colors={mainTheme.colors}>
            Number of users: {userList.length}
          </UserListText>
        </div>
        <UserList userList={userList} />
      </div>
    </>
  );
};


export default SignupForm;