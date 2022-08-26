/** @format */

import { PureComponent } from "react";
import { MainImageContainer } from "./MainImage.styled";

export default class MainImage extends PureComponent {
  render() {
    const { image, alt } = this.props;
    return (
      <MainImageContainer>
        <img src={image} alt={alt} height="100%" width="auto" />
      </MainImageContainer>
    );
  }
}
