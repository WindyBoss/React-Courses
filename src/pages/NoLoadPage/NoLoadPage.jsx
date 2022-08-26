/** @format */

import { PureComponent } from "react";

import { Title, NavLink } from "./NoLoadPage.styled";

import MainContainer from "components/MainContainer";

import { Button } from "./NoLoadPage.styled";

export default class NoLoadPage extends PureComponent {
  render() {
    return (
      <MainContainer>
        <Title>Sorry, you typed the wrong link</Title>
        <NavLink to="/">
          <Button>Back to Home Page</Button>
        </NavLink>
      </MainContainer>
    );
  }
}
