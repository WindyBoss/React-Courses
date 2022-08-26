/** @format */

import styled from "styled-components";

/* 
& ProductAttributions styled components
*/

export const AttributionList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const VariationList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;

  padding: 0;
  list-style: none;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const VariationEl = styled.li`
  padding: 2px;
  // margin: 5px;

  border: ${(props) => {
    if (props.chosenAttributes.length > 0) {
      return props.attType === "swatch" ? "2px solid #5ECE7B" : "none";
    } else {
      return props.attType === "swatch" ? "2px solid #fff" : "none";
    }
  }};

  :hover,
  focus {
    transform: scale(1.2);
  }
`;

export const VariationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => {
    if (props.attType === "swatch") {
      return props.size === "small" ? "16px" : "36px";
    } else {
      return props.size === "small" ? "auto" : "63px";
    }
  }};

  height: ${(props) => {
    if (props.attType === "swatch") {
      return props.size === "small" ? "16px" : "36px";
    } else {
      return props.size === "small" ? "24px" : "45px";
    }
  }};

  background-color: ${(props) => {
    if (props.chosenAttributes.length > 0) {
      return props.attType === "swatch" ? props.value : "black";
    } else {
      return props.attType === "swatch" ? props.value : "transparent";
    }
  }};

  padding: ${(props) => (props.attType === "swatch" ? "0" : "0px 10px")};

  cursor: pointer;

  font-size: 14px;

  color: ${(props) => {
    if (props.chosenAttributes.length > 0) {
      return "#ffffff";
    } else {
      return "inherit";
    }
  }};
`;

export const AttributeName = styled.p`
  margin-top: 15px;
  margin-bottom: 5px;

  font-family: ${(props) =>
    props.size === "small" ? "Raleway" : "Roboto Condensed"};
  font-style: normal;
  font-weight: ${(props) => (props.size === "small" ? "400" : "700")};
  font-height: ${(props) => (props.size === "small" ? "16px" : "100%")};
  font-size: ${(props) =>
    props.size === "small"
      ? "clamp(10px, 10px + 0.2vw, 16px)"
      : "clamp(16px, 16px + 0.3vw, 22px)"};
`;
