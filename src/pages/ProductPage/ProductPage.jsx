/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductDataContainer } from "./ProductPage.styled";
import ImageList from "./components/ImageList";
import MainImage from "./components/MainImage";
import InfoContainer from "./components/InfoContainer";

import { addProduct } from "redux/cart/cartSlice";

import MainContainer from "components/MainContainer";
import ErrorBoundary from "components/ErrorBoundary";

import { getProduct } from "service/apolloClient";

import withRouter from "helpers/withRouter";

class ProductPage extends Component {
  state = {
    productData: null,
    chosenImage: "",
    error: false,
  };

  async componentDidMount() {
    const { params } = this.props;
    const { product } = await getProduct(params.productId);

    product
      ? this.setState({
          productData: product,
          chosenImage: product.gallery[0],
        })
      : this.setState({ error: true });
  }

  handleClick(image) {
    this.setState({ chosenImage: image });
  }

  render() {
    const { productData, chosenImage, error } = this.state;
    const { currency, addProduct } = this.props;

    return (
      <MainContainer>
        {productData && (
          <ProductDataContainer>
            <ImageList
              gallery={productData.gallery}
              onClick={this.handleClick.bind(this)}
            />
            <MainImage image={chosenImage} alt={productData.name} />
            <InfoContainer
              product={productData}
              currency={currency.currency}
              onClick={addProduct}
            />
          </ProductDataContainer>
        )}

        {error && <ErrorBoundary />}
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cart: state.cart,
  };
};

const mapDispatchToProps = { addProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductPage));
