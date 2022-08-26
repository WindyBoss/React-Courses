/** @format */
import { ReactComponent as Arrow } from "images/arrowUp.svg";
import { PureComponent } from "react";

import {
  ImageSelectionContainer,
  ArrowContainer,
} from "./ImageSwitcher.styled";

export default class ImageSwitcher extends PureComponent {
  render() {
    const { handleClick } = this.props;
    return (
      <ImageSelectionContainer>
        <ArrowContainer
          data-action="decrement"
          rotate="rotate(90deg)"
          onClick={handleClick}
        >
          <Arrow width="12px" height="12px" fill="#fff" />
        </ArrowContainer>
        <ArrowContainer
          data-action="increment"
          rotate="rotate(-90deg)"
          onClick={handleClick}
        >
          <Arrow width="12px" height="12px" fill="#fff" />
        </ArrowContainer>
      </ImageSelectionContainer>
    );
  }
}
