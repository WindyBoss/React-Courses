/** @format */

import { PureComponent } from "react";

import { Title } from "./ErrorBoundary.styled";
import MainContainer from "components/MainContainer";

export default class ErrorBoundary extends PureComponent {
  render() {
    console.log("x");
    return (
      <MainContainer>
        <Title>Sorry, something went wrong, please try again</Title>
      </MainContainer>
    );
  }
}
