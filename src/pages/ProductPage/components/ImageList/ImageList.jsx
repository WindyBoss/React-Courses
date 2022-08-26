/** @format */

import { PureComponent } from "react";
import {
  ListImageContainer,
  ListItem,
  SmallImageContainer,
} from "./ImageList.styled";

export default class ImageList extends PureComponent {
  render() {
    const { gallery, onClick } = this.props;
    return (
      <ListImageContainer>
        {gallery.map((image) => {
          return (
            <ListItem key={image} onClick={() => onClick(image)}>
              <SmallImageContainer>
                <img src={image} alt={image} height="85" width="auto" />
              </SmallImageContainer>
            </ListItem>
          );
        })}
      </ListImageContainer>
    );
  }
}
