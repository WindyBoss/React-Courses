/** @format */

import { PureComponent } from "react";

import { Title } from "./HomePage.styled";
import MainContainer from "components/MainContainer";

export default class HomePage extends PureComponent {
  render() {
    return (
      <MainContainer>
        <Title>
          Welcome to our e-shop! Check the assortment by choosing the category.
        </Title>
      </MainContainer>
    );
  }
}
