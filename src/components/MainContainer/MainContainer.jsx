/** @format */

import { PureComponent } from "react";
import { Container } from "./MainContainer.styled";
export default class MainContainer extends PureComponent {
  render() {
    const { children } = this.props;
    return <Container>{children}</Container>;
  }
}
