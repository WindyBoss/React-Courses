/** @format */

import { PureComponent } from "react";
import {
  ProductListContainer,
  ProductEl,
  ImageContainer,
  InfoContainer,
  CurrencySymbol,
  OutOfStockText,
  NavLink,
} from "./ProductList.styled";

export default class ProductList extends PureComponent {
  render() {
    const { category, currency, setProduct } = this.props;
    return (
      <ProductListContainer>
        {category.products.map((product) => {
          const { id, name, gallery, inStock, prices } = product;
          return (
            <NavLink
              onClick={() => setProduct(id)}
              to={`../product/${id}`}
              key={id}
              replace={true}
            >
              <ProductEl>
                <div>
                  <ImageContainer>
                    <img
                      alt={`${name}`}
                      src={`${gallery[0]}`}
                      height="100%"
                      width="95%"
                      style={{ opacity: inStock ? "1" : "0.5" }}
                    />
                    {!inStock && <OutOfStockText>Out of Stock</OutOfStockText>}
                  </ImageContainer>
                  <InfoContainer>
                    <p>{name}</p>
                    <p>
                      <CurrencySymbol>
                        {
                          prices.filter(
                            (price) => price.currency.symbol === currency.symbol
                          )[0].currency.symbol
                        }
                      </CurrencySymbol>
                      {
                        prices.filter(
                          (price) => price.currency.symbol === currency.symbol
                        )[0].amount
                      }
                    </p>
                  </InfoContainer>
                </div>
              </ProductEl>
            </NavLink>
          );
        })}
      </ProductListContainer>
    );
  }
}
