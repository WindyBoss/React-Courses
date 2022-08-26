/** @format */

import styled from "styled-components";

/* 
& Product styled components
*/

export const ImageContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: ${(props) => (props.size === "small" ? "121px" : "200px")};
  height: ${(props) => (props.size === "small" ? "190px" : "288px")};

  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
`;

export const ProductContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;
`;

export const Price = styled.p`
  margin: ${(props) => (props.size === "small" ? "0" : "0 0 20px 0")};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${(props) => (props.size === "small" ? "500" : "700")};
  font-size: ${(props) =>
    props.size === "small"
      ? "clamp(12px, 12px + 0.3vw, 20px)"
      : "clamp(18px, 18px + 0.3vw, 28px)"};

  font-height: ${(props) => (props.size === "small" ? "160%" : "100%")};

  color: #1d1f22;
`;

export const ProductName = styled.p`
  margin: ${(props) => (props.size === "small" ? "0 0 4px 0" : "0 0 20px 0")};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${(props) => (props.size === "small" ? "300" : "400")};
  font-size: ${(props) =>
    props.size === "small" ? "16px" : "clamp(20px, 20px + 0.4vw, 26px)"};

  font-height: ${(props) => (props.size === "small" ? "160%" : "90%")};
  color: #1d1f22;
`;

export const CounterAndImageContainer = styled.div`
  display: inline-flex;
`;
