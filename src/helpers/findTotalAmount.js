/** @format */

import findPrice from "./findPrice";

function findTotalAmount(cart, currency) {
    return (
        Math.round(
            cart.reduce(
                (acc, item) => acc + findPrice(item.prices, currency).amount * item.amount,
                0
            ) * 100
        ) / 100
    );
}

export default findTotalAmount;