import React, { Component, useState } from "react";
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { FormElement } from '../components/SignupForm/FormElement';
import { UserList } from '../components/SignupForm/UserList';
import { UserListText, MainFormContainer } from '../components/SignupForm/SignupForm.styled';

const shortid = require('shortid');

export default class SignupFormClass extends Component {
  handleSubmit = (values, { resetForm }) => {
    const user = { ...values, id: shortid.generate() };
    this.props.onSubmit(user);
    resetForm();
  };

  render() {
    return (
      <><FormElement onSubmit={this.handleSubmit} /></>
    );
  };
};

SignupFormClass.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const SignupFormHooks = ({onSubmit}) => {

  const handleSubmit = (values, { resetForm }) => {
    const user = { ...values, id: shortid.generate() };
    onSubmit(user);
    resetForm();
  };

  return (
    <><FormElement onSubmit={handleSubmit}/></>
  );
};

SignupFormHooks.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export const SignupForm = () => {
  /*
  *Object useState is possible, but better practice is to use useState Hook separately for each state variable
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = () => {
    setState(prevState => ({...prevState, email: 'sad'}));
  };

  */
  const [userList, setUserList] = useState([]);
  const notify = () => toast.error('Email already exists');

  const collectUsers = (user) => {
    if (!userList.find(userItem => userItem.email === user.email)) {
      setUserList([...userList, user]);
    } else {
      notify();
    }
  };

  return (
    <>
      <div style={{ display: 'inline-flex', border: '1px solid white', padding: '20px', margin: '10px 30px' }}>
        <MainFormContainer>
          <p>Signup form with class</p>
          <SignupFormClass onSubmit={collectUsers} />
        </MainFormContainer>
        <MainFormContainer>
          <p>Signup form with hooks</p>
          <SignupFormHooks onSubmit={collectUsers} />
        </MainFormContainer>
      </div>
      <div style={{ margin: '10px 30px', display: 'inline-block', border: '1px solid white', padding: '20px'}}>
        <div style={{ marginLeft: 'auto', width: '305px', display: 'flex', border: '1px solid white', padding: '20px', justifyContent: 'space-between'}}>
        <UserListText>User List</UserListText>
        <UserListText>Number of users: {userList.length}</UserListText>
        </div>
        <UserList userList={userList} />
      </div>
    </>
  );
}
