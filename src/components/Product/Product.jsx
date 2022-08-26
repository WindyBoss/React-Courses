/** @format */
import { PureComponent } from "react";

import Counter from "./components/Counter";
import ImageSwitcher from "./components/ImageSwitcher";

import ProductAttributions from "../ProductAttributions";

import {
  ImageContainer,
  ProductContainer,
  ProductName,
  Price,
  CounterAndImageContainer,
} from "./Product.styled";

import findPrice from "helpers/findPrice";

export default class Product extends PureComponent {
  state = {
    pictureIdx: 0,
    size: "small",
  };

  handleClick(e) {
    const { action } = e.target.dataset;
    const { gallery } = this.props.product;

    if (action === "increment") {
      this.setState((prevState) => {
        return prevState.pictureIdx + 1 === gallery.length
          ? { pictureIdx: 0 }
          : { pictureIdx: prevState.pictureIdx + 1 };
      });
    } else {
      this.setState((prevState) => {
        return prevState.pictureIdx - 1 < 0
          ? { pictureIdx: gallery.length - 1 }
          : { pictureIdx: prevState.pictureIdx - 1 };
      });
    }
  }

  componentDidMount() {
    const { size } = this.props;
    size && this.setState({ size });
  }

  setChosenAttributes(item, attribute) {
    return [
      {
        name: attribute.name,
        value: item.value,
      },
    ];
  }

  setAttributes(item, attribute) {
    const { product, productChange, idx } = this.props;

    productChange({
      ...product,
      newChosenAttributes: this.setChosenAttributes(item, attribute),
      idx: idx,
    });
  }

  render() {
    const {
      product,
      handleDecrement,
      handleIncrement,
      currency,
      idx,
      mainCart,
    } = this.props;

    const { size, pictureIdx } = this.state;

    const {
      brand,
      name,
      prices,
      amount,
      chosenAttributes,
      gallery,
      attributes,
    } = product;

    return (
      <ProductContainer>
        <div>
          <ProductName size={size}>
            {brand} {name}
          </ProductName>
          <Price size={size}>
            <span>{findPrice(prices, currency).currency.symbol}</span>
            {Math.round(findPrice(prices, currency).amount * amount * 100) /
              100}
          </Price>

          <ProductAttributions
            attributes={attributes}
            chosenAttributes={chosenAttributes}
            idx={idx}
            onClick={this.setAttributes.bind(this)}
            product={product}
            size={size}
          />
        </div>
        <CounterAndImageContainer>
          <Counter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            idx={idx}
            value={amount}
            product={product}
            size={size}
          />
          <ImageContainer size={size}>
            <img
              alt={name}
              src={gallery[pictureIdx]}
              width="auto"
              height="auto"
            />
            {mainCart && gallery.length > 1 && (
              <ImageSwitcher handleClick={this.handleClick.bind(this)} />
            )}
          </ImageContainer>
        </CounterAndImageContainer>
      </ProductContainer>
    );
  }
}
