import React from "react";
import StyledValue from "./Value.styled.jsx";

const Value = ({ value, theme }) => (
    <StyledValue colors={theme}>{value}</StyledValue>
);

export default Value;