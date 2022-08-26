/** @format */
import Parser from "html-react-parser";
import { PureComponent } from "react";
import toast from "react-hot-toast";
import {
  ProductBrand,
  ProductName,
  AttributeName,
  Price,
  AddCartBtn,
  ProductDescription,
  CurrencySymbol,
} from "./InfoContainer.styled";

import ProductAttributions from "components/ProductAttributions";

export default class InfoContainer extends PureComponent {
  state = {
    chosenAttributes: [],
  };

  handleClick = (e) => {
    const { product, onClick } = this.props;
    const { chosenAttributes } = this.state;

    if (chosenAttributes.length < product.attributes.length) {
      toast.error("Choose all variations");
      return;
    }

    const newArr = [...chosenAttributes];

    e.preventDefault();

    newArr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    onClick({
      ...product,
      chosenAttributes,
      id: product.id,
      attId:
        product.id +
        newArr
          .map((att) => {
            return `:${att.name}-${att.value}`;
          })
          .toString(),
    });
    toast.success("Product was added to cart");
  };

  collectData = (data) => {
    this.setState((prevState) => {
      return {
        chosenAttributes: [
          ...prevState.chosenAttributes.filter((att) => att.name !== data.name),
          data,
        ],
      };
    });
  };

  filterPrice = (product, currency) => {
    return product.prices.filter(
      (price) => price.currency.symbol === currency.symbol
    )[0];
  };

  render() {
    const { product, currency } = this.props;
    const { chosenAttributes } = this.state;

    return (
      <div>
        <ProductBrand>{product.brand}</ProductBrand>
        <ProductName>{product.name}</ProductName>
        <ProductAttributions
          attributes={product.attributes}
          chosenAttributes={chosenAttributes}
          product={product}
          onClick={this.collectData}
          size="large"
          page="product"
        />
        <AttributeName>Price:</AttributeName>
        <Price>
          <CurrencySymbol>
            {this.filterPrice(product, currency).currency.symbol}
          </CurrencySymbol>
          {this.filterPrice(product, currency).amount}
        </Price>
        <AddCartBtn
          onClick={(e) => this.handleClick(e)}
          type="submit"
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of stock"}
        </AddCartBtn>
        <ProductDescription>{Parser(product.description)}</ProductDescription>
      </div>
    );
  }
}
