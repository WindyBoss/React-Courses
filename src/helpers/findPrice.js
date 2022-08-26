/** @format */

function findPrice(prices, currency) {
    return prices.filter((price) => {
        return price.currency.symbol === currency.symbol;
    })[0];
}

export default findPrice;