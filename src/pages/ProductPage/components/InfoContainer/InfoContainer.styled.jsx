/** @format */

import styled from "styled-components";

/* 
& InfoContainer styled components
*/

export const ProductBrand = styled.h3`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;

export const ProductName = styled.h4`
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;

export const AttributeName = styled.p`
  margin-bottom: 8px;

  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;

export const Price = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;

  color: #1d1f22;
`;

export const AddCartBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px 32px;
  margin-bottom: 40px;
  background: ${(props) => (props.disabled ? "grey" : "#5ece7b")};
  border: none;

  cursor: pointer;

  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;

  color: #ffffff;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const ProductDescription = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(12px, 12px + 0.4vw, 22px);
  line-height: 159.96%;
  color: #1d1f22;
`;

export const CurrencySymbol = styled.span`
  margin-right: 5px;
`;
