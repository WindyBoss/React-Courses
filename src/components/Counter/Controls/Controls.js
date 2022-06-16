import React from "react";
import Button from "./Controls.styled.jsx"

const Controls = ({ onDecrement, onIncrement, step, theme }) => (
    <div>
        <Button colors={theme} type="button" onClick={onIncrement}>Increase by {step}</Button>
        <Button colors={theme} type="button" onClick={onDecrement}>Decrease by {step}</Button>
    </div>

);

export default Controls;