/** @format */

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

/*
* GraphQL - lib for easing API process
* ApolloClient - GraphQL lib, which is based on creating the different panel, where is the whole database, where is ease to test graphql fetch code

? The code is next
*/

const client = new ApolloClient({
    uri: "http://localhost:4000/data",
    cache: new InMemoryCache(),
});

async function takeData({ query }) {
    let data = null;
    try {
        data = await (await client.query({ query: gql `{${query}}` })).data;
    } catch (error) {
        data = "Error: " + error.message;
    }

    return data;
}

const getAllCategories = async() => {
    return await takeData({
        query: `
  categories {
        name
      }
      currencies {
        label
        symbol
      }`,
    });
};

const getProduct = async(productId) => {
    return await takeData({
        query: `
            product(id: "${productId}"){
              id
              name
              inStock
              gallery
              description
              brand
              prices{
                amount
                currency{
                  label
                  symbol
                }
              }
              attributes{
                id
                name
                type
                items{
                  displayValue
                  value
                  id
                }
              }
            }
            `,
    });
};

const getCategory = async(categoryId) => {
    return await takeData({
        query: `
    category (input: {title: "${categoryId}"}) {
      name
      products {
        gallery
        inStock
        category
        id
        name
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
    `,
    });
};

export { getAllCategories, client, getProduct, getCategory };