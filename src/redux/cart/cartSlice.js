/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, { payload }) {
            const repeatedProduct = state.cart.find((p) => p.attId === payload.attId);

            if (repeatedProduct) {
                repeatedProduct.amount = repeatedProduct.amount + 1;

                state.cart = [
                    ...state.cart.filter(
                        (p, idx) => p.attId !== payload.attId || idx !== payload.idx
                    ),
                ];

                payload.idx !== undefined &&
                    state.cart.splice(payload.idx, 0, repeatedProduct);
            } else {
                state.cart.push({...payload, amount: 1 });
            }
        },
        deleteProduct(state, { payload }) {
            const repeatedProduct = state.cart.find((p) => p.attId === payload.attId);

            if (repeatedProduct.amount > 1) {
                repeatedProduct.amount = repeatedProduct.amount - 1;
                state.cart = [...state.cart.filter((p) => p.attId !== payload.attId)];

                payload.idx !== undefined ?
                    state.cart.splice(payload.idx, 0, repeatedProduct) :
                    state.cart.push(repeatedProduct);
            } else {
                state.cart = [...state.cart.filter((p) => p.attId !== payload.attId)];
            }
        },

        productChange(state, { payload }) {
            const setChosenAttributes = [
                ...payload.chosenAttributes.filter((att) => {
                    return att.name !== payload.newChosenAttributes[0].name;
                }),
                ...payload.newChosenAttributes,
            ];

            setChosenAttributes.sort((a, b) => {
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

            const modifiedProductData = {
                ...payload,
                chosenAttributes: setChosenAttributes,
                attId: payload.id +
                    setChosenAttributes
                    .map((att) => {
                        return `:${att.name}-${att.value}`;
                    })
                    .toString(),
            };

            const repeatedProduct = state.cart.find((p) => {
                return p.attId === modifiedProductData.attId;
            });

            if (repeatedProduct) {
                repeatedProduct.amount = repeatedProduct.amount + 1;

                state.cart = [
                    ...state.cart.filter((p, idx) => {
                        return p.attId !== repeatedProduct.attId && idx !== payload.idx;
                    }),
                ];

                state.cart.splice(payload.idx, 0, repeatedProduct);
            } else {
                state.cart = [...state.cart.filter((p, idx) => idx !== payload.idx)];
                state.cart.splice(payload.idx, 0, modifiedProductData);
            }
        },
    },
});

export const { addProduct, deleteProduct, productChange } = cartSlice.actions;

export default cartSlice.reducer;